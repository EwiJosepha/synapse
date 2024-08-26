"use client"

import React, { useState } from 'react';
import MessageList from './messageList';
import MessageInput from './messageInput';
import EmojiPicker from './emojiPicker';
import AttachmentOptions from './attachment';
import { Message } from '@/lib/validations/messages';
import { useAppContext } from '@/providers/context/app-context';

const MessageBox: React.FC = () => {
  const { currentColor } = useAppContext()
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [newEmoji, setNewEmoji] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length, text: `${newMessage.trim()} ${newEmoji ?? ''}`, emoji: newEmoji },
      ]);
      setNewMessage('');
      setNewEmoji("");
    }
  };

  const handleEmojiClick = (emoji: string) => {
    setNewMessage(newMessage.trim() + ' ' + emoji);
    setNewEmoji(emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 relative h-screen flex flex-col sm:p-6 md:p-8" style={{background:currentColor || "#F5F5F5"}}>
      <h2 className="text-xl font-bold mb-4 md:text-2xl md:mb-6">Message Box</h2>
      <MessageList messages={messages} />
      <MessageInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
        showEmojiPicker={showEmojiPicker}
        setShowEmojiPicker={setShowEmojiPicker}
        showAttachmentOptions={showAttachmentOptions}
        setShowAttachmentOptions={setShowAttachmentOptions}
      />
      {showEmojiPicker && <EmojiPicker handleEmojiClick={handleEmojiClick} />}
      {showAttachmentOptions && <AttachmentOptions />}
    </div>
  );
};

export default MessageBox;

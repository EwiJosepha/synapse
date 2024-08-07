"use client"

import React, { useState } from 'react';
import { SendHorizonal, Smile } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  emoji: string | null;
}

const emojiList = [
  '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🥲', '☺️',
  '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗',
  '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓',
  '😎', '🥸', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕',
  '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤',
  '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰',
  '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑',
  '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤',
  '😪', '😵', '🤕', '🤒', '🤮', '🤢', '🥴', '😷', '🤧', '🤳',
  '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸',
  '😹', '😻', '😼', '😽', '🙀', '😿', '😾'
];


const MessageBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [newEmoji, setNewEmoji] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length, text: `${newMessage.trim()} ${newEmoji ?? ''}`, emoji: newEmoji },
      ]);
      setNewMessage('');
      setNewEmoji(null);
    }
  };

  const handleEmojiClick = (emoji: string) => {
    setNewMessage(newMessage.trim() + ' ' + emoji);
    setNewEmoji(emoji);
    setShowEmojiPicker(false);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-xl font-bold mb-4">Message Box</h2>
      <div className="space-y-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`px-4 py-2 rounded-md ${message.id % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}
          >
            {message.text}{' '}
            {message.emoji && <span className="text-2xl">{message.emoji}</span>}
          </div>
        ))}

      </div>
      <div className="mt-4 flex space-x-2 relative">
        <button
          onClick={toggleEmojiPicker}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Smile />
        </button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {showEmojiPicker && (
          <div className="absolute bg-white shadow-lg rounded-md p-2 z-10 grid grid-cols-8 gap-2">
            {emojiList.map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleEmojiClick(emoji)}
                className="text-2xl hover:bg-gray-200 rounded-md p-2"
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <SendHorizonal />
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
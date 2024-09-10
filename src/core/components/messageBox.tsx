"use client"

import React, { useState, useEffect, useCallback } from 'react';
import MessageList from './messageList';
import MessageInput from './messageInput';
import EmojiPicker from './emojiPicker';
import AttachmentOptions from './attachment';
import { MessageSchema } from '@/lib/interfaces/message';
import { baseUrl, messagesUrl } from '@/providers/constants/constants';
import axios from 'axios';
import { useAppContext } from '@/providers/context/app-context';
import { io } from 'socket.io-client';
import { fetchCurrentUser } from '../../../utils/currentUser';
const socket = io(baseUrl)

const MessageBox: React.FC = () => {
  const {  messageTo } = useAppContext();
  const [messages, setMessages] = useState<MessageSchema[]>([]);
  const [conversationId, setConversationId] = useState('');
  const [senderId, setSendersId] = useState("")
  const [newMessage, setNewMessage] = useState('');
  const [newEmoji, setNewEmoji] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);

  //fetching messages for a specific conversation
  const fetchMessages = useCallback(async () => {
    if (!conversationId) return;
    try {
      const response = await axios.get(`${baseUrl}/messages/conversation/${conversationId}`);
      setMessages(response.data);      
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }, [conversationId]);

  // Effect to fetch messages when conversationId changes
  useEffect(() => {
    if (conversationId) {
      fetchMessages();
    }
  }, [conversationId, fetchMessages]);

  useEffect(() => {
    const fnCurrentUser = async () => {
      const currentUser = await fetchCurrentUser()
     const data = currentUser?.data
     const senderId = data?.id
     setSendersId(senderId)
    }
    fnCurrentUser()
  }, [])
  
  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const newMessageItem: MessageSchema = {
        content: `${newMessage.trim()} ${newEmoji ?? ''}`,
        receiverId: messageTo || '',
        senderId: senderId,
        conversationId: conversationId,
        reactions: [],
        attachments: [],
        fileAttachment: [],
        emoji: newEmoji,
        timestamp: Date.now()
      };
      try {
        // Send the message to the server
        const response = await axios.post(messagesUrl, newMessageItem);
        // Update local state with the new message
        setMessages(prevMessages => [...prevMessages, response.data]);
        setNewMessage('');
        setNewEmoji('');
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const handleEmojiClick = (emoji: string) => {
    setNewMessage(newMessage.trim() + ' ' + emoji);
    setNewEmoji(emoji);
    setShowEmojiPicker(false);
  };

  // Fetch messages initially
  useEffect(() => {
    socket.on("newMessage", (message: MessageSchema) => {
      if (message.conversationId === conversationId) {
        setMessages(prevMessages => [...prevMessages, message]);
      }
    });

    return () => {
      socket.off("newMessage");
    };
  }, [conversationId]);

  return (
    <div className="bg-red-50 shadow-md rounded-md max-h-screen flex flex-col">
      <h2 className="text-xl font-bold mb-4 md:text-2xl md:mb-6 mt-[70px]">Message Box</h2>
      <MessageList messages={messages} /> 
      
      <MessageInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        onMessageSent={handleSendMessage}
        showEmojiPicker={showEmojiPicker}
        setShowEmojiPicker={setShowEmojiPicker}
        showAttachmentOptions={showAttachmentOptions}
        setShowAttachmentOptions={setShowAttachmentOptions}
        conversationId={conversationId}
        setConversationId={setConversationId}
      />
      {showEmojiPicker && <EmojiPicker handleEmojiClick={handleEmojiClick} />}
      {showAttachmentOptions && <AttachmentOptions />}
    </div>
  );
};

export default MessageBox;
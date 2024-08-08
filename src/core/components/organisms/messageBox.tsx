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
    <div className="bg-white shadow-md rounded-md p-4 relative h-screen flex flex-col sm:p-6 md:p-8">
      <h2 className="text-xl font-bold mb-4 md:text-2xl md:mb-6">Message Box</h2>
      <div className="flex-1 overflow-y-auto flex flex-col space-y-2 mb-20 sm:mb-24 md:mb-28">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`px-4 py-2 rounded-md sm:px-6 md:px-8 ${message.id % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
              }`}
          >
            {message.text}{' '}
            {message.emoji && <span className="text-2xl md:text-3xl">{message.emoji}</span>}
          </div>
        ))}
      </div>
      {/* <div className="flex space-x-2 fixed bottom-0 left-0 right-0 bg-white py-4 px-4 sm:px-6 sm:py-6 md:px-8 md:py-8">
        <button
          onClick={toggleEmojiPicker}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:py-3 sm:px-5 md:py-4 md:px-6"
        >
          <Smile />
        </button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none sm:px-4 sm:py-2 md:px-6 md:py-3"
        />
        {showEmojiPicker && (
          <div className="absolute bottom-[60px] left-0 bg-white shadow-lg rounded-md p-2 z-10 grid grid-cols-8 gap-2 sm:bottom-[70px] sm:p-3 md:bottom-[80px] md:p-4">
            {emojiList.map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleEmojiClick(emoji)}
                className="text-2xl md:text-3xl hover:bg-gray-200 rounded-md p-2 sm:p-3 md:p-4"
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:py-3 sm:px-5 md:py-4 md:px-6"
        >
          <SendHorizonal />
        </button>
      </div> */}

      <div className="flex flex-col space-y-2 fixed bottom-0 left-0 right-0 bg-white py-3 px-3 sm:flex-row sm:space-x-2 sm:space-y-0 sm:py-4 sm:px-4 md:py-6 md:px-6 lg:py-8 lg:px-8">
        <button
          onClick={toggleEmojiPicker}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:py-3 sm:px-4 md:py-4 md:px-5 lg:py-4 lg:px-6"
        >
          <Smile />
        </button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
        />
        {showEmojiPicker && (
          <div className="absolute bottom-[50px] left-0 bg-white shadow-lg rounded-md p-2 z-10 grid grid-cols-8 gap-2 sm:bottom-[60px] sm:p-3 md:bottom-[70px] md:p-4 lg:bottom-[80px] lg:p-5">
            {emojiList.map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleEmojiClick(emoji)}
                className="text-2xl md:text-3xl lg:text-4xl hover:bg-gray-200 rounded-md p-2 sm:p-3 md:p-4 lg:p-5"
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:py-3 sm:px-4 md:py-4 md:px-5 lg:py-4 lg:px-6"
        >
          <SendHorizonal />
        </button>
      </div>
    </div>
  );
};
export default MessageBox;
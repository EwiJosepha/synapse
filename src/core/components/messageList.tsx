// MessageList.tsx
import React from 'react';

interface Message {
  id: number;
  text: string;
  emoji: string | null;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-2 overflow-y-auto flex flex-col space-y-4 mb-20 sm:mb-24 md:mb-28 max-w-[400px]">
      {messages.map((message) => (
        <div
          key={message.id}
          className="px-4 py-2 rounded-md sm:px-6 md:px-8 bg-gray-200"
        >
          {message.text}{' '}
          {message.emoji && <span className="text-2xl md:text-3xl">{message.emoji}</span>}
        </div>
      ))}
    </div>
  );
};

export default MessageList;

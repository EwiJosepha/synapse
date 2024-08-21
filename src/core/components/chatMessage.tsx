import React from 'react';
import dayjs from 'dayjs';

interface ChatMessageProps {
  message: {
    id: number;
    text: string;
    emoji: string;
    imageUrl?: string;
    fileUrl?: string;
    videoUrl?: string;
    timestamp: number;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formattedTimestamp = dayjs.unix(message.timestamp).format('hh:mm A');

  return (
    <div className="px-4 py-2 rounded-md sm:px-6 md:px-8 bg-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <p>{message.text}</p>
          {message.emoji && <span className="text-2xl md:text-3xl">{message.emoji}</span>}
        </div>
        <span className="text-gray-500 text-sm">{formattedTimestamp}</span>
      </div>
      {message.imageUrl && (
        <img src={message.imageUrl} alt="Message" className="max-w-full h-auto mt-2" />
      )}
      {message.videoUrl && (
        <video controls className="max-w-full h-auto mt-2">
          <source src={message.videoUrl} type="video/mp4" />
        </video>
      )}
      {message.fileUrl && (
        <a href={message.fileUrl} download className="block mt-2">
          Download File
        </a>
      )}
    </div>
  );
};

export default ChatMessage;
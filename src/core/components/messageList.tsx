import React, { useEffect, useState } from 'react';
import { MessageSchema } from '@/lib/interfaces/message';
import { fetchCurrentUser } from '../../../utils/currentUser';
import { Dayjs } from 'dayjs';

const MessageList: React.FC<{ messages: MessageSchema[] }> = ({ messages }) => {
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const currentUser = await fetchCurrentUser();
        setCurrentId(currentUser.data.id);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    getCurrentUser();
  }, []);

  return (
    <div className="max-w-[97%] flex-2 overflow-y-auto flex flex-col space-y-4 mb-20">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`px-4 py-2 rounded-md sm:px-6 md:px-8 ${msg.senderId === currentId ? 'bg-blue-200 ml-auto' : 'bg-gray-200 mr-auto'
            }`}
        >
          <p>{msg.content}</p>
          <span className="text-sm text-gray-500">
            {new Date(msg.timestamp).toLocaleString()} {/* Format the date here */}
          </span>        </div>
      ))}

    </div>
  );
};

export default MessageList;
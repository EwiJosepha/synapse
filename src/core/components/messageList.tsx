import React, { useEffect, useState } from 'react';
import { MessageSchema } from '@/lib/interfaces/message';
import { fetchCurrentUser } from '../../../utils/currentUser';

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
    <div className="flex-2 overflow-y-auto flex flex-col space-y-4 mb-20 sm:mb-24 md:mb-28 max-w-[400px]">
        {messages.map((msg, index) => (
        <div 
          key={index} 
          className={`px-4 py-2 rounded-md sm:px-6 md:px-8 ${
            msg.senderId === currentId ? 'bg-blue-200 ml-auto' : 'bg-gray-200 mr-auto'
          }`}
        >
          <p>{msg.content}</p>
        </div>
      ))}


      <div>
        <p>helloooooaosssoosososososooso</p>
        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>
        <p>helloooooaosssoosososososooso</p>
        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>    
        <p>helloooooaosssoosososososooso</p>
        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>
        <p>helloooooaosssoosososososooso</p>
        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>
        <p>helloooooaosssoosososososooso</p>
        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>    
        <p>helloooooaosssoosososososooso</p>
        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>

        <p>helloooooaosssoosososososooso</p>
        <p>helloooooaosssoosososososooso</p>
      </div>


    </div>
  );
};

export default MessageList;
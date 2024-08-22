// MessageList.tsx
import { useAppContext } from '@/providers/context/app-context';
import React, { useEffect, useState } from 'react';

interface Message {
  id: number;
  text: string;
  emoji: string | null;
}

interface MessageListProps {
  messages: Message[];
}

interface ContentMessages {
  content: string[]
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const{ userMessages, setUserMessages} = useAppContext()
  const[contentMessages, setContentMessages]= useState<ContentMessages>()

  useEffect(() => {
    if (Array.isArray(userMessages)) {
      const userMessageContents = userMessages.map(message => message.content);
      const messageContents = userMessages.map(message => message.content); 
      setContentMessages({ content: messageContents });
      const initialContents = messages.map(message => message.text); 
      // setContentMessages({ content: [...initialContents, ...userMessageContents] });
    }
  }, [userMessages, messages]);

  // const combinedMessages = contentMessages?.content.concat(message ? [message] : []);

   return (
    <div className="flex-2 overflow-y-auto flex flex-col space-y-4 mb-20 sm:mb-24 md:mb-28 max-w-[400px]">
      {contentMessages?.content.map((msg, index) => (
        <div key={index} className="px-4 py-2 rounded-md sm:px-6 md:px-8 bg-gray-200">
          {msg}
        </div>
      ))}
    </div>
  );
};

export default MessageList;

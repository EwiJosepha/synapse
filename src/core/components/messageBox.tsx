// "use client"

// import React, { useState } from 'react';
// import MessageList from './messageList';
// import MessageInput from './messageInput';
// import EmojiPicker from './emojiPicker';
// import AttachmentOptions from './attachment';

// interface Message {
//   id: number;
//   text: string;
//   timestamp: number;
//   emoji: string;
//   imageUrl: string;
// };

// const MessageBox: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [newEmoji, setNewEmoji] = useState("");
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       const newMessageItem: Message = {
//         id: Date.now(), // Use the current timestamp as the unique identifier
//         text: `${newMessage.trim()} ${newEmoji ?? ''}`,
//         emoji: newEmoji,
//         timestamp: Date.now(),
//         imageUrl: ''
//       };
//       setMessages([...messages, newMessageItem]);
//       setNewMessage('');
//       setNewEmoji("");
//     }
//   };

//   const handleEmojiClick = (emoji: string) => {
//     setNewMessage(newMessage.trim() + ' ' + emoji);
//     setNewEmoji(emoji);
//     setShowEmojiPicker(false);
//     setNewEmoji(''); //clear the newEmoji state
//   };

//   return (
//     <div className="bg-white shadow-md rounded-md p-4 relative h-screen flex flex-col sm:p-6 md:p-8">
//       <h2 className="text-xl font-bold mb-4 md:text-2xl md:mb-6">Message Box</h2>
//       <MessageList messages={messages} />
//       <MessageInput
//         newMessage={newMessage}
//         setNewMessage={setNewMessage}
//         handleSendMessage={handleSendMessage}
//         showEmojiPicker={showEmojiPicker}
//         setShowEmojiPicker={setShowEmojiPicker}
//         showAttachmentOptions={showAttachmentOptions}
//         setShowAttachmentOptions={setShowAttachmentOptions}
//       />
//       {showEmojiPicker && <EmojiPicker handleEmojiClick={handleEmojiClick} />}
//       {showAttachmentOptions && <AttachmentOptions />}
//     </div>
//   );
// };

// export default MessageBox;



"use client"
import React, { useState, useEffect } from 'react';
import MessageList from './messageList';
import MessageInput from './messageInput';
import EmojiPicker from './emojiPicker';
import AttachmentOptions from './attachment';
import { MessageSchema } from '@/lib/interfaces/message';
import { messagesUrl } from '@/providers/constants/constants';
import axios from 'axios';
import { useAppContext } from '@/providers/context/app-context';

const MessageBox: React.FC = () => {
  const { socket, messageTo } = useAppContext();
  const [messages, setMessages] = useState<MessageSchema[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [newEmoji, setNewEmoji] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const newMessageItem: MessageSchema = {
        // id: Date.now(), 
        // text: newMessage,
        // emoji: newEmoji,
        // timestamp: Date.now(), 
        // imageUrl: ''
        content: `${newMessage.trim()} ${newEmoji ?? ''}`,
        receiverId: '',
        senderId: null,
        conversationId: '',
        reactions: [],
        attachments: [],
        emoji: newEmoji,
        timestamp: Date.now()
      };
      
      // Update the messages state directly
      setMessages([...messages, newMessageItem]);
      setNewMessage('');
      setNewEmoji("");
    }
  };

  const handleEmojiClick = (emoji: string) => {
    setNewMessage(newMessage.trim() + ' ' + emoji);
    setNewEmoji(emoji);
    setShowEmojiPicker(false);
  };

  // Fetch messages initially and on socket events
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(messagesUrl);
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();

    // Listen for socket events (e.g., "newMessage")
    socket.on("newMessage", fetchMessages);

    // Clean up event listener on component unmount
    return () => {
      socket.off("newMessage", fetchMessages);
    };
  }, []);

  return (
    <div className="bg-white shadow-md rounded-md p-4 relative h-screen flex flex-col sm:p-6 md:p-8">
      <h2 className="text-xl font-bold mb-4 md:text-2xl md:mb-6">Message Box</h2>
      <MessageList messages={messages} /> 
      <MessageInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage} // Pass the handleSendMessage function
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
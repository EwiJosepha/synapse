// "use client"

// import React, { useState } from 'react';
// import { SendHorizonal, Smile, Plus, Mic, File, Image, Video } from 'lucide-react';

// interface Message {
//   id: number;
//   text: string;
//   emoji: string | null;
// }

// const emojiList = [
//   '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🥲', '☺️',
//   // Add more emojis as required
// ];

// const MessageBox: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [newEmoji, setNewEmoji] = useState<string | null>(null);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       setMessages([
//         ...messages,
//         { id: messages.length, text: `${newMessage.trim()} ${newEmoji ?? ''}`, emoji: newEmoji },
//       ]);
//       setNewMessage('');
//       setNewEmoji(null);
//     }
//   };

//   const handleEmojiClick = (emoji: string) => {
//     setNewMessage(newMessage.trim() + ' ' + emoji);
//     setNewEmoji(emoji);
//     setShowEmojiPicker(false);
//   };

//   const toggleEmojiPicker = () => {
//     setShowEmojiPicker(!showEmojiPicker);
//   };

//   const toggleAttachmentOptions = () => {
//     setShowAttachmentOptions(!showAttachmentOptions);
//   };

//   return (
//     <div className="bg-white shadow-md rounded-md p-4 relative h-screen flex flex-col sm:p-6 md:p-8">
//       <h2 className="text-xl font-bold mb-4 md:text-2xl md:mb-6">Message Box</h2>
//       <div className="flex-2 overflow-y-2 flex flex-col space-y-4 mb-20 sm:mb-24 md:mb-28 max-w-[400px]">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className="px-4 py-2 rounded-md sm:px-6 md:px-8 bg-gray-200"
//           >
//             {message.text}{' '}
//             {message.emoji && <span className="text-2xl md:text-3xl">{message.emoji}</span>}
//           </div>
//         ))}
//       </div>

//       <div className="w-full flex flex-row space-y-2 fixed bottom-0 left-0 right-0 bg-white py-3 px-3">

//         {/* Emoji Picker Button */}
//         <button
//           onClick={toggleEmojiPicker}
//           className="text-black font-bold py-1 px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 sm:py-2 sm:px-3 sm:text-sm md:py-3 md:px-4 lg:py-4 lg:px-5 lg:text-lg"
//         >
//           <Smile className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
//         </button>

//         {/* Plus Button for Attachments */}
//         <button
//           onClick={toggleAttachmentOptions}
//           className="bg-purple-500 hover:bg-purple-300 text-white font-bold py-2 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 sm:py-3 sm:px-4 md:py-4 md:px-5 lg:py-4 lg:px-6"
//         >
//           <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"/>
//         </button>

//         {showAttachmentOptions && (
//           <div className="absolute bottom-[60px] left-0 bg-white shadow-lg rounded-md p-2 z-10 flex flex-col gap-2 sm:bottom-[60px] sm:p-3 md:bottom-[70px] md:p-4 lg:bottom-[80px] lg:p-5">
//             <button className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
//               <File /> Document
//             </button>
//             <button className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
//               <Image /> Image
//             </button>
//             <button className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
//               <Video /> Video
//             </button>
//           </div>
//         )}

//         <form className="flex flex-1">
//           <textarea
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Type your message..."
//             className="w-full resize-none rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-purple-500"
//           />
//         </form>

//         {/* Conditionally Render Send or Mic Icon */}
//         <button
//           onClick={handleSendMessage}
//           className={`bg-purple-500 hover:bg-purple-300 text-white font-bold py-2 px-3 rounded-md sm:py-3 sm:px-4 md:py-4 md:px-5 lg:py-4 lg:px-6 
//             ${newMessage.trim() ? '' : 'hidden'}`}
//         >
//           <SendHorizonal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"/>
//         </button>

//         {!newMessage.trim() && (
//           <button
//             className="bg-purple-500 hover:bg-purple-300 text-white font-bold py-2 px-3 rounded-md sm:py-3 sm:px-4 md:py-4 md:px-5 lg:py-4 lg:px-6"
//           >
//             <Mic className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"/>
//           </button>
//         )}
//       </div>

//       {/* Emoji Picker Pop-up */}
//       {showEmojiPicker && (
//         <div className="absolute bottom-[70px] left-[20px] bg-white shadow-lg rounded-md p-2 z-10 grid grid-cols-5 gap-1 max-w-[300px] max-h-[200px] overflow-y-auto">
//           {emojiList.map((emoji, index) => (
//             <button
//               key={index}
//               onClick={() => handleEmojiClick(emoji)}
//               className="text-xl md:text-2xl lg:text-2xl hover:bg-gray-200 rounded-md p-1"
//             >
//               {emoji}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MessageBox;



"use client"

import React, { useState } from 'react';
import MessageList from './messageList';
import MessageInput from './messageInput';
import EmojiPicker from './emojiPicker';
import AttachmentOptions from './attachment';
import { Message } from '@/lib/validations/messages';

const MessageBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [newEmoji, setNewEmoji] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: +messages.length, text: `${newMessage.trim()} ${newEmoji ?? ''}`, emoji: newEmoji },
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
    <div className="bg-white shadow-md rounded-md p-4 relative h-screen flex flex-col sm:p-6 md:p-8">
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

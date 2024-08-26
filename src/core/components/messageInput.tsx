// // MessageInput.tsx
// import React, { useState } from 'react';
// import { Smile, Plus, SendHorizonal, Mic } from 'lucide-react';
// import { MessageSchema } from '@/lib/interfaces/message';
// import { conversationUrl, messagesUrl } from '@/providers/constants/constants';
// import axios from 'axios';
// import { useAppContext } from '@/providers/context/app-context';

// interface MessageInputProps {
//   newMessage: string;
//   setNewMessage: React.Dispatch<React.SetStateAction<string>>;
//   handleSendMessage: () => void;
//   showEmojiPicker: boolean;
//   setShowEmojiPicker: React.Dispatch<React.SetStateAction<boolean>>;
//   showAttachmentOptions: boolean;
//   setShowAttachmentOptions: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const MessageInput: React.FC<MessageInputProps> = ({
//   newMessage,
//   setNewMessage,
//   handleSendMessage,
//   showEmojiPicker,
//   setShowEmojiPicker,
//   showAttachmentOptions,
//   setShowAttachmentOptions,
// }) => {
//   const { socket, messageTo } = useAppContext()
//   console.log("socket id", socket.id);

//   const [message, setMessage] = useState<MessageSchema>()
//   const [newConversationId, setNewConversationId] = useState("")


//   const fetchMessages = async () => {
//     try {
//       const response = await axios.get(messagesUrl);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching messages:", error);
//       throw error;
//     }
//   };

//   //handle create messages

//   async function handleMsg() {
//     const newMessages = {
//       content: newMessage,
//       senderId: "d6606b08-77a3-4d6a-8a75-8072c0bdd8a7",
//       receiverId: messageTo || null,
//       conversationId: "",
//       reactions: [],
//       attachments: []
//     }

//     if (newMessages.conversationId === "") {
//       const user1Id = newMessages.senderId
//       const user2Id = newMessages.receiverId
//       const conv = {
//         user1Id: user1Id,
//         user2Id: user2Id,
//       }

//       console.log("con", conv);

//       // handle create conversation Id if it didn't exist

//       const createConversation = await fetch(conversationUrl, {
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(conv)
//       })

//       if (createConversation.status === 201) {
//         const sendConversation = await createConversation.json();
//         const newConversationId = sendConversation.id;
//         newMessages.conversationId = newConversationId;
//         newMessages.conversationId = newConversationId || "";
//         console.log(newConversationId, "conversationId")

//         console.log({ newMessages }, "body");

//         socket.emit("conversationId", newConversationId);
//       } else {
//         console.log("Failed to create conversation:", createConversation.status);
//         return
//       }

//     }


//     // retrieve messages 
//     const sendMsg = await fetch(messagesUrl, {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newMessages)
//     })
//     if (sendMsg.status === 201) {
//       const sendMsgResponse = await sendMsg.json()
//       const newMessage = sendMsgResponse.content;
//       socket.emit("sendMessages", newMessage);

//     }
//     fetchMessages()
//   }

//   return (
//     <div className=" flex flex-row space-y-2 fixed bottom-0 w-[75%] pb-5 gap-3">
//       <button
//         onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//         className="text-black font-bold py-1 px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 sm:py-2 sm:px-3 sm:text-sm md:py-3 md:px-4 lg:py-4 lg:px-5 lg:text-lg"
//       >
//         <Smile className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
//       </button>

//       <button
//         onClick={() => setShowAttachmentOptions(!showAttachmentOptions)}
//         className="bg-purple-500 hover:bg-purple-300 text-white font-bold py-2 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 sm:py-3 sm:px-4 md:py-4 md:px-5 lg:py-4 lg:px-6"
//       >
//         <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
//       </button>

//       <form className="flex flex-1 " >
//         <textarea
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type your message..."
//           className="w-[100%] resize-none rounded-lg border border-gray-300 pr-3 pl-3 pt-3 focus:outline-none focus:ring focus:ring-purple-500"
//         />
//       </form>

//       {newMessage.trim() ? (
//         <button
//           onClick={handleSendMessage}
//           className="bg-purple-500 hover:bg-purple-300 text-white font-bold py-2 px-3 rounded-md sm:py-3 sm:px-4 md:py-4 md:px-5 lg:py-4 lg:px-6"
//         >
//           <SendHorizonal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" onClick={handleMsg} />

//         </button>
//       ) : (
//         <button
//           className="bg-purple-500 hover:bg-purple-300 text-white font-bold py-2 px-3 rounded-md sm:py-3 sm:px-4 md:py-4 md:px-5 lg:py-4 lg:px-6"
//         >
//           <Mic className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
//         </button>
//       )}
//     </div>
//   );
// };

// export default MessageInput



// MessageInput.tsx
import React, { useState, useEffect } from 'react';
import { Smile, Plus, SendHorizonal, Mic } from 'lucide-react';
import { MessageSchema } from '@/lib/interfaces/message';
import { conversationUrl, messagesUrl } from '@/providers/constants/constants';
import axios from 'axios';
import { useAppContext } from '@/providers/context/app-context';

interface MessageInputProps {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void; // Receive the callback function
  showEmojiPicker: boolean;
  setShowEmojiPicker: React.Dispatch<React.SetStateAction<boolean>>;
  showAttachmentOptions: boolean;
  setShowAttachmentOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageInput: React.FC<MessageInputProps> = ({
  newMessage,
  setNewMessage,
  handleSendMessage, // Use the callback function
  showEmojiPicker,
  setShowEmojiPicker,
  showAttachmentOptions,
  setShowAttachmentOptions,
}) => {
  const { socket, messageTo } = useAppContext()
  // console.log("socket id", socket.id);

  // if (socket && socket.id) {
  //   console.log("socket id", socket.id); // Only log if socket.id exists
  // }

  // const { socketReady, setSocketReady } = useState(false);

  // useEffect(() => {
  //   if (socket && socket.id) {
  //     setSocketReady(true);
  //     console.log("socket id", socket.id);
  //   }
  // }, [socket]);

  const [message, setMessage] = useState<MessageSchema>()
  const [newConversationId, setNewConversationId] = useState("")


  //handle create messages

  async function handleMsg() {
    const newMessages = {
      content: newMessage,
      senderId: "d6606b08-77a3-4d6a-8a75-8072c0bdd8a7",
      receiverId: messageTo || null,
      conversationId: "",
      reactions: [],
      attachments: []
    }

    if (newMessages.conversationId === "") {
      const user1Id = newMessages.senderId
      const user2Id = newMessages.receiverId
      const conv = {
        user1Id: user1Id,
        user2Id: user2Id,
      }

      console.log("con", conv);

      // handle create conversation Id if it didn't exist

      const createConversation = await fetch(conversationUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(conv)
      })

      if (createConversation.status === 201) {
        const sendConversation = await createConversation.json();
        const newConversationId = sendConversation.id;
        newMessages.conversationId = newConversationId;
        newMessages.conversationId = newConversationId || "";
        console.log(newConversationId, "conversationId")

        console.log({ newMessages }, "body");

        socket.emit("conversationId", newConversationId);
      } else {
        console.log("Failed to create conversation:", createConversation.status);
        return
      }

    }

    // retrieve messages 
    const sendMsg = await fetch(messagesUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessages)
    })
    if (sendMsg.status === 201) {
      const sendMsgResponse = await sendMsg.json()
      const newMessage = sendMsgResponse.content;
      socket.emit("sendMessages", newMessage);

    }
    // Call the callback function to update the messages state
    handleSendMessage();
    // Fetch messages again to get the latest list
    fetchMessages();
  }

  const fetchMessages = async () => {
    try {
      const response = await axios.get(messagesUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching messages:", error);
      throw error;
    }
  };

  return (
    <div className=" flex flex-row space-y-2 fixed bottom-0 w-[75%] pb-5 gap-3">
      <button
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        className="text-black font-bold py-1 px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 sm:py-2 sm:px-3 sm:text-sm md:py-3 md:px-4 lg:py-4 lg:px-5 lg:text-lg"
      >
        <Smile className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </button>

      <button
        onClick={() => setShowAttachmentOptions(!showAttachmentOptions)}
        className="bg-purple-500 hover:bg-purple-300 text-white font-bold py-2 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 sm:py-3 sm:px-4 md:py-4 md:px-5 lg:py-4 lg:px-6"
      >
        <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </button>

      <form className="flex flex-1 " >
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-[100%] resize-none rounded-lg border border-gray-300 pr-3 pl-3 pt-3 focus:outline-none focus:ring focus:ring-purple-500"
        />
      </form>

      {newMessage.trim() ? (
        <button
          onClick={handleSendMessage}
          className="bg-purple-500 hover:bg-purple-300 text-white font-bold py-2 px-3 rounded-md sm:py-3 sm:px-4 md:py-4 md:px-5 lg:py-4 lg:px-6"
        >

          {/* {socketReady && ( // Only render if the socket is ready
            <button onClick={handleMsg}>
              <SendHorizonal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </button>
          )} */}
          <SendHorizonal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" onClick={handleMsg} />

        </button>
      ) : (
        <button
          className="bg-purple-500 hover:bg-purple-300 text-white font-bold py-2 px-3 rounded-md sm:py-3 sm:px-4 md:py-4 md:px-5 lg:py-4 lg:px-6"
        >
          <Mic className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>
      )}
    </div>
  );
};

export default MessageInput
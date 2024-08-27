import React, { useState, useEffect } from 'react';
import { Smile, Plus, SendHorizonal, Mic } from 'lucide-react';
import { MessageSchema } from '@/lib/interfaces/message';
import { conversationUrl, messagesUrl } from '@/providers/constants/constants';
import axios from 'axios';
import { useAppContext } from '@/providers/context/app-context';
import { fetchCurrentUser } from '../../../utils/currentUser';

interface MessageInputProps {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  showEmojiPicker: boolean;
  setShowEmojiPicker: React.Dispatch<React.SetStateAction<boolean>>;
  showAttachmentOptions: boolean;
  setShowAttachmentOptions: React.Dispatch<React.SetStateAction<boolean>>;
  conversationId: string;
  setConversationId: React.Dispatch<React.SetStateAction<string>>;
  onMessageSent: (message: MessageSchema) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  newMessage,
  setNewMessage,
  showEmojiPicker,
  setShowEmojiPicker,
  showAttachmentOptions,
  setShowAttachmentOptions,
  conversationId,
  setConversationId,
  onMessageSent
}) => {
  const { messageTo } = useAppContext();
  const [sendersId, setSendersId] = useState("");

  useEffect(() => {
    const fnCurrentUser = async () => {
      const currentUser = await fetchCurrentUser();
      const data = currentUser?.data;
      const senderId = data?.id;
      setSendersId(senderId);
    };
    fnCurrentUser();
  }, []);

  async function handleMsg() {
    if (!newMessage.trim()) return; // Don't send empty messages

    try {
      if (!conversationId) {
        const conversationIds = {
          user1Id: sendersId,
          user2Id: messageTo,
        };
        const createConversation = await fetch(conversationUrl, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(conversationIds)
        });

        if (createConversation.status === 201) {
          const sendConversation = await createConversation.json();
          setConversationId(sendConversation.id);
        } else {
          console.log("Failed to create conversation:", createConversation.status);
          return;
        }
      }

      // Now send the message
      const messageData = {
        content: newMessage,
        senderId: sendersId,
        receiverId: messageTo,
        conversationId: conversationId,
      };

      const response = await axios.post(messagesUrl, messageData);

      if (response.status === 201) {
        onMessageSent(response.data);
        setNewMessage(''); // Clear the input after sending
      } else {
        console.log("Failed to send message:", response.status);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return (
    <div className="flex flex-row space-y-2 fixed bottom-0 w-[75%] pb-5 gap-3">
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
          onClick={handleMsg}
          className="bg-purple-500 hover:bg-purple-300 text-white font-bold py-2 px-3 rounded-md sm:py-3 sm:px-4 md:py-4 md:px-5 lg:py-4 lg:px-6"
        >
          <SendHorizonal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
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
}

export default MessageInput;
// MessageInput.tsx
import React from 'react';
import { Smile, Plus, SendHorizonal, Mic } from 'lucide-react';

interface MessageInputProps {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
  showEmojiPicker: boolean;
  setShowEmojiPicker: React.Dispatch<React.SetStateAction<boolean>>;
  showAttachmentOptions: boolean;
  setShowAttachmentOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageInput: React.FC<MessageInputProps> = ({
  newMessage,
  setNewMessage,
  handleSendMessage,
  showEmojiPicker,
  setShowEmojiPicker,
  showAttachmentOptions,
  setShowAttachmentOptions,
}) => {
  return (
    <div className="w-full flex flex-row space-y-2 fixed bottom-0 left-0 right-0 bg-white py-3 px-3">
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

      <form className="flex flex-1">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full resize-none rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-purple-500"
        />
      </form>

      {newMessage.trim() ? (
        <button
          onClick={handleSendMessage}
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
};

export default MessageInput;

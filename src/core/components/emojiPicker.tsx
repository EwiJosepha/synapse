// EmojiPicker.tsx
import React from 'react';

interface EmojiPickerProps {
  handleEmojiClick: (emoji: string) => void;
}

const emojiList = [
  '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🥲', '☺️',
  '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗',
  '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓',
  '😎', '🥸', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕',
  '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤',
  '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰',
  '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑',
  '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤',
  '😪', '😵', '🤕', '🤒', '🤮', '🤢', '🥴', '😷', '🤧', '🤳',
  '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸',
  '😹', '😻', '😼', '😽', '🙀', '😿', '😾'
];

const EmojiPicker: React.FC<EmojiPickerProps> = ({ handleEmojiClick }) => {


  
  return (
    <div className="absolute bottom-[70px] left-[20px] bg-gray-200 shadow-lg rounded-md p-2 z-10 grid grid-cols-5 gap-1 max-w-[300px] max-h-[200px] overflow-y-auto">
      {emojiList.map((emoji, index) => (
        <button
          key={index}
          onClick={() => handleEmojiClick(emoji)}
          className="text-xl md:text-2xl lg:text-2xl hover:bg-gray-200 rounded-md p-1"
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default EmojiPicker;

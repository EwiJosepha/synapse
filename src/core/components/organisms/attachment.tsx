// AttachmentOptions.tsx
import React from 'react';
import { File, Image, Video } from 'lucide-react';

const AttachmentOptions: React.FC = () => {
  return (
    <div className="absolute bottom-[60px] left-0 bg-white shadow-lg rounded-md p-2 z-10 flex flex-col gap-2 sm:bottom-[60px] sm:p-3 md:bottom-[70px] md:p-4 lg:bottom-[80px] lg:p-5">
      <button className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
        <File /> Document
      </button>
      <button className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
        <Image /> Image
      </button>
      <button className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
        <Video /> Video
      </button>
    </div>
  );
};

export default AttachmentOptions;

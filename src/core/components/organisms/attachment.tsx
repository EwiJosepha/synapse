"use client"

import React, { useRef } from 'react';
import { File, Image, Video } from 'lucide-react';

const AttachmentOptions: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const videoInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleVideoClick = () => {
    if (videoInputRef.current) {
      videoInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(`Selected ${type}:`, file);

      try {
        const uploadedUrl = await uploadFile(file, type);
        if (uploadedUrl) {
          console.log(`${type} uploaded successfully: ${uploadedUrl}`);
          addFileToChat(uploadedUrl, type);
        } else {
          console.error(`Failed to upload ${type}`);
        }
      } catch (error) {
        console.error(`Error in handleFileChange:`, error);
      }
    }
  };

  const uploadFile = async (file: File, type: string): Promise<string | null> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    try {
      const response = await fetch('/api/uploads', {
        method: 'POST',
        body: formData,
      });

      console.log(response);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`File upload failed: ${errorText}`);
      }

      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    }
  };

  const addFileToChat = (url: string, type: string) => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      let messageElement;

      if (type === 'image') {
        messageElement = `<img src="${url}" alt="Uploaded Image" class="max-w-xs max-h-xs"/>`;
      } else if (type === 'video') {
        messageElement = `<video controls src="${url}" class="max-w-xs max-h-xs"></video>`;
      } else if (type === 'document') {
        messageElement = `<a href="${url}" target="_blank" rel="noopener noreferrer">Document</a>`;
      }

      chatContainer.innerHTML += `<div class="chat-message">${messageElement}</div>`;
    }
  };

  return (
    <div className="absolute bottom-[60px] left-0 bg-gray-210 shadow-lg rounded-md p-2 z-10 flex flex-col gap-2 sm:bottom-[60px] sm:p-3 md:bottom-[70px] md:p-4 lg:bottom-[80px] lg:p-5">
      <button onClick={handleFileClick} className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
        <File /> Documents
      </button>
      <button onClick={handleImageClick} className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
        <Image /> Image
      </button>
      <button onClick={handleVideoClick} className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
        <Video /> Video
      </button>

      {/* Hidden file inputs to select files from the machine */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.docx,.xlsx,.txt"
        className="hidden"
        onChange={(event) => handleFileChange(event, 'document')}
      />
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => handleFileChange(event, 'image')}
      />
      <input
        ref={videoInputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={(event) => handleFileChange(event, 'video')}
      />
    </div>
  );
};

export default AttachmentOptions;

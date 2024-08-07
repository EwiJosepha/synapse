"use client"
import { Camera} from 'lucide-react';
import React, { useRef } from 'react';

const WebcamComponent = () => {
  const videoRef = useRef(null);
  let localStream: MediaStream;

  const startCamHandler = async () => {
    try {
      localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      videoRef.current.srcObject = localStream;
      videoRef.current.play();
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  };

  const stopCamHandler = () => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div className='pl-4 mx-auto flex flex-col gap-4 pt-4'>
      <h1 className='font-bold text-xl text-white'>Video & voice</h1>
      <button className=" bg-pink-500 text-white  md:px-4 md:py-2 py-1 rounded-md w-[90%]" onClick={startCamHandler}>
       start Webcam
      </button>
      <video ref={videoRef} autoPlay muted style={{ width: '90%', height: 'auto', borderRadius: "8px" }}></video>
      <div className=' flex gap-2 text-white'>
        <button onClick={stopCamHandler} className='bg-pink-500 shadow-md  md:px-3 py-1 rounded-md  w-[90%]'>stop</button>
      </div>
    </div> 
  );
};

export default WebcamComponent;
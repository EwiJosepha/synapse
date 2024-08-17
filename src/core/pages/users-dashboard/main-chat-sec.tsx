
"use client"
import { useAppContext } from '@/providers/context/app-context';
import React from 'react';


const Main = () => { 
    const{currentColor} = useAppContext()
    console.log({currentColor}, "color");
    
    return (
        <div className="flex-1 flex flex-col p-4">
            
            <div className={`flex-1 -100 p-4 rounded overflow-y-auto`} style={{background:currentColor || "#F5F5F5"}}>
                <p>This is where the messaging UI will go.</p>
            </div>
            <div className="mt-4">
                <textarea
                    className="w-[80%]  border border-gray-300 rounded-full  placeholder:p-2 resize-none"
                    rows={2}
                    placeholder="Type your message ..."
                ></textarea>
            </div>
        </div>
    );
};

export default Main;
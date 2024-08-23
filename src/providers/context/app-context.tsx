"use client"
import { useState, createContext, Dispatch, SetStateAction, useContext, useEffect } from "react"
import { io } from "socket.io-client"
import { baseUrl } from "../constants/constants"

 export type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  conversationId: string;
  // status: MessageStatus;
  // reactions: MessageReaction[];
  // attachments: FileAttachment[];
  sender?: User; 
  receiver?: User;
};
 export type User = {
  id: string
  name: string,
  phoneNumber: string,
  email: string,
  messagesSent: Message[] ,
  conversationAaUser1: string,
  conversationAsUser2: string
}
interface AppContextTypes {
  currentColor: string | null
  messageTo: string | null
  setMessageTo: Dispatch<SetStateAction<string | null>>
  setCurrentColor: Dispatch<SetStateAction<string | null>>
  socket: ReturnType<typeof io>
  setUserMessages:Dispatch<SetStateAction<Message[] | null>>
  userMessages: Message[] | null
}

const AppContext = createContext<AppContextTypes | null>(null)
const URL = baseUrl
const socket = io(URL)
function AppContextProvider({ children }: {
  children: React.ReactNode
}) {
  const [currentColor, setCurrentColor] = useState<string | null>(null)
  const [messageTo, setMessageTo] = useState<string | null>(null)
  const [userMessages, setUserMessages] = useState<Message[] | null>(null)
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to the socket server');
      console.log("A user connected:", socket.id);

    })
    return () => { 
      socket.off('connect');
      socket.disconnect();
    };
  }, []);
  return (
    <AppContext.Provider value={{ currentColor, setCurrentColor, socket, messageTo, setMessageTo, userMessages, setUserMessages }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext) as AppContextTypes

export {
  AppContextProvider, useAppContext
}
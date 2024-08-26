
"use client"
import { LogOut, X } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { FaHome, FaUserFriends, FaCog } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import UserSlideBar from '@/core/components/organisms/users-sidebar';
import AccountDetails from '../users-profile-details/account';
import Chats from '../users-profile-details/chats';
import General from '../users-profile-details/general';
import Notify from '@/app/(users-profile)/usersProfile/notifications/page';
import PersonaliseWallpaper from '@/app/(users-profile)/usersProfile/personalise/page';
import Storage from '@/app/(users-profile)/usersProfile/storage/page';
import Video from '@/app/(users-profile)/usersProfile/videos-voice/page';
import UsersProfile from '@/app/(users-profile)/usersProfile/page';
import axios from 'axios';
import { usersUrl } from '@/providers/constants/constants';
import { useAppContext } from '@/providers/context/app-context';
import { Message } from '@/providers/context/app-context';
// interface Message {
//     id: number;
//     text: string;
//     emoji: string | null;
//     conversationId: number; // Link to the conversation
//   }
type Users = {
    id: string
    name: string,
    phoneNumber: string,
    email: string,
    sendMessages: Message[] ,
    conversationAaUser1: string,
    conversationAsUser2: string
}


const Sidebar = () => {
    const{ userMessages, setUserMessages} = useAppContext()
    const { setMessageTo} = useAppContext()
    const [showProfile, setShowProfile] = useState(false)
    const [currentRoute, setCurrentRoute] = useState('/')
    const [users, setUsers] = useState<Users[]>([])
    const [selectedUser, setSelectedUser] = useState<Users| null>(null)


    console.log({users});
    

    useEffect(() => {
        const fetchMessages = async () => {
          try {
            const response = await axios.get(usersUrl);            
            setUsers(response.data);
          } catch (error) {
            console.error("Error fetching messages:", error);
          }
        };
    
        fetchMessages();
      }, []);

    const handleRouteClick = (href: string) => {
        setCurrentRoute(href)
    };

    function handleShowProfile() {
        setShowProfile((prevProfile) => prevProfile === false ? true : false)
    }

    const handleUserClick = (userId: string) => {
        // setReceiverId(userId);
        const user = users?.find(u => u.id === userId)
        setMessageTo(userId)

        if (user) {
            setSelectedUser(user);
            const userMessagess = user.sendMessages;
            if (Array.isArray(userMessagess)) {
                const messageContents = userMessagess.map(message => message.content);
                setUserMessages(userMessagess);
            } else {
                console.error("userMessagess is not an array:", userMessagess);
            }
        }        
        
    };    

    return (
        <div className="flex flex-col h-full bg-purple-500 text-white rounded-tr-lg rounded-br-lg cursor-pointer ">
            <div className='flex h-full'>
                <div className="flex flex-col justify-between bg-purple-800 items-center py-7 w-12 h-full rounded-tr-lg rounded-br-lg">
                    <div>
                        <FaHome className="mb-6 text-2xl" />
                        <FaUserFriends className="mb-6 text-2xl" />
                        <FaCog className="text-2xl" />
                    </div>
                    <div className='flex flex-col gap-6'>

                        <RxAvatar className="text-2xl font-bold" onClick={handleShowProfile} />
                        <LogOut className="text-2xl" />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto ">
                    <div className="p-2 md:p-4">
                        <h2 className="text-lg md:text-xl mb-2 md:mb-4 pt-4 font-bold">Chats</h2>
                        <div className="space-y-2 md:space-y-3">
                            {users?.slice(0, 6).map((user) => (
                                <div key={user.id} className="flex items-center p-2 bg-purple-800 rounded hover:bg-purple-400 transition duration-200cursor-pointer" onClick={() => handleUserClick(user.id)} >
                                    <img
                                        src={""}
                                        alt={`${user.name}'s avatar`}
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3 flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-sm md:text-base truncate">{user.name}</h3>
                                        <p className="text-xs md:text-sm text-gray-100 truncate">{user.phoneNumber}</p>
                                    </div>
                                    <span className="text-xs text-gray-100 ml-1 md:ml-2 flex-shrink-0">{user.phoneNumber}</span>
                                </div>
                            ))}
                        </div>
                        {showProfile && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-purple-800 rounded-lg w-3/4 md:w-1/2 lg:w-2/3 h-4/4 overflow-hidden flex">
                                    <UserSlideBar onRouteClick={handleRouteClick} />
                                    <div className="flex-1 p-4 overflow-y-auto">
                                        {currentRoute === '/usersProfile/account-details' && <AccountDetails />}
                                        {currentRoute === '/usersProfile/users-chats' && <Chats />}
                                        {currentRoute === '/usersProfile/general' && <General />}
                                        {currentRoute === '/usersProfile/notifications' && <Notify />}
                                        {currentRoute === '/usersProfile/personalise' && <PersonaliseWallpaper />}
                                        {currentRoute === '/usersProfile/storage' && <Storage />}
                                        {currentRoute === '/usersProfile/videos-voice' && <Video />}
                                        {currentRoute === '/usersProfile' && <UsersProfile />}
                                    </div>
                                </div>
                                <button className="absolute top-2 right-2 text-white" onClick={handleShowProfile}>
                                    <X className='text-2xl text-white' />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
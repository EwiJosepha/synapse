
"use client"
import { LogOut, X } from 'lucide-react';
import React, { useState } from 'react';
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
const chats = [
    { id: 1, name: 'John Doe', avatar: "../../../../public/mew pp.jpg", lastMessage: 'Hello there!', time: '10:30 AM' },
    { id: 2, name: 'Jane Smith', avatar: "../../../../public/mew pp.jpg", lastMessage: 'How are you?', time: 'Yesterday' },
    { id: 3, name: 'Bob Johnson', avatar: "../../../../public/mew pp.jpg", lastMessage: 'See you later!', time: 'Monday' },
];



const Sidebar = () => {
    const [showProfile, setShowProfile] = useState(false)
    const [currentRoute, setCurrentRoute] = useState('/')

    const handleRouteClick = (href: string) => {
        setCurrentRoute(href)
    };

    function handleShowProfile() {
        setShowProfile((prevProfile) => prevProfile === false ? true : false)
    }

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
                            {chats.map((chat) => (
                                <div key={chat.id} className="flex items-center p-2 bg-purple-800 rounded hover:bg-gray-600 cursor-pointer">
                                    <img
                                        src={chat.avatar}
                                        alt={`${chat.name}'s avatar`}
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3 flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0"> {/* Added min-w-0 to allow text truncation */}
                                        <h3 className="font-semibold text-sm md:text-base truncate">{chat.name}</h3>
                                        <p className="text-xs md:text-sm text-gray-100 truncate">{chat.lastMessage}</p>
                                    </div>
                                    <span className="text-xs text-gray-100 ml-1 md:ml-2 flex-shrink-0">{chat.time}</span>
                                </div>
                            ))}
                        </div>
                        {showProfile && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-purple-800 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 h-3/4 overflow-hidden flex">
                                    <UserSlideBar onRouteClick={handleRouteClick} />
                                    <div className="flex-1 p-4 overflow-y-auto h-full">
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
                                    <X className='text-2xl text-white'  />
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
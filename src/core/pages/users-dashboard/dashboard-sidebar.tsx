
import { LogOut } from 'lucide-react';
import React from 'react';
import { FaHome, FaUserFriends, FaCog } from 'react-icons/fa';
const chats = [
    { id: 1, name: 'John Doe', avatar: "../../../../public/mew pp.jpg", lastMessage: 'Hello there!', time: '10:30 AM' },
    { id: 2, name: 'Jane Smith', avatar: "../../../../public/mew pp.jpg", lastMessage: 'How are you?', time: 'Yesterday' },
    { id: 3, name: 'Bob Johnson', avatar: "../../../../public/mew pp.jpg", lastMessage: 'See you later!', time: 'Monday' },
];

const Sidebar = () => {
    return (
        <div className="flex flex-col h-full bg-purple-500 text-white rounded-tr-lg rounded-br-lg cursor-pointer ">
      <div className='flex h-full'>
      <div className="flex flex-col bg-purple-800 items-center py-7 w-12 h-full rounded-tr-lg rounded-br-lg">
                <FaHome className="mb-6 text-2xl" />
                <FaUserFriends className="mb-6 text-2xl" />
                <FaCog className="text-2xl" />
                <div>
                    <LogOut />
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
                </div>
            </div>
      </div>
        </div>
    );
};

export default Sidebar;
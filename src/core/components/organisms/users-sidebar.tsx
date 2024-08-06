import { Bell, Database, HelpCircle, Key, MessageCircle, Pen, SquareSquare, Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


function UserSlideBar() {
  const arrayOfUsersAccount = [
    {
      icon: <SquareSquare />,
      text: "General",
      href: "/"
    },
    {
      icon: <Key />,
      text: "Account",
      href: "/usersProfile/account-details"

    },
    {
      icon: <MessageCircle />,
      text: "Chats",
      href: "/usersProfile/users-chats"

    },
    {
      icon: <Video />,
      text: "Video & Voice",
      href: "/usersProfile/general"

    },
    {
      icon: <Bell />,
      text: "Notifications",
      href: "/usersProfile/notifications"

    },
    {
      icon: <Pen />,
      text: "Personalization",
      href: "/usersProfile/personalise"

    },
    {
      icon: <Database />,
      text: "Storage",
      href: "/usersProfile/general"

    },
    {
      icon: <HelpCircle />,
      text: "Help",
      href: "/usersProfile/general"
    },
  ]
  return (
    <div>
      <div className=' bg-purple-500 border-r rounded-l-lg text-white py-5'>
        <div className=" flex flex-col md:gap-4 gap-2">
          {arrayOfUsersAccount.map((iconsText, i) => (
            <Link href={iconsText.href} className=" flex gap-2 md:gap-4 hover:bg-gradient-to-r from-blue-500 via-pink-500 to-violet-500  hover:rounded-md p-2 cursor-pointer" key={i} >
              <p className='text-bold'>{iconsText.icon}</p>
              <p className='text-sm'>{iconsText.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserSlideBar

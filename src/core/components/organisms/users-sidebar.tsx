import { Bell, Database, HelpCircle, Key, Pen, SquareSquare, Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


function UserSlideBar() {
  const arrayOfUsersAccount = [
    {
      icon: <SquareSquare />,
      text: "General",
      href:"/usersProfile/general"
    },
    {
      icon: <Key />,
      text: "Account",
      href:"/usersProfile/general"

    },
    {
      icon: <Video />,
      text: "Video",
      href:"/usersProfile/general"

    },
    {
      icon: <Video />,
      text: "Video & Voice",
      href:"/usersProfile/general"

    },
    {
      icon: <Bell />,
      text: "Notifications",
      href:"/usersProfile/general"

    },
    {
      icon: <Pen />,
      text: "Personalization",
      href:"/usersProfile/general"

    },
    {
      icon: <Database />,
      text: "Storage",
      href:"/usersProfile/general"

    },
    {
      icon: <HelpCircle />,
      text: "Help",
      href:"/usersProfile/general"
    },
  ]
  return (
    <div>
      <div className=' bg-gray-100 border-1 border rounded-l-lg mx-0'>
        <div className=" flex flex-col gap-4">
          {arrayOfUsersAccount.map((iconsText,i) => (
            <Link href={iconsText.href} className=" flex gap-4 hover:bg-gray-200  hover:rounded-md p-2 cursor-pointer" key={i} >
                <p className='text-bold'>{iconsText.icon}</p>
                <p>{iconsText.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserSlideBar

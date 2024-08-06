import React from 'react'

function Chats() {
  return (
    <div>
      <div className=' flex flex-col gap-4'>
        <h1 className='text-xl text-white pl-3'>Chats</h1>
        <div className=' flex flex-col gap-3 w-[90%] pl-3 text-white text-sm font-sans'>
          <p>Retrieve all Chats</p>
          <button className='text-white text-xl bg-gradient-to-r from-blue-500 via-pink-500 to-violet-500 shadow-md px-3 py-1 rounded-md hover:text-black  bg-gray-100'>
            Archive all chats
          </button>
          <p className='text-sm font-sans'>You will recieve all messages from Archives</p>
          <button className='text-white shadow-md text-xl hover:text-black bg-pink-500 px-3 py-1 rounded-lg'>
            clear  messages
          </button>
          <p>Delete all messagees from chats and groups</p>
          <button className='text-white shadow-md text-xl  bg-pink-500 px-3 py-1 rounded-lg hover:text-black'>
            Delete chats
          </button>
          <p>Delete all messages and clear chats  from history</p>
        </div>
      </div>

    </div>
  )
}

export default Chats

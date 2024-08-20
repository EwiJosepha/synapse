import React from 'react'

function Chats() {
  return (
    <div>
      <div className=' flex flex-col gap-4'>
        <h1 className='text-xl text-white pl-3 py-4'>Chats</h1>
        <div className=' flex flex-col gap-3 w-[90%] pl-3 text-white text-sm'>
          <p>Retrieve all Chats</p>
          <button className='text-white  bg-pink-500 shadow-md  md:px-3 py-1 rounded-md hover:text-black'>
            Archive all chats
          </button>
          <p className='text-sm text-justify'>You will recieve all messages from Archives</p>
          <button className='text-white shadow-md  hover:text-black bg-pink-500 md:px-3 py-1 rounded-lg'>
            clear  messages
          </button>
          <p>Delete all messagees from chats and groups</p>
          <button className='text-white shadow-md  bg-pink-500 md:px-3 py-1 rounded-lg hover:text-black'>
            Delete chats
          </button>
          <p className='text-justify'>Delete all messages and clear chats  from history</p>
        </div>
      </div>

    </div>
  )
}

export default Chats

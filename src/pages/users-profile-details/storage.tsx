import React from 'react'

function StorageSys() {
  return (
    <div>
      <div className=' flex flex-col gap-4 pl-4 text-white pr-4'>
        <h1 className='text-bold text-xl pt-4'>Storage</h1>
        <p>Automatic downloads</p>
        <span className='text-gray-100'>Chose which media will be automatically downloaded from the message you receive</span>
        <div className=' flex gap-4 text-white'>
          <input  type='checkbox' defaultChecked className='bg-pink-500 p-2'/>
          <span>Photos</span>
        </div>
        <div className=' flex gap-4 text-white'>
          <input  type='checkbox'  defaultChecked className='bg-pink-500'/>
          <span>Videos</span>
        </div>
        <div className=' flex gap-4 text-white'>
          <input  type='checkbox' defaultChecked className='bg-pink-500 p-2'/>
          <span>Documents</span>
        </div>
        <div className=' flex gap-4 text-white'>
          <input  type='checkbox' defaultChecked className='bg-pink-500 p-2'/>
          <span>Files</span>
        </div>
      </div>
    </div>
  )
}

export default StorageSys

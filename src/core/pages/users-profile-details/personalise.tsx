"use client"
import React, { useState } from 'react'

function PersonalisedColors() {

  const [color, setColor] = useState("")


  function handleBlue() {
    setColor(prevColor => prevColor === '#2563EB' ? 'white' : '#2563EB')
  }
  function handlegreen() {
    setColor(prevColor => prevColor === '#2FD5C2' ? 'white' : '#2FD5C2')
  }
  function handlepurple() {
    setColor(prevColor => prevColor === '#B733EA' ? 'white' : '#B733EA')
  }
  function handlepink() {
    setColor(prevColor => prevColor === '#E10E50' ? 'white' : '#E10E50')

  }
  return (
    <div className='pl-4 flex flex-col gap-3'>
      <h1 className='md:text-sm  text-white pb-2 pt-5 pr-2'>Personalize your Wallpaper by clicking</h1>
      <div className='w-[90%] bg-white border-2 border-b-gray-500 grid grid-cols-3 cursor-pointer gap-1 text-sm'>
        <button style={{ background: "#2563EB" }} className='py-4 rounded-sm text-white' onClick={handleBlue}>
          Blue
        </button>
        <button style={{ background: "#B733EA" }} className='py-4 rounded-sm  text-white' onClick={handlepurple}>
         Purple
        </button>
        <button style={{ background: `#E10E50` }} className='py-4 rounded-sm  text-white' onClick={handlepink}>
          Pink
        </button>
        <button style={{ background: "#2FD5C2" }} className='py-4 rounded-sm  text-white' onClick={handlegreen}>
         Green
        </button>
      </div>
      <div className='w-[90%] border-2 border-b-gray-500 grid h-28 bg-white' style={{background: color}}>

      </div>
    </div>
  )
}

export default PersonalisedColors

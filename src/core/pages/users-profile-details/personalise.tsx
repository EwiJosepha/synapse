"use client"
import { useAppContext } from '@/providers/context/app-context'
import React, { useState } from 'react'

function PersonalisedColors() {
  const { setCurrentColor } = useAppContext()

  const [color, setColor] = useState("")


  function handleMate() {
    setColor(prevColor => prevColor === '#D291B0' ? 'white' : '#D291B0')
    setCurrentColor(prevColor => prevColor === '#D291B0' ? 'white' : '#D291B0')

  }
  function handlegreen() {
    setColor(prevColor => prevColor === '#AD6CCC' ? 'white' : '#AD6CCC')
    setCurrentColor(prevColor => prevColor === '#AD6CCC' ? 'white' : '#AD6CCC')

  }
  function handlepurple() {
    setColor(prevColor => prevColor === '#DF78FC' ? 'white' : '#D946EF')
    setCurrentColor(prevColor => prevColor === '#DF78FC' ? 'white' : '#DF78FC')

  }
  function handlepink() {
    setColor(prevColor => prevColor === '#FB48F0' ? 'white' : '#FB48F0')
    setCurrentColor(prevColor => prevColor === '#FB48F0' ? 'white' : '#FB48F0')


  }

  function handleYellow() {
    setColor((prevcolor) => prevcolor === "#DDA3EB" ? "white" : "#DDA3EB")
    setCurrentColor((prevcolor) => prevcolor === "#DDA3EB" ? "white" : "#DDA3EB")

  }

  function handleCream() {
    setColor((prevcolor) => prevcolor === "#F6F4EF" ? "white" : "#F6F4EF")
    setCurrentColor((prevcolor) => prevcolor === "#F6F4EF" ? "white" : "#F6F4EF")

  }
  return (
    <div className='pl-4 flex flex-col gap-3'>
      <h1 className='md:text-sm  text-white pb-2 pt-5 pr-2'>Personalize your Wallpaper by clicking the buttons</h1>
      <div className='w-[90%] bg-white border-2 border-b-gray-500 grid grid-cols-3 cursor-pointer gap-1 text-sm'>
        <button style={{ background: "#D291B0" }} className='py-4 rounded-sm text-white' onClick={handleMate}>
         Mate
        </button>
        <button style={{ background: "#DF78FC" }} className='py-4 rounded-sm  text-white' onClick={handlepurple}>
          Purple
        </button>
        <button style={{ background: `#FB48F0` }} className='py-4 rounded-sm  text-white' onClick={handlepink}>
          Pink
        </button>
        <button style={{ background: "#AD6CCC" }} className='py-4 rounded-sm  text-white' onClick={handlegreen}>
         D-Purple
        </button>
        <button style={{ background: "#D0A3EB" }} className='py-4 rounded-sm  text-white' onClick={handleYellow}>
          L-Purple
        </button>
        <button style={{ background: "#F6F4EF" }} className='py-4 rounded-sm  text-white' onClick={handleCream}>
          Cream
        </button>
      </div>
      <div className='w-[90%] border-2 border-b-gray-500 grid h-28 bg-white' style={{ background: color }}>

      </div>
    </div>
  )
}

export default PersonalisedColors

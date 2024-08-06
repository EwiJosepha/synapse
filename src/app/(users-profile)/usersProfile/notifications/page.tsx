import { Wheat } from 'lucide-react'
import React from 'react'

function Notifications() {
  return (
    <div>
      <div className=' flex flex-col gap-4 pt-3'>
        <div className='flex gap-4 justify-center items-center'>
          <div className=' border-4 border-white h-20 w-28 bottom-5 rounded-md'>
            <div className=' float-right bg-pink-500 p-3 '>
              <div className=' flex justify-center items-center gap-1'>
                <div className='rounded-md p-1 bg-white'></div>
                <div className=' bg-white'>
                  <div className='w-8 bg-white '></div>
                  <div className='w-2 bg-white'></div>
                </div>

              </div>
            </div>
            <div className='pt-8 bg-blue-500'>

            </div>
          </div>

          <div className=' border-4 border-white h-20 w-28 bottom-5 rounded-md'>
            <div className=' float-right bg-pink-500 p-3 '>
              <div className=' flex justify-center items-center gap-1'>
                <div className='rounded-md p-1 bg-white'></div>
                <div className=' bg-white'>
                  <div className='w-8 bg-white '></div>
                  <div className='w-2 bg-white'></div>
                </div>

              </div>
            </div>
            <div className='pt-8 bg-blue-500'>

            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Notifications

import React from 'react'

import '@radix-ui/themes/styles.css';
import { Switch, Theme } from '@radix-ui/themes';

function Notifications() {
  return (
    <div>
      <div className=' flex flex-col gap-4 pt-4 pr-3'>
        <div className=' flex flex-col gap-4   pl-3 '>
          <div className=' border-4 border-white md:h-20 md:w-28 w-20 bottom-5 rounded-md'>
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

          <div className=' border-4 border-white h-10 md:h-20 md:w-28 w-20 bottom-5 rounded-md'>
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

        <div className='flex flex-col gap-4 pl-4 w-[100%]'>
          <div className="mb-4  text-white text-justify">
           
              <p>Show banner notifications</p>
            <select className="border border-gray-200  text-black hover md:px-4 md:py-2 py-1 rounded-md w-full">
              <option value="always">Always</option>
              <option value="never">Never</option>
              <option value="one time when on">One time when on</option>
            </select>

          </div>
          <div className="mb-4   text-white">
            <label htmlFor="Show taskbar notification badge" className="block text-sm text-justify">
              Show taskbar notification badge
            </label>
            <select className="border border-gray-200 px-4 md:py-2 py-1 rounded-md w-full text-black hover">
              <option value="always">Always</option>
              <option value="never">Never</option>
              <option value="one time when on">One time when on</option>
            </select>

          </div>

          <div className='flex text-white h-6 justify-between pr-3'>
            <p>Messages</p>

            {/* <Theme>
              <Switch defaultChecked />
            </Theme> */}

          </div>
          <div className='flex text-white h-6 justify-between pr-3'>
            <p>calls</p>

            {/* <Theme>
              <Switch defaultChecked />
            </Theme> */}

          </div>
          <div className='flex text-white h-6 justify-between  pr-3'>
            <p>Media Preview</p>

            {/* <Theme>
              <Switch defaultChecked />
            </Theme> */}

          </div>
        </div>

      </div>

    </div>
  )
}

export default Notifications

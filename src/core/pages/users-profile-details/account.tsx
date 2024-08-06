import { Phone } from 'lucide-react'
import React from 'react'

function AccountDetails() {
  const accountContent = [
    "About", "Everyone", "Add to groups", "Read receipts", "on", "Read receipts are always sent for group chats"
  ]
  return (
    <div>
      <div className='flex flex-col gap-4 pl-4 text-white'>
        <div className='flex flex-col pt-4'>

          {accountContent.map((details,i) => (
            <p className={`${i == 0?"text-blue-800":"text-white"}`}>{details}</p>
          ))}
        </div>
        <div className='text-gray-600'>
          <p className='font-bold text-blue-900'>Blocked Contacts</p>
          <div className='p-1 flex gap-3'>
            <Phone className='text-blue-900' />
            <p className='font-bold text-white'> 0 blocked contacts</p>
          </div>

        </div>
        <div>
          <p className='font-bold text-blue-800'>Security</p>
          <span>Messages and calls in end-to-end encrypted chats stay between you and people you choose, Not even Synapse can listen to them</span>
        </div>

      </div>
    </div>
  )
}

export default AccountDetails

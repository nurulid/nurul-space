import { Dot, Paperclip } from 'lucide-react'
import React from 'react'

export const MailItem = () => {
  return (
    <div className='flex border-b-2 border-gray-200 py-6'>
      <div className='w-[30px]'>
        <input type='checkbox'/>
      </div>
      <div className='w-[calc(100%-30px)]'>
        <div className='flex gap-3 items-center mb-3'>
          <figure className='w-[40px] h-[40px] rounded-full'>
            <img src="/images/nid.jpeg" alt="" className='rounded-full'/>
          </figure>
          <div>
            <h4 className='font-semibold'>ls.grapichs</h4>
            <p className='text-sm text-gray-500'>ls.grapichs@gmail.com</p>
          </div>
          <div className='ml-auto'>
            <p className='text-sm'>Today,
              <span className='text-gray-500'> 12 min ago</span>
              <span className='red-dot'></span>
            </p>
          </div>
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold'>Complited tasks</h3>
          <p className='truncate text-gray-400'>Ulla sit amet rhoncus neque, non sodales libero. In mattis elementum erat, at molestie orci eleifend eu. Sed dignissim pulvinar du</p>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <span className='inline-flex items-center gap-1 bg-gray-100 py-1 px-3 rounded-full text-gray-500 text-sm'>
              <Paperclip className='inline-block' size={18}/>
              +3
            </span>
          </div>
          <div className='space-x-2'>
            <span className='inline-flex items-center gap-2 bg-gray-100 py-1 px-3 rounded-full text-gray-500 text-sm'>
              <span className='w-[8px] h-[8px] rounded-full bg-gray-800'></span>
              Meet
            </span>
            <span className='inline-flex items-center gap-2 bg-gray-100 py-1 px-3 rounded-full text-gray-500 text-sm'>
              <span className='w-[8px] h-[8px] rounded-full bg-gray-800'></span>
              Bussiness
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

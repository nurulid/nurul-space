import { nameAlias } from '@/lib/utils'
import { Bell, ChevronDown } from 'lucide-react'
import React from 'react'

const user = {
  id: "1234",
  name: "John Doe",
  isOnline: true
}

const MailHeader = () => {
  return (
    <header className='flex justify-end items-center p-[30px] border-b'>
      <div className="notif">
        <Bell className='text-mailGray'/>
        <span className="notif__label"></span>
      </div>
      <div className="user flex items-center gap-3 px-4 ml-4 border-l-2 border-gray-200">
        <figure className="ava size-8 rounded-full bg-rose-500 text-[10px] text-white text-center leading-8">
          {nameAlias(user.name)}
        </figure>
        <div>
          <h3 className='text-sm text-gray-600 mr-1 inline-block'>{user.name}</h3>
          <ChevronDown size={14} className='inline'/>
        </div>
      </div>
    </header>
  )
}

export const MailDetails = () => {
  return (
    <section className='flex-grow'>
      <MailHeader />
    </section>
  )
}

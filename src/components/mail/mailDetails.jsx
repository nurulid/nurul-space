import React from 'react'
import { nameAlias } from '@/lib/utils'
import { Archive, Bell, ChevronDown, ChevronLeft, ChevronRight, Printer, Star, Trash2 } from 'lucide-react'

const user = {
  id: "1234",
  name: "John Doe",
  isOnline: true
}

const MailHeader = () => {
  return (
    <header className='flex justify-end items-center p-[30px] border-b'>
      <div className="notif">
        <Bell className='mail-icon'/>
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

const MailMenu = () => {
  return (
    <div className='flex justify-between px-[30px] py-5 border-b'>
      <Archive className='mail-icon'/>
      <div className="pagination flex gap-2">
        <ChevronLeft className='mr-2'/>
        <span>3</span>
        <span>of</span>
        <span>1293</span>
        <ChevronRight className='ml-2'/>
      </div>
      <div className='flex items-center gap-[18px]'>
        <Star className='mail-icon'/>
        <Printer className='mail-icon'/>
        <Trash2 className='mail-icon'/>
      </div>
    </div>
  )
}

export const MailDetails = () => {
  return (
    <section className='flex-grow'>
      <MailHeader />
      <MailMenu />
    </section>
  )
}

import { Filter, Star, Trash2 } from 'lucide-react'
import React from 'react'
import { Search } from './search'
import { MailItem } from './mailItem'

export const MailList = () => {
  return (
    <section className='w-[430px] border-r-1 border-gray-200'>
      <div className='flex justify-between py-9 mx-6 mb-4 border-b-2 border-gray-200'>
        <h2 className='text-xl font-semibold'>Inbox <span className='text-gray-500 font-normal inline-block ml-2'>(1293)</span></h2>
        <ul className='flex gap-2 text-gray-400'>
          <li><Trash2 /></li>
          <li><Star /></li>
          <li><Filter /></li>
        </ul>
      </div>
      <Search className="mb-4 mx-6" placeholder="Search messages..."/>
      <div className='mx-6 h-[80vh] overflow-scroll'>
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
      </div>
    </section>
  )
}

import { Sidebar } from '@/components/mail/sidebar'
import React from 'react'

export default function Page() {
  return (
    <div className='h-full flex'>
      <Sidebar />
      <aside className='w-[353px]'>
        asid
      </aside>
      <section>
        mail list
      </section>
      <section>
        mail details
      </section>
    </div>
  )
}

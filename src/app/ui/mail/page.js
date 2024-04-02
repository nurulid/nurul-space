import { FolderSection } from '@/components/mail/folderSection'
import { Sidebar } from '@/components/mail/sidebar'
import React from 'react'

export default function Page() {
  return (
    <div className='h-full flex'>
      <Sidebar />
      <FolderSection />
      <section>
        mail list
      </section>
      <section>
        mail details
      </section>
    </div>
  )
}

import { FolderSection } from '@/components/mail/folderSection'
import { MailList } from '@/components/mail/mailList'
import { Sidebar } from '@/components/mail/sidebar'
import React from 'react'

export default function Page() {
  return (
    <div className='h-full flex'>
      <Sidebar />
      <FolderSection />
      <MailList />
      <section>
        mail details
      </section>
    </div>
  )
}

import React from 'react'
import { FolderSection } from '@/components/mail/folderSection'
import { MailDetails } from '@/components/mail/mailDetails'
import { MailList } from '@/components/mail/mailList'
import { Sidebar } from '@/components/mail/sidebar'

export default function Page() {
  return (
    <div className='h-full flex'>
      <Sidebar />
      <FolderSection />
      <MailList />
      <MailDetails />
    </div>
  )
}

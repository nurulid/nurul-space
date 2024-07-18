import React from 'react'
import { FolderSection } from '@/components/mail/folderSection'
import { MailDetails } from '@/components/mail/mailDetails'
import { MailList } from '@/components/mail/mailList'
import { Sidebar } from '@/components/mail/sidebar'

export default function Page() {
  return (
    <div className='mail-wrapper h-full flex min-w-[1440px] overflow-x-auto'>
      <Sidebar />
      <FolderSection />
      <MailList />
      <MailDetails />
    </div>
  )
}

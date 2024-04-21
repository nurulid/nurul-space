"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import { Header } from '../sharedUI/Header'
import { Footer } from '../sharedUI/Footer'

export const Layout = ({children}) => {
  const currentPath = usePathname();

  if (currentPath.startsWith("/landing-page") || currentPath.startsWith("/ui/mail")) {
    return (
      <>{children}</>
    )
  }

  return (
    <div className='flex flex-col justify-between min-h-screen'>
        <div className='relative'>
            <Header/>
            <main className='max-w-7xl w-full mx-auto h-full py-6 px-5 lg:px-10'>
                {children}
            </main>
        </div>
        <Footer/>
    </div>
  )
}

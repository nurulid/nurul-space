import React from 'react'
import { Header } from '../sharedUI/Header'
import { Footer } from '../sharedUI/Footer'

export const Layout = ({children}) => {
  return (
    <div className='flex flex-col justify-between h-full'>
        <div className='relative'>
            <Header/>
            <main className='max-w-7xl w-full mx-auto h-full py-6 px-10'>
                {children}
            </main>
        </div>
        <Footer/>
    </div>
  )
}

import { Header } from '@/components/arc/header'
import { HeroHome } from '@/components/arc/heroHome'
import React from 'react'

export default function Page() {
  return (
    <>
      <Header/>
      <HeroHome/>
      <main className='max-w-7xl w-full mx-auto h-full py-6 px-5 lg:px-10'></main>
    </>
  )
}

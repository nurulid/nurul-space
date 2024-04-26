import React from 'react'

export default function Layout({children}) {
  return (
    <div className='max-w-2xl w-full mx-auto pt-4 pb-10 sm:py-10'>{children}</div>
  )
}

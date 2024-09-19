import React from 'react'

export default function MdxLayout({children}) {
  return (
    <div className='max-w-2xl w-full mx-auto pb-10 sm:pb-10 prose'>{children}</div>
  )
}

import React from 'react'

export default function MdxLayout({children}) {
  return (
    <div className='max-w-2xl w-full mx-auto py-2 sm:py-9 prose'>{children}</div>
  )
}

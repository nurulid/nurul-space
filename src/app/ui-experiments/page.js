import { Badge } from '@/components/ui-experiments/badge'
import React from 'react'

export default function Page() {
  return (
    <div className='py-10 grid grid-cols-2'>
      <div className='p-6 border border-slate-200 rounded-xl'>
        <Badge/>
      </div>
    </div>
  )
}

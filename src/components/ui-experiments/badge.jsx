import { Check, X, Minus, Circle, CircleDashed, Flag, CircleUserRound, Bookmark, Hash, CornerUpLeft, Lock, Smile, Play, Heart, Wifi, Pin } from 'lucide-react'
import React from 'react'

export const Badge = () => {
  return (
    <div className='space-y-5 text-center'>
      <div className='space-x-5'>
        <span className="badge text-sm bg-green-50 hover:bg-green-100 text-green-900 py-1 px-3 rounded-full transition-all">
          <Check className='inline translate-y-[-1px]' size={15}/> Paid
        </span>
        <span className="badge text-sm bg-green-50 hover:bg-green-100 text-green-900 border border-green-100 py-1 px-3 rounded-md transition-all">
          <Check className='inline translate-y-[-1px]' size={15}/> Active
        </span>
        <span className="badge text-sm bg-green-50 hover:bg-green-100 text-green-900 py-1 px-3 rounded-md transition-all">
          <Check className='inline translate-y-[-1px]' size={15}/> Subscribed
        </span>
        <span className="badge text-sm bg-green-50 hover:bg-green-100 text-green-900 border border-green-100 py-1 px-3 rounded-full transition-all">
          <Check className='inline translate-y-[-1px]' size={15}/> 200
        </span>
      </div>
      <div className='space-x-5'>
        <span className="badge text-sm bg-rose-50 hover:bg-rose-100 text-rose-900 py-1 px-3 rounded-full transition-all">
          <X className='inline translate-y-[-1px]' size={15}/> Rejected
        </span>
        <span className="badge text-sm bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-100 py-1 px-3 rounded-md transition-all">
          <X className='inline translate-y-[-1px]' size={15}/> Chargeback
        </span>
        <span className="badge text-sm bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-100 py-1 px-3 rounded-full transition-all">
          <Minus className='inline translate-y-[-1px]' size={15}/> Disconnected
        </span>
      </div>
      <div className='space-x-5'>
        <span className="badge text-sm bg-gray-50 hover:bg-gray-100 text-gray-900 py-1 px-3 rounded-full transition-all">
          <X className='inline translate-y-[-1px]' size={15}/> Void
        </span>
        <span className="badge text-sm bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-100 py-1 px-3 rounded-md transition-all">
          <X className='inline translate-y-[-1px]' size={15}/> Expired
        </span>
        <span className="badge text-sm bg-gray-50 hover:bg-gray-100 text-gray-900 py-1 px-3 rounded-md transition-all">
          <Check className='inline translate-y-[-1px]' size={15}/> Draft
        </span>
        <span className="badge text-sm bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-100 py-1 px-3 rounded-full transition-all">
          <Circle className='inline translate-y-[-1px] animate-pulse' size={10} color='green' strokeWidth={5}/> Online
        </span>
      </div>
      <div className='space-x-5'>
        <span className="badge text-sm bg-cyan-50 hover:bg-cyan-100 text-cyan-900 py-1 px-3 rounded-full transition-all">
        <CircleDashed className='inline translate-y-[-1px]' size={12} /> Processing
        </span>
        <span className="badge text-sm bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border border-cyan-100 py-1 px-3 rounded-md transition-all">
         <Flag className='inline translate-y-[-1px]' size={12} /> Flagged
        </span>
        <span className="badge text-sm bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border border-cyan-100 py-1 px-3 rounded-full transition-all">
          Washington D.C.
        </span>
      </div>
      <div className='space-x-5'>
        <span className="badge text-sm bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-900 py-1 px-3 rounded-full transition-all">
          Special
        </span>
        <span className="badge text-sm bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-900 border border-fuchsia-100 py-1 px-3 rounded-md transition-all">
          Trial
        </span>
        <span className="badge text-sm bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-900 py-1 px-3 rounded-md transition-all">
          <Bookmark className='inline translate-y-[-1px]' size={12} /> Bookmarked
        </span>
        <span className="badge text-sm bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-900 border border-fuchsia-100 py-1 px-3 rounded-full transition-all">
          <Hash className='inline translate-y-[-1px]' size={12} /> Live
        </span>
      </div>
      <div className='space-x-5'>
        <span className="badge text-sm bg-amber-50 hover:bg-amber-100 text-amber-900 py-1 px-3 rounded-full transition-all">
          <CornerUpLeft className='inline translate-y-[-1px]' size={12} /> Moved
        </span>
        <span className="badge text-sm bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-100 py-1 px-3 rounded-md transition-all">
          New
        </span>
        <span className="badge text-sm bg-amber-50 hover:bg-amber-100 text-amber-900 py-1 px-3 rounded-md transition-all">
          <Bookmark className='inline translate-y-[-1px]' size={12} /> Secure
        </span>
        <span className="badge text-sm bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-100 py-1 px-3 rounded-full transition-all">
          <Lock className='inline translate-y-[-1px]' size={12} /> Locked
        </span>
      </div>
      <div className='space-x-5'>
        <span className="badge text-sm bg-orange-100 hover:bg-orange-200 text-orange-900 py-1 px-3 rounded-full transition-all">
          Beta
        </span>
        <span className="badge text-sm bg-orange-100 hover:bg-orange-200 text-orange-900 border border-orange-100 py-1 px-3 rounded-md transition-all">
          <Smile className='inline translate-y-[-1px]' size={12} /> Hello!
        </span>
        <span className="badge text-sm bg-orange-100 hover:bg-orange-200 text-orange-900 py-1 px-3 rounded-md transition-all">
          <Play className='inline translate-y-[-1px]' size={12} /> 1m 30s
        </span>
        <span className="badge text-sm bg-orange-100 hover:bg-orange-200 text-orange-900 border border-orange-100 py-1 px-3 rounded-full transition-all">
          <Pin className='inline translate-y-[-1px]' size={12} /> Pinned
        </span>
        <span className="badge text-sm bg-orange-100 hover:bg-orange-200 text-orange-900 border border-orange-100 py-1 px-3 rounded-full transition-all">
          4
        </span>
      </div>
      <div className='space-x-5'>
        <span className="badge text-sm bg-violet-50 hover:bg-violet-100 text-violet-900 py-1 px-3 rounded-full transition-all">
          <Heart className='inline translate-y-[-1px]' size={12} /> Design Systems
        </span>
        <span className="badge text-sm bg-violet-50 hover:bg-violet-100 text-violet-900 border border-violet-100 py-1 px-3 rounded-md transition-all">
          <CircleUserRound className="inline translate-y-[-1px]" size={15}/> @ormanclark
        </span>
        <span className="badge text-sm bg-violet-50 hover:bg-violet-100 text-violet-900 border border-violet-100 py-1 px-3 rounded-full transition-all">
          <Wifi className='inline translate-y-[-1px]' size={12} /> Free Wifi
        </span>
      </div>
    </div>
  )
}

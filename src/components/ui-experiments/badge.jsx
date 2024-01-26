import React from 'react'

export const Badge = ({Icon, title, color, border, rounded, animated, className}) => {
  const colorVariants = {
    gray: 'bg-gray-50 hover:bg-gray-100 text-gray-900 dark:text-gray-200 border-gray-100',
    rose: 'bg-rose-50 hover:bg-rose-100 text-rose-900 dark:text-rose-400 border-rose-100',
    green: 'bg-green-50 hover:bg-green-100 text-green-900 dark:text-green-400 border-green-100',
    cyan: 'bg-cyan-50 hover:bg-cyan-100 text-cyan-900 dark:text-cyan-400 border-cyan-100',
    fuchsia: 'bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-900 dark:text-fuchsia-400 border-fuchsia-100',
    amber: 'bg-amber-50 hover:bg-amber-100 text-amber-900 dark:text-amber-400 border-amber-100',
    orange: 'bg-orange-50 hover:bg-orange-100 text-orange-900 dark:text-orange-400 border-orange-100',
    violet: 'bg-violet-50 hover:bg-violet-100 text-violet-900 dark:text-violet-400 border-violet-100',
  }

  return (
    <span className={`badge dark:bg-gray-800 dark:border-gray-700 whitespace-nowrap inline-block text-sm ${colorVariants[color]} py-1 px-3 rounded-${rounded} ${border} transition-all ${className ? className : ""}`}>
      { Icon && <Icon className={`inline translate-y-[-1px] ${animated}`} size={15}/>} {title}
    </span>
  )
}

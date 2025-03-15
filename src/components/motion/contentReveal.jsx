"use client"

import React from 'react'
import { motion } from 'framer-motion'

export const ContentReveal = ({children, className}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'tween' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

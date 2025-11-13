'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  scale?: number
  className?: string
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  scale = 0.8,
  className = '',
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration,
        delay,
        ease: [0.34, 1.56, 0.64, 1], // Custom bounce easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
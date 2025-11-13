'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useHover } from '@/lib/hooks'

interface HoverCardProps {
  children: ReactNode
  className?: string
  scale?: number
  glow?: boolean
  lift?: boolean
}

export function HoverCard({
  children,
  className = '',
  scale = 1.02,
  glow = false,
  lift = true,
}: HoverCardProps) {
  const { isHover, hoverProps } = useHover()

  return (
    <motion.div
      {...hoverProps}
      animate={{
        scale: isHover ? scale : 1,
        y: isHover && lift ? -8 : 0,
        boxShadow: isHover && glow
          ? '0 20px 40px rgba(255, 107, 53, 0.3)'
          : '0 4px 16px rgba(0, 0, 0, 0.1)',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  )
}
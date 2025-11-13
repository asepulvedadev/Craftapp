import { useState, useRef, useEffect } from 'react'

interface UseHoverOptions {
  delay?: number
}

export function useHover(options: UseHoverOptions = {}) {
  const { delay = 0 } = options
  const [isHover, setIsHover] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => setIsHover(true), delay)
    } else {
      setIsHover(true)
    }
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => setIsHover(false), delay)
    } else {
      setIsHover(false)
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return {
    isHover,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  }
}
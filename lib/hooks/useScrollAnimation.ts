import { useEffect, useState } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { threshold = 0.1, triggerOnce = true } = options
  const [isVisible, setIsVisible] = useState(false)
  const [element, setElement] = useState<Element | null>(null)

  useEffect(() => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [element, threshold, triggerOnce])

  return { ref: setElement, isVisible }
}
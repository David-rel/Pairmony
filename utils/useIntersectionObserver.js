// utils/useIntersectionObserver.js
import { useEffect, useState } from 'react'

export default function useIntersectionObserver(ref, options) {
  const [isIntersecting, setIntersecting] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
      if (entry.isIntersecting) {
        setHasBeenVisible(true)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return hasBeenVisible
}

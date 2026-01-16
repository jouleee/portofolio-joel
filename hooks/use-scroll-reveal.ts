"use client"

import { useEffect, useRef, useState } from "react"

export interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  delay?: number
  duration?: number
  triggerOnce?: boolean
}

export type ScrollDirection = 'up' | 'down'

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const {
    threshold = 0.05,
    rootMargin = "0px 0px -50px 0px",
    delay = 0,
    duration = 1000,
    triggerOnce = false,
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('down')
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const lastScrollY = useRef(0)

  // Prevent hydration mismatch by waiting for client mount
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Track scroll direction
  useEffect(() => {
    if (!isMounted) return

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up')
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMounted])

  useEffect(() => {
    if (!isMounted) return
    
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Clear any pending timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }
          
          timeoutRef.current = setTimeout(() => {
            setIsVisible(true)
            if (triggerOnce) {
              observer.unobserve(element)
            }
          }, delay)
        } else if (!triggerOnce) {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [isMounted, threshold, rootMargin, delay, triggerOnce])

  return { ref, isVisible: isMounted && isVisible, duration, scrollDirection }
}

export function useStaggeredReveal(count: number, baseDelay: number = 80) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasTriggered = useRef(false)
  const timeoutsRef = useRef<NodeJS.Timeout[]>([])

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true
          
          // Clear any existing timeouts
          timeoutsRef.current.forEach(timeout => clearTimeout(timeout))
          timeoutsRef.current = []
          
          // Stagger with smooth timing - trigger all at once with CSS delays
          requestAnimationFrame(() => {
            for (let i = 0; i < count; i++) {
              const timeout = setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, i]))
              }, i * baseDelay)
              timeoutsRef.current.push(timeout)
            }
          })
          
          observer.unobserve(element)
        }
      },
      { 
        threshold: 0.05,
        rootMargin: "100px 0px -30px 0px"
      }
    )

    observer.observe(element)

    return () => {
      // Clean up all timeouts
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout))
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [isMounted, count, baseDelay])

  return { ref, visibleItems }
}

'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export type UseScrollSpyOptions = {
  /** Pixel offset from top at which navbar is considered sticky */
  stickyThreshold?: number
}

/**
 * Tracks scroll position for sticky navbar state. Active section and URL hash
 * are only updated on nav clicks (see Navbar scrollToSection).
 */
export function useScrollSpy(options: UseScrollSpyOptions = {}) {
  const { stickyThreshold = 300 } = options

  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const rafIdRef = useRef<number | null>(null)

  const handleScroll = useCallback(() => {
    if (rafIdRef.current !== null) return
    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = null
      setIsSticky(window.scrollY > stickyThreshold)
    })
  }, [stickyThreshold])

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.location.hash) {
      setActiveSection(window.location.hash.slice(1))
    }

    setIsSticky(window.scrollY > stickyThreshold)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current)
    }
  }, [handleScroll, stickyThreshold])

  return { isSticky, activeSection, setActiveSection }
}

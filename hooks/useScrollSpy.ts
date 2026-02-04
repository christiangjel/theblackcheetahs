'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export type UseScrollSpyOptions = {
  /** Pixel offset from top at which navbar is considered sticky */
  stickyThreshold?: number
  /** Pixel offset used for section boundary detection */
  sectionOffset?: number
}

/**
 * Tracks scroll position to determine sticky state and the section currently in view.
 * Uses section elements with id attributes. Work is batched with requestAnimationFrame
 * so the handler runs at most once per frame.
 */
export function useScrollSpy(options: UseScrollSpyOptions = {}) {
  const { stickyThreshold = 300, sectionOffset = 100 } = options

  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const rafIdRef = useRef<number | null>(null)

  const runUpdate = useCallback(() => {
    rafIdRef.current = null
    const scrollY = window.scrollY
    setIsSticky(scrollY > stickyThreshold)

    const sections = document.querySelectorAll<HTMLElement>('section')
    let current = ''
    for (const section of sections) {
      const sectionTop = section.offsetTop - sectionOffset
      const sectionHeight = section.offsetHeight
      if (
        scrollY >= sectionTop &&
        scrollY < sectionTop + sectionHeight - sectionOffset
      ) {
        current = section.id
      }
    }
    setActiveSection(current)

    const newHash = current ? `#${current}` : ''
    if (window.location.hash !== newHash) {
      const url = newHash
        ? `${window.location.pathname}${window.location.search}${newHash}`
        : window.location.pathname + window.location.search
      window.history.replaceState(null, '', url)
    }
  }, [stickyThreshold, sectionOffset])

  const handleScroll = useCallback(() => {
    if (rafIdRef.current !== null) return
    rafIdRef.current = requestAnimationFrame(runUpdate)
  }, [runUpdate])

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.location.hash) {
      setActiveSection(window.location.hash.slice(1))
    }

    runUpdate()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current)
    }
  }, [handleScroll, runUpdate])

  return { isSticky, activeSection, setActiveSection }
}

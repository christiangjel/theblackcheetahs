'use client'

import { useCallback, useEffect, useState } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { content } from '@/lib/content'
import {
  SECTION_IDS,
  STICKY_THRESHOLD,
  SECTION_SCROLL_OFFSET
} from '@/lib/constants'

const NAV_LABELS: Record<string, string> = {
  about: content.nav.aboutLabel,
  watch: content.nav.videosLabel,
  contact: content.nav.contactLabel
}

export const Navbar = () => {
  const { isSticky, activeSection, setActiveSection } = useScrollSpy({
    stickyThreshold: STICKY_THRESHOLD,
    sectionOffset: SECTION_SCROLL_OFFSET
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToSection = useCallback(
    (e: ReactMouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault()
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState({}, '', `#${id}`)
        setActiveSection(id)
        setIsMenuOpen(false)
      }
    },
    [setActiveSection]
  )

  const getLinkClass = useCallback(
    (section: string, isMobile = false): string => {
      const baseClass = isMobile
        ? 'block px-6 py-3 font-rheiborn text-xl uppercase text-white'
        : 'inline-block px-6 py-1 font-rheiborn text-sm uppercase text-white hover:bg-cheetah-dark-brown hover:text-black'

      if (!isMounted) return baseClass

      return activeSection === section
        ? `${baseClass} bg-cheetah-dark-brown text-black`
        : baseClass
    },
    [activeSection, isMounted]
  )

  return (
    <>
      <button
        type='button'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='fixed top-4 right-4 z-50 bg-black/60 p-2 text-white md:hidden'
        aria-label={
          isMenuOpen ? content.nav.closeMenuAria : content.nav.openMenuAria
        }
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div
        className={`z-40 w-full bg-black/60 ${
          isSticky ? 'fixed top-0' : 'absolute bottom-80 sm:bottom-[-20px]'
        } mb-[100px]`}
      >
        <div className='relative w-full'>
          <nav
            id='nav'
            className='hidden py-0 md:block'
            aria-label={content.accessibility.navMainAria}
          >
            <ul className='flex justify-center'>
              {SECTION_IDS.map((section) => (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    onClick={(e) => scrollToSection(e, section)}
                    className={getLinkClass(section)}
                  >
                    {NAV_LABELS[section] ?? section}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className={`fixed inset-0 z-40 bg-black/95 transition-transform duration-300 md:hidden ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            aria-label={content.accessibility.navMobileAria}
          >
            <ul className='flex h-full flex-col items-center justify-center space-y-8'>
              {SECTION_IDS.map((section) => (
                <li key={section} className='w-full text-center'>
                  <Link
                    href={`#${section}`}
                    onClick={(e) => scrollToSection(e, section)}
                    className={getLinkClass(section, true)}
                  >
                    {NAV_LABELS[section] ?? section}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

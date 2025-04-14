'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle scroll effects
  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      // Sticky nav logic
      setIsSticky(window.scrollY > 300)

      // Active section detection
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        if (
          window.scrollY >= sectionTop - 100 &&
          window.scrollY < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(section.id)
        }
      })
    }

    // Set initial active section from URL hash
    if (window.location.hash) {
      setActiveSection(window.location.hash.substring(1))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll handler
  const scrollToSection = useCallback((e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState({}, '', `#${id}`)
      setActiveSection(id)
      setIsMenuOpen(false)
    }
  }, [])

  // Get class names for nav links
  const getLinkClass = useCallback(
    (section, isMobile = false) => {
      const baseClass = isMobile
        ? 'px-6 py-3 block text-white uppercase font-rheiborn text-xl'
        : 'px-6 py-1 inline-block text-white uppercase font-rheiborn text-sm hover:bg-cheetah-dark-brown hover:text-black'

      if (!isMounted) return baseClass

      return activeSection === section
        ? `${baseClass} bg-cheetah-dark-brown text-black`
        : baseClass
    },
    [activeSection, isMounted]
  )

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='md:hidden fixed top-4 right-4 z-50 text-white p-2 bg-black/60'
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Nav container */}
      <div
        className={`w-full bg-black/60 z-40 ${
          isSticky ? 'fixed top-0' : 'absolute bottom-80 sm:bottom-[-20px]'
        } mb-[100px]`}
      >
        <div className='w-full relative'>
          {/* Desktop navigation */}
          <nav id='nav' className='py-0 hidden md:block'>
            <ul className='flex justify-center'>
              {['about', 'watch', 'contact'].map((section) => (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    onClick={(e) => scrollToSection(e, section)}
                    className={getLinkClass(section)}
                  >
                    {section === 'watch'
                      ? 'Videos'
                      : section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile navigation */}
          <nav
            className={`md:hidden fixed inset-0 bg-black/95 z-40 transition-transform duration-300 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <ul className='flex flex-col items-center justify-center h-full space-y-8'>
              {['about', 'watch', 'contact'].map((section) => (
                <li key={section} className='w-full text-center'>
                  <Link
                    href={`#${section}`}
                    onClick={(e) => scrollToSection(e, section)}
                    className={getLinkClass(section, true)}
                  >
                    {section === 'watch'
                      ? 'Videos'
                      : section.charAt(0).toUpperCase() + section.slice(1)}
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

'use client'

import type React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get the header height
      const headerHeight = 300 // Approximate header height

      // Check if we've scrolled past the header
      if (window.scrollY > headerHeight) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }

      // Handle active section
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Update URL without page reload
      window.history.pushState({}, '', `#${id}`)
      setActiveSection(id)
      setIsMenuOpen(false) // Close mobile menu after clicking
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div
      className={`w-full bg-black/60 z-50 ${
        isSticky ? 'fixed top-0' : 'absolute bottom-[-20px]'
      } mb-[100px]`}
    >
      <div className='w-full relative'>
        {/* Mobile menu button - reverted to previous position */}
        <button
          onClick={toggleMenu}
          className='md:hidden absolute right-[5%] top-2 z-50 text-white p-2'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav id='nav' className='py-0 hidden md:block'>
          <ul className='flex justify-center'>
            <li>
              <Link
                href='#about'
                onClick={(e) => scrollToSection(e, 'about')}
                className={`px-6 py-1 inline-block text-white uppercase font-rheiborn text-sm hover:bg-cheetah-dark-brown hover:text-black ${
                  activeSection === 'about'
                    ? 'bg-cheetah-dark-brown text-black'
                    : ''
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='#watch'
                onClick={(e) => scrollToSection(e, 'watch')}
                className={`px-6 py-1 inline-block text-white uppercase font-rheiborn text-sm hover:bg-cheetah-dark-brown hover:text-black ${
                  activeSection === 'watch'
                    ? 'bg-cheetah-dark-brown text-black'
                    : ''
                }`}
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                href='#contact'
                onClick={(e) => scrollToSection(e, 'contact')}
                className={`px-6 py-1 inline-block text-white uppercase font-rheiborn text-sm hover:bg-cheetah-dark-brown hover:text-black ${
                  activeSection === 'contact'
                    ? 'bg-cheetah-dark-brown text-black'
                    : ''
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        <nav
          className={`md:hidden fixed inset-0 bg-black/95 z-40 transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className='flex flex-col items-center justify-center h-full space-y-8'>
            <li className='w-full text-center'>
              <Link
                href='#about'
                onClick={(e) => scrollToSection(e, 'about')}
                className={`px-6 py-3 block text-white uppercase font-rheiborn text-xl ${
                  activeSection === 'about'
                    ? 'bg-cheetah-dark-brown text-black'
                    : ''
                }`}
              >
                About
              </Link>
            </li>
            <li className='w-full text-center'>
              <Link
                href='#watch'
                onClick={(e) => scrollToSection(e, 'watch')}
                className={`px-6 py-3 block text-white uppercase font-rheiborn text-xl ${
                  activeSection === 'watch'
                    ? 'bg-cheetah-dark-brown text-black'
                    : ''
                }`}
              >
                Videos
              </Link>
            </li>
            <li className='w-full text-center'>
              <Link
                href='#contact'
                onClick={(e) => scrollToSection(e, 'contact')}
                className={`px-6 py-3 block text-white uppercase font-rheiborn text-xl ${
                  activeSection === 'contact'
                    ? 'bg-cheetah-dark-brown text-black'
                    : ''
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { content } from '@/lib/content'

const MIN_DISPLAY_MS = 400
const FADE_DURATION_MS = 400

/**
 * Full-screen preloader overlay. Fades out after page load.
 */
export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    document.body.classList.add('preloader-active')

    const hide = () => {
      timeoutId = setTimeout(() => {
        document.body.classList.remove('preloader-active')
        setIsFading(true)
        setTimeout(() => setIsVisible(false), FADE_DURATION_MS)
      }, MIN_DISPLAY_MS)
    }

    if (document.readyState === 'complete') {
      hide()
    } else {
      window.addEventListener('load', hide)
    }

    return () => {
      document.body.classList.remove('preloader-active')
      window.removeEventListener('load', hide)
      clearTimeout(timeoutId)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className='fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-black transition-opacity duration-500 ease-out'
      style={{ opacity: isFading ? 0 : 1 }}
      aria-live='polite'
      aria-label={content.preloader.label}
    >
      <p className='font-rheiborn text-lg uppercase tracking-wide text-cheetah-brown md:text-xl'>
        ★ {content.preloader.title} ★
      </p>
      <div
        className='h-8 w-8 animate-spin rounded-full border-2 border-cheetah-brown border-t-transparent'
        aria-hidden
      />
    </div>
  )
}

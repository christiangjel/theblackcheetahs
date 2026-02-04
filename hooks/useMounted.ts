'use client'

import { useEffect, useState } from 'react'

/**
 * Returns true only after the component has mounted on the client.
 * Useful for deferring client-only content (e.g. third-party iframes) to avoid hydration mismatch.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

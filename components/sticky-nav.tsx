"use client"

import { useEffect } from "react"

export default function StickyNav() {
  useEffect(() => {
    const handleScroll = () => {
      const headerContainer = document.querySelector(".header-container")
      if (!headerContainer) return

      if (window.scrollY > 300) {
        headerContainer.classList.add("sticky")
      } else {
        headerContainer.classList.remove("sticky")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}

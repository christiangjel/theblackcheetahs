"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A") {
        const href = (target as HTMLAnchorElement).getAttribute("href")
        if (href && href.startsWith("#")) {
          e.preventDefault()
          const id = href.substring(1)
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            // Update URL without page reload
            window.history.pushState({}, "", href)
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return null
}

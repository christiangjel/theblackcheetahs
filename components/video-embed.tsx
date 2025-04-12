"use client"

import { useEffect, useRef } from "react"

interface VideoEmbedProps {
  title: string
  src: string
  width?: string
  height?: string
}

export default function VideoEmbed({ title, src, width = "560", height = "315" }: VideoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple implementation of FitVids.js functionality
    const container = containerRef.current
    if (container) {
      const iframe = container.querySelector("iframe")
      if (iframe) {
        const aspectRatio = Number.parseInt(height) / Number.parseInt(width)
        const wrapper = document.createElement("div")
        wrapper.className = "fluid-width-video-wrapper"
        wrapper.style.width = "100%"
        wrapper.style.position = "relative"
        wrapper.style.paddingTop = `${aspectRatio * 100}%`

        iframe.style.position = "absolute"
        iframe.style.top = "0"
        iframe.style.left = "0"
        iframe.style.width = "100%"
        iframe.style.height = "100%"

        // Replace the iframe with the wrapper containing the iframe
        iframe.parentNode?.insertBefore(wrapper, iframe)
        wrapper.appendChild(iframe)
      }
    }
  }, [height, width])

  return (
    <div ref={containerRef} className="mb-8">
      <h2>{title}</h2>
      <div className="video-container">
        <iframe width={width} height={height} src={src} frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  )
}

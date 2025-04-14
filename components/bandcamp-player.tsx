'use client'

import { useEffect, useState } from 'react'

export default function BandcampPlayer() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    // Empty placeholder during server render
    return <div className='w-full mb-6 h-[120px]' id='player' />
  }

  // Only render the iframe on the client
  return (
    <div id='player' className='w-full mb-6'>
      <iframe
        style={{
          border: 0,
          width: '100%',
          maxWidth: '500px',
          height: '705px'
        }}
        src='https://bandcamp.com/EmbeddedPlayer/album=3133021536/size=large/bgcol=181a1b/linkcol=056cc4/tracklist=true/transparent=true/'
        seamless
        className='mx-auto'
      ></iframe>
    </div>
  )
}

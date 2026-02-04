'use client'

import { useMounted } from '@/hooks/useMounted'
import { content } from '@/lib/content'
import { BANDCAMP_EMBED_URL } from '@/lib/constants'

export default function BandcampPlayer() {
  const mounted = useMounted()

  if (!mounted) {
    return (
      <div id='player' className='mb-6 h-[120px] w-full' aria-hidden='true' />
    )
  }

  return (
    <div id='player' className='mb-6 w-full'>
      <iframe
        style={{
          border: 0,
          width: '100%',
          maxWidth: '500px',
          height: '705px'
        }}
        src={BANDCAMP_EMBED_URL}
        seamless
        className='mx-auto'
        title={content.accessibility.bandcampPlayerTitle}
      />
    </div>
  )
}

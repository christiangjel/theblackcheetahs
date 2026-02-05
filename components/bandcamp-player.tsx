import { content } from '@/lib/content'
import { BANDCAMP_EMBED_URL } from '@/lib/constants'

export const BandcampPlayer = () => {
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

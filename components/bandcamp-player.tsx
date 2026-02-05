import { content } from '@/lib/content'
import { BANDCAMP_EMBED_URL } from '@/lib/constants'

export const BandcampPlayer = () => {
  return (
    <div id='player' className='mb-6 w-full'>
      <iframe
        src={BANDCAMP_EMBED_URL}
        seamless
        className='mx-auto h-[705px] w-full max-w-[500px] border-0'
        title={content.accessibility.bandcampPlayerTitle}
      />
    </div>
  )
}

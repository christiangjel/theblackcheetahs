import { content } from '@/lib/content'
import { VIDEO_EMBEDS } from '@/lib/constants'

const videos = content.videos
const a11y = content.accessibility

function VideoEmbed({
  title,
  src,
  width,
  height,
  allow,
  caption,
  isFirst
}: {
  title: string
  src: string
  width: number
  height: number
  allow?: string
  caption?: string
  isFirst?: boolean
}) {
  return (
    <article className={`mb-4 sm:mb-8 ${isFirst ? 'max-sm:pt-2' : ''}`}>
      <h3 className='mb-2 pt-4 p-0 font-rheiborn text-lg leading-[120%] uppercase lg:px-5 sm:mb-4 md:text-xl lg:text-3xl'>
        {title}
      </h3>
      <div className='relative h-0 overflow-hidden pt-[30px] pb-[56.25%]'>
        <iframe
          className='absolute top-0 left-0 h-full w-full'
          width={width}
          height={height}
          src={src}
          title={title}
          allow={allow}
          allowFullScreen
        />
      </div>
      {caption && (
        <p className='mt-2 text-center font-futura text-[0.85em] leading-[145%]'>
          {caption}
        </p>
      )}
    </article>
  )
}

export const VideoSection = () => {
  return (
    <section
      id='watch'
      aria-labelledby='watch-heading'
      className='mx-[3%] my-[100px] sm:mx-[5%] md:mx-[10%] p-4 md:p-10 md:pb-[40px] bg-black/60 text-left text-white'
    >
      <h2
        id='watch-heading'
        className='sr-only mb-2 pt-4 p-0 font-rheiborn text-lg leading-[120%] uppercase lg:px-5 sm:mb-4 md:text-xl lg:text-3xl'
      >
        {a11y.videoSectionAria}
      </h2>
      <div
        id='embedded-video'
        className='float-none m-0 w-full p-0 lg:clear-both'
      >
        {videos.map((item, i) => (
          <VideoEmbed
            key={item.title}
            title={item.title}
            src={VIDEO_EMBEDS[i].src}
            width={VIDEO_EMBEDS[i].width}
            height={VIDEO_EMBEDS[i].height}
            allow={VIDEO_EMBEDS[i].allow}
            caption={'caption' in item ? item.caption : undefined}
            isFirst={i === 0}
          />
        ))}
      </div>
    </section>
  )
}

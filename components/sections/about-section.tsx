import { BandcampPlayer } from '@/components/bandcamp-player'
import { SocialLinks } from '@/components/social-links'
import { content } from '@/lib/content'
import { EXTERNAL_LINKS } from '@/lib/constants'

const { about: c } = content

export const AboutSection = () => {
  return (
    <section
      id='about'
      aria-labelledby='about-heading'
      className='mx-[3%] mb-[100px] sm:mx-[5%] sm:mt-[50px] sm:mb-[100px] md:mx-[10%] p-4 md:p-10 md:pb-[40px] bg-black/60 text-left text-white'
    >
      <h1
        id='about-heading'
        className='mb-4 pt-4 p-0 font-rheiborn text-lg leading-[120%] uppercase lg:px-5 md:text-xl lg:text-3xl'
      >
        {c.bandName}
      </h1>
      <div className='float-none m-0 w-full p-0 lg:clear-both'>
        <p className='p-0 font-futura text-[0.85em] leading-[145%] lg:px-5'>
          {c.paragraph1}
        </p>
        <br />

        <p className='mb-8 p-0 font-futura text-[0.85em] leading-[145%] lg:px-5 sm:mb-0'>
          {c.paragraph2}
        </p>
      </div>

      <div className='float-none m-0 w-full p-0 md:mx-auto md:max-w-[500px] md:text-center'>
        <div className='md:mt-[60px] text-center'>
          <BandcampPlayer />
          <p className='p-0 text-center font-futura text-[0.85em] leading-[145%]'>
            {c.debutAlbumText}{' '}
            <span className='italic'>{c.debutAlbumTitle}</span>{' '}
            {c.debutAlbumSuffix} <br />
            {c.firstSingleLabel}{' '}
            <a
              className='ml-1 text-cheetah-brown hover:text-white'
              href={EXTERNAL_LINKS.railsOfRust}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${c.firstSingleTitle} (${content.accessibility.externalLinkNewTab})`}
            >
              {c.firstSingleTitle}
            </a>
            <br />
            {c.orderNowLabel}{' '}
            <a
              className='ml-1 text-cheetah-brown hover:text-white'
              href={EXTERNAL_LINKS.waveRecords}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${c.waveRecordsLabel} (${content.accessibility.externalLinkNewTab})`}
            >
              {c.waveRecordsLabel}
            </a>
            <br />
            <br />
            {c.followUsLabel}
          </p>
        </div>

        <div className='text-center'>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}

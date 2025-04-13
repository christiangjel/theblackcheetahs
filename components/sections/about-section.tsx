import SocialLinks from '@/components/social-links'
import { FaDownload } from 'react-icons/fa'

export default function AboutSection() {
  return (
    <section
      id='about'
      className='text-left p-4 md:p-10 md:pb-[40px] bg-black/60 text-white mb-[100] sm:mt-[50px] sm:mb-[100px] mx-[3%] sm:mx-[5%] md:mx-[10%]'
    >
      <h2 className='text-lg md:text-xl lg:text-3xl leading-[120%] p-0 lg:px-5 font-rheiborn uppercase mb-4 pt-4'>
        The Black Cheetahs
      </h2>
      <div className='float-none w-full p-0 m-0 lg:clear-both'>
        <p className='text-[0.85em] leading-[145%] p-0 lg:px-5 font-futura'>
          The Black Cheetahs is the Berlin-based project of music producer and
          artist Sofia TK, pianist Jack Wendy and Christian Gjelstrup on the
          bass. Their music bears the imprint of southern garage rock combined
          with post-modern electronics: A deep doomish sound of slow bpm&rsquo;s
          and a dark bluesy feel with an edge.
        </p>
        <br />

        <p className='text-[0.85em] leading-[145%] p-0 lg:px-5 font-futura mb-8 sm:mb-0'>
          Their punk-hypnotic show and deep immersive sound is gaining them
          followers from the dark rock and experimental scenes alike. A cathodic
          soundtrack that recalls and celebrates the spirit of sex, drugs, and
          rock&rsquo;n&rsquo;roll from its dark side.
        </p>
      </div>

      <div className='float-none w-full p-0 m-0 md:max-w-[500px] md:text-center md:mx-auto'>
        <div className='md:mt-[60px] text-center'>
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
            >
              <a href='https://waverecords.bandcamp.com/album/w141-the-black-cheetahs-slow-doomed-fever'>
                Gold Gold Gold by The Black Cheetahs
              </a>
            </iframe>
          </div>
          <p className='text-[0.85em] leading-[145%] p-0 font-futura text-center'>
            Debut album <span className='italic'>Slow Doomed Fever</span> out
            now. <br />
            Video for the first single:
            <a
              className='text-cheetah-brown hover:text-white ml-1'
              href='https://www.youtube.com/watch?v=OY4sF4dCluc'
              target='_blank'
              rel='noopener noreferrer'
            >
              Rails of Rust
            </a>
            <br />
            Order now:
            <a
              className='text-cheetah-brown hover:text-white ml-1'
              href='https://waverecords.bandcamp.com/album/w141-the-black-cheetahs-slow-doomed-fever'
              target='_blank'
              rel='noopener noreferrer'
            >
              Wave Records
            </a>
            <br /> <br />
            Follow The Black Cheetahs:
          </p>
        </div>

        {/* <div className='mt-6 text-center'>
          <a
            href='#'
            className='inline-flex items-center gap-2 bg-cheetah-dark-brown text-black px-3 py-1 text-sm hover:bg-cheetah-brown hover:text-white transition-colors'
          >
            <FaDownload /> Download Press Kit
          </a>
        </div> */}

        <div className='text-center'>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}

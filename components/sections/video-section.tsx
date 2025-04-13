export default function VideoSection() {
  return (
    <section
      id='watch'
      className='text-left p-4 md:p-10 md:pb-[40px] bg-black/60 text-white my-[100px] mx-[3%] sm:mx-[5%] md:mx-[10%]'
    >
      <div
        className='float-none w-full p-0 m-0 lg:clear-both'
        id='embeded-video'
      >
        <div className='mb-2 sm:mb-16'>
          <h2 className='text-lg md:text-xl lg:text-3xl leading-[120%] p-0 lg:px-5 font-rheiborn uppercase mb-2 sm:mb-4 pt-4'>
            Rails of Rust - Official video
          </h2>
          <div className='relative pb-[56.25%] pt-[30px] h-0 overflow-hidden'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/OY4sF4dCluc'
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className='mb-2 sm:mb-16'>
          <h2 className='text-lg md:text-xl lg:text-3xl leading-[120%] p-0 lg:px-5 font-rheiborn uppercase mb-2 sm:mb-4 pt-4'>
            Gold Gold Gold - Official video
          </h2>
          <div className='relative pb-[56.25%] pt-[30px] h-0 overflow-hidden'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/NHBq3kYBaKI?si=NzzfKcEdUe-UyVt1'
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className='mb-2 sm:mb-16'>
          <h2 className='text-lg md:text-xl lg:text-3xl leading-[120%] p-0 lg:px-5 font-rheiborn uppercase mb-2 sm:mb-4 pt-4'>
            Feathers and Filth - Live at SO36 Berlin
          </h2>
          <div className='relative pb-[56.25%] pt-[30px] h-0 overflow-hidden'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/xhnwvr4cuek'
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className='mb-2 sm:mb-16'>
          <h2 className='text-lg md:text-xl lg:text-3xl leading-[120%] p-0 lg:px-5 font-rheiborn uppercase mb-2 sm:mb-4 pt-4'>
            So Long A Line - Live at Jugendhaus Königstadt Berlin
          </h2>
          <div className='relative pb-[56.25%] pt-[30px] h-0 overflow-hidden'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/5phQOblfels'
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className='mb-2 sm:mb-16'>
          <h2 className='text-lg md:text-xl lg:text-3xl leading-[120%] p-0 lg:px-5 font-rheiborn uppercase mb-2 sm:mb-4 pt-4'>
            Gold Gold Gold - live at Jugendhaus Königstadt Berlin
          </h2>
          <div className='relative pb-[56.25%] pt-[30px] h-0 overflow-hidden'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/HaSg4n_MX5k'
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className=''>
          <h2 className='text-lg md:text-xl lg:text-3xl leading-[120%] p-0 lg:px-5 font-rheiborn uppercase mb-2 sm:mb-4 pt-4'>
            Weapons - Official video
          </h2>
          <div className='relative pb-[56.25%] pt-[30px] h-0 overflow-hidden'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src='https://player.vimeo.com/video/77074704'
              width='560'
              height='255'
              frameBorder='0'
              allow='autoplay; fullscreen'
              allowFullScreen
            ></iframe>
          </div>
          <p className='text-center mt-2 text-[0.85em] leading-[145%] font-futura'>
            (Won the 2nd prize at Berlin Music Video Awards)
          </p>
        </div>
      </div>
    </section>
  )
}

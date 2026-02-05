import Image from 'next/image'

export const BackgroundImage = () => {
  return (
    <div
      className='fixed left-[-3rem] h-[80svh] min-h-[80svh] w-[calc(100%+60px)] z-[-10] sm:-left-8 sm:h-[130%] sm:min-h-0 sm:w-[calc(100%+50px)]'
      id='bg-image'
    >
      <Image
        src='/img/bg-pic.jpg'
        alt='Background'
        fill
        className='object-cover object-top w-full sm:w-[160%] sm:-left-[40%]'
        priority
      />
    </div>
  )
}

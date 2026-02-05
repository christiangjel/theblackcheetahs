import Image from 'next/image'

export const BackgroundImage = () => {
  return (
    <div
      className='fixed left-1/2 z-[-10] h-[700px] min-h-[700px] w-[600px] -translate-x-[calc(50%+2rem)] sm:-left-8 sm:translate-x-0 sm:h-[80svh] sm:w-[calc(100%+50px)]'
      id='bg-image'
      aria-hidden
    >
      <Image
        src='/img/bg-pic.jpg'
        alt=''
        fill
        className='object-contain object-top sm:object-cover sm:-left-[40%] sm:w-[160%]'
        priority
      />
    </div>
  )
}

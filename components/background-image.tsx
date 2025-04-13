import Image from 'next/image'

export default function BackgroundImage() {
  return (
    <div
      className='fixed h-full sm:h-[130%] w-[calc(100%+50px)] -left-8 z-[-10]'
      id='bg-image'
    >
      <Image
        src='/img/bg-pic.jpg'
        alt='Background'
        // fill={false}
        fill
        // className='min-h-screen w-full sm:absolute sm:h-screen sm:w-[160%] sm:-left-[40%]'
        className='object-fit min-h-screen w-full h-screen sm:w-[160%] sm:-left-[40%]'
        priority
      />
    </div>
    // <div className='hidden sm:block w-full h-full'>
    //   <Image
    //     src='/img/bg-pic.jpg'
    //     alt='Background'
    //     fill
    //     priority
    //     sizes='100vw'
    //   />
    // </div>
    // </div>
  )
}

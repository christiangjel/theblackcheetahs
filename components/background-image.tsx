import Image from 'next/image'

export default function BackgroundImage() {
  return (
    <div
      className='fixed h-screen sm:h-[130%] w-[calc(100%+50px)] -left-8 z-[-10]'
      id='bg-image'
    >
      <Image
        src='/img/bg-pic.jpg'
        alt='Background'
        fill
        className='object-fit min-h-screen w-full h-screen sm:w-[160%] sm:-left-[40%] sm:object-cover sm:object-top'
        priority
      />
    </div>
  )
}

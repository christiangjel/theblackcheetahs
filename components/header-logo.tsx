import Image from 'next/image'

export default function HeaderLogo() {
  return (
    <header className='mt-[8%] sm:mt-[8%] mb-[30%] float-left w-full clearfix'>
      <div id='intrologo' className='text-center mx-auto w-full'>
        <Image
          src='/img/tbc-letters.png'
          alt='The Black Cheetahs'
          width={1200}
          height={300}
          className='w-full h-auto px-0 max-w-none'
          priority
          sizes='100vw'
        />
      </div>
    </header>
  )
}

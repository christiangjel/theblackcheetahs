import Link from 'next/link'
import { BackgroundImage } from '@/components/background-image'
import { Footer } from '@/components/footer'
import { content } from '@/lib/content'

const nf = content.notFound

export default function NotFound() {
  return (
    <>
      <BackgroundImage />
      <main
        id='main'
        className='relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-12'
        tabIndex={-1}
      >
        <div className='mx-auto max-w-md bg-black/60 p-4 text-center md:p-10'>
          <p className='font-rheiborn text-6xl uppercase tracking-wide text-white md:text-8xl'>
            {nf.title}
          </p>
          <p className='mt-4 font-futura text-base leading-relaxed text-white/90'>
            {nf.message}
          </p>
          <Link
            href='/'
            className='mt-8 inline-block font-rheiborn text-sm uppercase text-cheetah-brown transition-colors hover:text-white'
          >
            {nf.backHome}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

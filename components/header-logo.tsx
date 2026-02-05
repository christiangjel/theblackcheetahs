import Image from 'next/image'
import { content } from '@/lib/content'

export const HeaderLogo = () => {
  return (
    <header className="clearfix mt-[50%] mb-[30%] w-full sm:mt-[8%]">
      <div id="intrologo" className="mx-auto w-full text-center">
        <Image
          src="/img/tbc-letters.png"
          alt={content.accessibility.logoAlt}
          width={1200}
          height={300}
          className="h-auto max-w-none w-full px-0"
          priority
          sizes="100vw"
        />
      </div>
    </header>
  )
}

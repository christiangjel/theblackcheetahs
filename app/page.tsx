import { Navbar } from '@/components/navbar'
import { BackgroundImage } from '@/components/background-image'
import { HeaderLogo } from '@/components/header-logo'
import { AboutSection } from '@/components/sections/about-section'
import { VideoSection } from '@/components/sections/video-section'
import { ContactSection } from '@/components/sections/contact-section'
import { SocialLinks } from '@/components/social-links'
import { Footer } from '@/components/footer'
import { content } from '@/lib/content'

const a11y = content.accessibility

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-4 focus:w-auto focus:h-auto focus:overflow-visible focus:whitespace-normal focus:bg-cheetah-dark-brown focus:px-3 focus:py-2 focus:text-black focus:outline-none focus:[clip:auto]"
      >
        {a11y.skipToMain}
      </a>
      <BackgroundImage />

      <main id="main" className="overflow-x-hidden" tabIndex={-1}>
        <Navbar />
        <HeaderLogo />
        <AboutSection />
        <VideoSection />
        <ContactSection />
        <div className="w-full md:hidden">
          <SocialLinks />
        </div>
      </main>
      <Footer />
    </>
  )
}

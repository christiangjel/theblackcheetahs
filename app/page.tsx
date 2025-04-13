import Navbar from '@/components/navbar'
import BackgroundImage from '@/components/background-image'
import HeaderLogo from '@/components/header-logo'
import AboutSection from '@/components/sections/about-section'
import VideoSection from '@/components/sections/video-section'
import ContactSection from '@/components/sections/contact-section'
import SocialLinks from '@/components/social-links'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <BackgroundImage />

      <div id='container' className='overflow-x-hidden'>
        <Navbar />
        <HeaderLogo />
        <div className='clearfix'>&nbsp;</div>
        <AboutSection />
        <VideoSection />
        <ContactSection />
        <div className='w-full md:hidden'>
          <SocialLinks />
        </div>
      </div>
      <Footer />
    </>
  )
}

import ContactForm from '@/components/contact-form'
import SocialLinks from '@/components/social-links'

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='text-left p-4 md:p-10 md:pb-[40px] bg-black/60 text-white my-[100px] mx-[3%] sm:mx-[5%] md:mx-[10%]'
    >
      <h2 className='text-lg md:text-xl lg:text-3xl leading-[120%] p-0 lg:px-5 font-rheiborn uppercase mb-4 pt-4'>
        Contact
      </h2>
      <div className='flex flex-col md:flex-row md:gap-8'>
        <div className='md:w-1/2'>
          <p className='text-[0.85em] leading-[145%] p-0 lg:px-5 font-futura'>
            Send your love, hate, offers and proposals.
            {/* <br /> */}
            {/* <a
              className='text-cheetah-brown hover:text-white'
              href='mailto:theblackcheetahs@proton.me'
              target='_blank'
              rel='noopener noreferrer'
            >
              theblackcheetahs@proton.me
            </a> */}
          </p>

          <div className='mt-12 hidden md:block'>
            <SocialLinks />
          </div>
        </div>

        <div className='md:w-1/2 mt-8 md:mt-0'>
          <ContactForm />
        </div>

        <div className='w-full mt-8 md:hidden'>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}

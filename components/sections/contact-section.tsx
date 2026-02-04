import ContactForm from '@/components/contact-form'
import SocialLinks from '@/components/social-links'
import { content } from '@/lib/content'

const { contact: c } = content

export default function ContactSection() {
  return (
    <section
      id='contact'
      aria-labelledby='contact-heading'
      className='mx-[3%] my-[100px] bg-black/60 p-4 text-left text-white sm:mx-[5%] md:mx-[10%] md:p-10 md:pb-[40px]'
    >
      <h2
        id='contact-heading'
        className='mb-4 pt-4 p-0 font-rheiborn text-lg leading-[120%] uppercase lg:px-5 md:text-xl lg:text-3xl'
      >
        {c.heading}
      </h2>
      <div className='flex flex-col md:flex-row md:gap-8'>
        <div className='md:w-1/2'>
          <p className='font-futura text-[0.85em] leading-[145%] p-0 lg:px-5'>
            {c.intro}
          </p>

          <div className='mt-12 hidden md:block'>
            <SocialLinks />
          </div>
        </div>

        <div className='mt-8 md:mt-0 md:w-1/2'>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

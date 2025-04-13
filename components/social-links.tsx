import {
  FaBandcamp,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaSpotify,
  FaLink
} from 'react-icons/fa'

export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'Bandcamp',
      url: 'https://theblackcheetahs.bandcamp.com/album/slow-doomed-fever',
      icon: <FaBandcamp className='w-5 h-5 md:w-6 md:h-6' />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/theblackcheetahs/',
      icon: <FaInstagram className='w-5 h-5 md:w-6 md:h-6' />
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCD0GLQ4LR2GnX9MOO0MRSNA',
      icon: <FaYoutube className='w-5 h-5 md:w-6 md:h-6' />
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/theblackcheetahs/',
      icon: <FaFacebook className='w-5 h-5 md:w-6 md:h-6' />
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/album/65eXAUa1zBUztNkkwQvJMm?utm_medium=share&utm_source=linktree',
      icon: <FaSpotify className='w-5 h-5 md:w-6 md:h-6' />
    },
    {
      name: 'Linktree',
      url: 'https://linktr.ee/theblackcheetahs',
      icon: <FaLink className='w-5 h-5 md:w-6 md:h-6' />
    }
  ]

  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 md:gap-8 mt-6 sm:mb-8 md:mb-0'>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-cheetah-brown hover:text-white transition-colors'
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

import {
  FaBandcamp,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaSpotify,
  FaYoutube
} from 'react-icons/fa'
import { SOCIAL_LINKS as SOCIAL_LINKS_DATA } from '@/lib/constants'
import { content } from '@/lib/content'

const ICONS = {
  Bandcamp: FaBandcamp,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  Facebook: FaFacebook,
  Spotify: FaSpotify,
  Linktree: FaLink
} as const

export const SocialLinks = () => {
  return (
    <ul className='mt-6 flex flex-row flex-wrap justify-center gap-4 sm:mb-8 md:mb-0 md:gap-8 list-none p-0 m-0'>
      {SOCIAL_LINKS_DATA.map(({ name, url }) => {
        const Icon = ICONS[name]
        return (
          <li key={name}>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-cheetah-brown transition-colors hover:text-white'
              aria-label={`${name} (${content.accessibility.externalLinkNewTab})`}
            >
              <Icon className='h-5 w-5 md:h-6 md:w-6' />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

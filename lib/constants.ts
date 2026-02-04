/**
 * Section IDs used for navigation and scroll spy.
 * Order matches nav order.
 */
export const SECTION_IDS = ['about', 'watch', 'contact'] as const

export type SectionId = (typeof SECTION_IDS)[number]

/** Scroll offset (px) above which navbar becomes sticky */
export const STICKY_THRESHOLD = 300

/** Section offset (px) used for active section detection */
export const SECTION_SCROLL_OFFSET = 100

export const SOCIAL_LINKS = [
  { name: 'Bandcamp', url: 'https://theblackcheetahs.bandcamp.com/album/slow-doomed-fever' },
  { name: 'Instagram', url: 'https://www.instagram.com/theblackcheetahs/' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCD0GLQ4LR2GnX9MOO0MRSNA' },
  { name: 'Facebook', url: 'https://www.facebook.com/theblackcheetahs/' },
  { name: 'Spotify', url: 'https://open.spotify.com/album/65eXAUa1zBUztNkkwQvJMm?utm_medium=share&utm_source=linktree' },
  { name: 'Linktree', url: 'https://linktr.ee/theblackcheetahs' }
] as const

export type VideoEmbedConfig = {
  src: string
  width: number
  height: number
  allow?: string
}

export const VIDEO_EMBEDS: readonly VideoEmbedConfig[] = [
  { src: 'https://www.youtube.com/embed/OY4sF4dCluc', width: 560, height: 315 },
  { src: 'https://www.youtube.com/embed/NHBq3kYBaKI?si=NzzfKcEdUe-UyVt1', width: 560, height: 315 },
  { src: 'https://www.youtube.com/embed/xhnwvr4cuek', width: 560, height: 315 },
  { src: 'https://www.youtube.com/embed/5phQOblfels', width: 560, height: 315 },
  { src: 'https://player.vimeo.com/video/77074704', width: 560, height: 255, allow: 'autoplay; fullscreen' }
]

export const BANDCAMP_EMBED_URL =
  'https://bandcamp.com/EmbeddedPlayer/album=3133021536/size=large/bgcol=181a1b/linkcol=056cc4/tracklist=true/transparent=true/'

export const EXTERNAL_LINKS = {
  railsOfRust: 'https://www.youtube.com/watch?v=OY4sF4dCluc',
  waveRecords: 'https://waverecords.bandcamp.com/album/w141-the-black-cheetahs-slow-doomed-fever'
} as const

export const SITE_URL = 'https://www.theblackcheetahs.com/'

export const OG_IMAGE_URL =
  'https://opengraph.b-cdn.net/production/images/4400a8d9-ccbe-4698-823d-d40bfa39cb8c.png?token=dzNnqEHprev7JAj9Jdt-2epoU1yhVe0RvYN0zEN66CA&height=554&width=1200&expires=33280367840'

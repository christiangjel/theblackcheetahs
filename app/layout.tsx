import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { futuraBook, rheiborn } from '@/lib/fonts'
import { content } from '@/lib/content'
import { SITE_URL, OG_IMAGE_URL } from '@/lib/constants'
import { Preloader } from '@/components/preloader'

const { metadata: meta, about } = content

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.ogTitle,
    description: meta.ogDescription,
    url: '/',
    type: 'website',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 554,
        alt: meta.ogImageAlt
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.ogTitle,
    description: meta.ogDescription,
    images: [OG_IMAGE_URL]
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={`${futuraBook.variable} ${rheiborn.variable}`}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-touch-icon-57x57-precomposed.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-touch-icon-72x72-precomposed.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-touch-icon-114x114-precomposed.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-touch-icon-144x144-precomposed.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          href='/apple-touch-icon-precomposed.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='57x57'
          href='/apple-touch-icon-57x57-precomposed.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='72x72'
          href='/apple-touch-icon-72x72-precomposed.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='114x114'
          href='/apple-touch-icon-114x114-precomposed.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='144x144'
          href='/apple-touch-icon-144x144-precomposed.png'
        />
      </head>
      <body
        className='m-0 h-full w-full bg-black p-0 text-center font-futura text-base leading-relaxed text-white'
        suppressHydrationWarning
      >
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': `${SITE_URL}#website`,
                  url: SITE_URL,
                  name: meta.title,
                  description: meta.ogDescription,
                  publisher: { '@id': `${SITE_URL}#organization` }
                },
                {
                  '@type': 'MusicGroup',
                  '@id': `${SITE_URL}#organization`,
                  name: about.bandName,
                  url: SITE_URL,
                  description: meta.description,
                  image: OG_IMAGE_URL
                }
              ]
            })
          }}
        />
        <Preloader />
        {children}
      </body>
    </html>
  )
}

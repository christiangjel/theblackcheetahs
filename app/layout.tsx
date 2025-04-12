import type React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { futuraBook, rheiborn } from '@/lib/fonts'

export const metadata: Metadata = {
  title: '★ THE BLACK CHEETAHS ★',
  description: 'The Black Cheetahs Official site',
  openGraph: {
    title: '★ THE BLACK CHEETAHS ★',
    description: 'The Black Cheetahs Official site',
    url: 'https://www.theblackcheetahs.com/',
    type: 'website',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/4400a8d9-ccbe-4698-823d-d40bfa39cb8c.png?token=dzNnqEHprev7JAj9Jdt-2epoU1yhVe0RvYN0zEN66CA&height=554&width=1200&expires=33280367840',
        width: 1200,
        height: 554,
        alt: 'The Black Cheetahs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '★ THE BLACK CHEETAHS ★',
    description: 'The Black Cheetahs Official site',
    images: [
      'https://opengraph.b-cdn.net/production/images/4400a8d9-ccbe-4698-823d-d40bfa39cb8c.png?token=dzNnqEHprev7JAj9Jdt-2epoU1yhVe0RvYN0zEN66CA&height=554&width=1200&expires=33280367840'
    ]
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
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

        {/* Facebook Meta Tags */}
        <meta property='og:url' content='https://www.theblackcheetahs.com/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='★ THE BLACK CHEETAHS ★' />
        <meta
          property='og:description'
          content='The Black Cheetahs Official site'
        />
        <meta
          property='og:image'
          content='https://opengraph.b-cdn.net/production/images/4400a8d9-ccbe-4698-823d-d40bfa39cb8c.png?token=dzNnqEHprev7JAj9Jdt-2epoU1yhVe0RvYN0zEN66CA&height=554&width=1200&expires=33280367840'
        />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='theblackcheetahs.com' />
        <meta
          property='twitter:url'
          content='https://www.theblackcheetahs.com/'
        />
        <meta name='twitter:title' content='★ THE BLACK CHEETAHS ★' />
        <meta
          name='twitter:description'
          content='The Black Cheetahs Official site'
        />
        <meta
          name='twitter:image'
          content='https://opengraph.b-cdn.net/production/images/4400a8d9-ccbe-4698-823d-d40bfa39cb8c.png?token=dzNnqEHprev7JAj9Jdt-2epoU1yhVe0RvYN0zEN66CA&height=554&width=1200&expires=33280367840'
        />
      </head>
      <body className='h-full w-full m-0 p-0 text-white text-center text-base leading-relaxed bg-black font-futura'>
        {children}
      </body>
    </html>
  )
}

import './globals.css'

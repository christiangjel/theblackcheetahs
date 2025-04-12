import localFont from 'next/font/local'

export const futuraBook = localFont({
  src: [
    {
      path: '../public/fonts/futuralt-book-webfont.woff',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-futura',
  display: 'swap'
})

export const rheiborn = localFont({
  src: [
    {
      path: '../public/fonts/rheiborn_sans_clean-webfont.woff',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-rheiborn',
  display: 'swap'
})

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'cheetah-brown': '#705c4e',
        'cheetah-dark-brown': '#554130'
      },
      fontFamily: {
        futura: ['var(--font-futura)', 'sans-serif'],
        rheiborn: ['var(--font-rheiborn)', 'sans-serif']
      }
    }
  }
}

export default config

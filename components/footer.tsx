import { content } from '@/lib/content'

export const Footer = () => {
  return (
    <footer className="py-2 text-center font-rheiborn text-xs text-cheetah-dark-brown">
      <span className="font-serif">&copy;</span> {new Date().getFullYear()}{' '}
      {content.footer.copyright}
    </footer>
  )
}

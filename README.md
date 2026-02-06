# The Black Cheetahs

Official website for **The Black Cheetahs**, a Berlin-based band. Built with Next.js 16, React 19, and Tailwind CSS.

## Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI:** React 19, [Tailwind CSS](https://tailwindcss.com/)
- **Forms:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/), [Formspree](https://formspree.io/)
- **Fonts:** Local (Futura, Rheiborn) via `next/font`

## Features

- Preloader on first load
- Responsive nav with sticky bar; URL hash and active state update on nav clicks only (no scroll-sync)
- Bandcamp album player and video embeds (YouTube, Vimeo)
- Contact form (Formspree) with validation
- SEO: metadata, canonical URL, sitemap, robots, JSON-LD
- Custom 404 page

## Getting started

### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn)

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

Copy `.env.example` to `.env.local` and set:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Formspree form ID for the contact form. Set in `.env.local` for local dev. Add the same variable in Vercel (Project → Settings → Environment Variables) for production. |
| `NEXT_PUBLIC_SITE_URL` | Optional. Canonical site URL for metadata, sitemap, robots. Default: `https://www.theblackcheetahs.com/`. Set in Vercel for production if you use a custom domain or need to override. |

### Build and lint

```bash
npm run build   # Production build
npm run start   # Run production build locally
npm run lint    # ESLint
```

## Project structure

| Path | Purpose |
|------|---------|
| `app/` | App Router: layout, page, globals, `not-found.tsx`, `sitemap.ts`, `robots.ts` |
| `components/` | Sections, navbar, footer, contact form, Bandcamp player, preloader, etc. |
| `data/content.json` | All display copy (headings, paragraphs, labels, messages) |
| `lib/` | `content` (typed content), `constants` (URLs, section IDs, Formspree config), `fonts` |
| `hooks/` | `useScrollSpy` — sticky navbar state; hash/active section from nav clicks only |
| `public/` | Static assets (images, fonts, favicons) |

- **Content:** Edit `data/content.json` to change visible text site-wide; components import from `@/lib/content`.
- **Constants:** URLs, section IDs, embed config, and similar non-copy config live in `lib/constants.ts`.

## License

Private. All rights reserved — The Black Cheetahs.

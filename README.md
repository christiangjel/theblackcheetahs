# The Black Cheetahs

Official website for **The Black Cheetahs**, a Berlin-based band. Built with Next.js 15, React 19, and Tailwind CSS.

## Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI:** React 19, [Tailwind CSS](https://tailwindcss.com/)
- **Forms:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/), [Formspree](https://formspree.io/)
- **Fonts:** Local (Futura, Rheiborn) via `next/font`

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

Copy `.env.example` to `.env.local` and set (or create `.env.local`):

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Formspree form ID for the contact form. **Required** for the contact form to work. |

### Build and lint

```bash
npm run build   # Production build
npm run lint    # ESLint
```

## Project structure

| Path | Purpose |
|------|---------|
| `app/` | Next.js App Router: layout, page, global styles |
| `components/` | React components (sections, navbar, footer, form, etc.) |
| `data/content.json` | All display copy (headings, paragraphs, labels, messages) |
| `lib/` | Shared code: `content` (typed content), `constants` (URLs, section IDs, config), `fonts` |
| `hooks/` | Custom hooks: `useScrollSpy` |
| `public/` | Static assets (images, fonts, favicons) |

- **Content:** Edit `data/content.json` to change visible text site-wide; components import from `@/lib/content`.
- **Constants:** URLs, section IDs, embed config, and similar non-copy config live in `lib/constants.ts`.

## License

Private. All rights reserved — The Black Cheetahs.

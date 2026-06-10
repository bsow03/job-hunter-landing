# Job Hunter Landing Page

Marketing site for the Job Hunter Chrome extension, built with Vite + React + Tailwind v4 + Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Build for production

```bash
npm run build
npm run preview    # local preview of the production build
```

Output goes to `dist/`. Deploy to Vercel, Netlify, Cloudflare Pages, or any static host.

---

## Stack

- **Vite 8** — build tool, dev server, HMR
- **React 19** — UI framework (matches the extension's version)
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin, no `tailwind.config.js` needed
- **Framer Motion** — entrance animations, hover states, accordion, scroll reveals
- **Geist + Geist Mono** — fonts loaded from Google Fonts in `index.html`

## File structure

```
src/
├── components/
│   ├── Nav.jsx              Sticky header with backdrop blur
│   ├── Hero.jsx             Above-the-fold + staggered entrance animation
│   ├── PopupMockup.jsx      Recreated extension popup in CSS/JSX
│   ├── Problem.jsx          Pain statement + 3-col grid
│   ├── HowItWorks.jsx       3-step process cards with hover lift
│   ├── Features.jsx         6-feature grid with SVG icons
│   ├── ProTier.jsx          Pro teaser + waitlist form
│   ├── FAQ.jsx              Accordion Q&A with height animation
│   ├── Footer.jsx           Minimal footer with Yume credit
│   └── ui/
│       ├── GradientText.jsx     Reusable gradient text utility
│       └── RevealOnScroll.jsx   Wraps children in scroll-triggered fade-up
├── App.jsx                  Page composition (imports all sections)
├── main.jsx                 React entry point
└── index.css                Tailwind import + design tokens (@theme)
```

## Design system

All design tokens live in `src/index.css` under the `@theme` directive (Tailwind v4 pattern).

Defined tokens:

- **Backgrounds**: `bg-base`, `bg-elevated`, `bg-card`
- **Text**: `text-text-primary`, `text-text-secondary`, `text-text-tertiary`
- **Brand**: `yume-pink` (#cb6ce6), `yume-magenta` (#ff66c4) — used as gradient endpoints
- **Status** (matches extension): `success`, `warning`, `fail`
- **Fonts**: `font-sans` (Geist), `font-mono` (Geist Mono)

To change anything globally, edit the `@theme` block — all utility classes referencing it update automatically.

## Animations

Framer Motion handles:

- **Hero entrance** — staggered fade-up on title, sub, CTAs, meta (Hero.jsx)
- **Scroll reveals** — `RevealOnScroll` wrapper triggers fade-up when section enters viewport
- **Popup mockup cards** — staggered entrance, each card animates in 0.15s after the last
- **Card hover lifts** — `whileHover={{ y: -4 }}` on step cards
- **FAQ accordion** — height + opacity animation via `AnimatePresence`
- **Waitlist confirmation** — button text + color transition on submit

## Hooking up the waitlist

The waitlist form in `ProTier.jsx` currently just sets local state to show "Joined ✓". To actually capture emails, swap the `handleSubmit` function for one of these:

### Tally (easiest)

Replace the form entirely with a Tally embed. Sign up at tally.so, create a form, copy the embed code into ProTier.jsx.

### Buttondown / EmailOctopus / ConvertKit

POST the email to their API:

```jsx
async function handleSubmit(e) {
  e.preventDefault()
  await fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${import.meta.env.VITE_BUTTONDOWN_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
  setJoined(true)
}
```

Note: don't hardcode keys. Use `import.meta.env.VITE_*` variables (Vite reads `.env` files).

### Supabase (if you want to own the data)

```jsx
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)

async function handleSubmit(e) {
  e.preventDefault()
  await supabase.from('waitlist').insert({ email })
  setJoined(true)
}
```

Add `@supabase/supabase-js` to dependencies, create a `waitlist` table with an `email` column, done.

## Deploying

### Vercel (recommended — easiest)

```bash
npx vercel
```

Or push to GitHub and import the repo in the Vercel dashboard. Auto-deploys on every push.

### Netlify

Same flow — push to GitHub, import in Netlify dashboard. Or `npx netlify deploy`.

### Cloudflare Pages

Connect your GitHub repo at pages.cloudflare.com. Free, fast, generous limits.

All three are free for personal projects. Pick whichever you're already using or has the cleanest dashboard for you.

## Customization tips

- **Change the gradient colors**: edit `--color-yume-pink` and `--color-yume-magenta` in `src/index.css`. Every gradient on the page updates.
- **Change headlines**: each section's content is defined in arrays at the top of the component file. Edit the array, not the JSX.
- **Add more sections**: create a new file in `src/components/`, import it into `App.jsx`, add it to the JSX between existing sections.
- **Adjust animation timing**: search for `duration:` or `delay:` in component files. The shared easing curve is `[0.16, 1, 0.3, 1]` — a custom ease-out.

## Things still to do

- [ ] Wire up the waitlist form to an actual email service
- [ ] Replace placeholder href="#" links with real URLs (Chrome Web Store, privacy policy, contact)
- [ ] Add a real demo video (linked from "Watch demo" button in hero)
- [ ] Optionally swap the recreated popup mockup for an actual screenshot
- [ ] Add `<meta>` tags for SEO and social previews (Open Graph image, Twitter card)
- [ ] Set up a favicon (currently missing)
- [ ] Add the Yume parent brand logo somewhere (could replace the "J" mark in nav with the incognito icon)

## Notes for Tuesday's session

- Run `npm install` first thing. Should take ~30 seconds with a fresh `package-lock.json`.
- The `dev` script gives you HMR so changes show up instantly.
- All real content (headlines, descriptions, FAQs, features) is in arrays at the top of each component file — edit those, not the JSX, for fastest iteration.
- The Tailwind v4 `@theme` block is the single source of truth for colors and fonts. If something looks off, check there first.
- Framer Motion handles all animations. If something animates weirdly, look for `motion.*` components and adjust their props.

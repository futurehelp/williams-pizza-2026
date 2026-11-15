# William’s Pizza 2026

Native Next.js modernization for William’s Pizza in Gramado, RS. The site keeps the real brand assets and menu information while moving the experience into a faster, editorial 2026 interface in English.

## Stack

- Next.js App Router
- React 19
- Framer Motion for restrained reveals and interaction states
- Lucide React icons
- Local brand assets and Rubik font
- Responsive layouts for mobile, tablet, and desktop

## Run locally

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

The page is intentionally native and self-contained. It does not embed the legacy Cardápio Web site in an iframe. Ordering routes to the public William’s Pizza WhatsApp flow.

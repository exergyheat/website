# Exergy

Marketing site for Exergy LLC. Building energy systems powered by bitcoin miners. React, TypeScript, Vite, Tailwind.

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
npm run serve
```

`npm run build` typechecks, bundles, prerenders each route to static HTML, and regenerates `sitemap.xml`.

## Pages

Home, Commercial, Partners, Operations, About, Contact, Privacy, and a custom 404. Older paths (`/products`, `/services`, `/learn`, `/newsroom`, `/case-studies`, `/book-call`, and others) redirect. See `vercel.json`.

## Contact form

The form is front end only. `src/lib/submitLead.ts` posts to `VITE_LEAD_ENDPOINT` when that variable is set. In development, with no endpoint, it logs the lead and shows success. Copy `.env.example` to `.env` locally. Do not commit secrets.

The 15 minute call uses `BOOKING_URL` in `src/lib/site.ts`.

## Theme

Light and dark follow the system preference until someone uses the toggle. The choice is stored in `localStorage`.

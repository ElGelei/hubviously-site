# Rename follow-ups — operator actions (site, LOT R1)

Code-side display rename (Hubviously → Untanggy) is done. These items need
action outside this repo before/at cutover.

## Assets

- [ ] **Retake `public/hero-explorer.webp`** — the homepage hero screenshot
      still shows the old "Hubviously" wordmark (and the demo portal domain
      `lumenly-hubviously-demo-account-dev-51895284.com`) in the app chrome.
      Re-capture from the renamed app once the app rename is live, then drop
      the new file in place (same path; the `alt` text in `homeHtml` already
      says "Untanggy Explorer…").

## Termly-generated legal pages (regenerate in Termly, then re-export here)

Left untouched on purpose — the source of truth is the Termly editor, not this
repo. Update the business name there, regenerate, and replace the constants in
`app/_lib/content.ts`:

- [ ] `privacyHtml` (content.ts line 11) — 4 "Hubviously" occurrences
      ("Use Hubviously. Hubviously is a B2B SaaS platform…", Stripe/PCI
      sections).
- [ ] `termsHtml` (content.ts line 15) — 10 occurrences: the defined term
      «"Hubviously," "we," "us"» throughout the ToS.
- [ ] `mentionsLegalesHtml` (content.ts line 17) — 3 occurrences, including
      the trademark statement («La marque "Hubviously"…»). ⚠️ Legal must
      confirm the "Untanggy" mark is registered/owned by HS Simple before
      swapping.
- [ ] `cookiesHtml` (content.ts line 13) — no brand-name occurrences, but it
      is Termly-generated too; regenerate together with the others for
      consistency.

## Deferred to later lots (unchanged in this one, by design)

- Domain: `SITE_URL`, canonicals, robots/sitemap, `app.hubviously.com` links
  (9), `hello@hubviously.com` mailtos (35).
- HubSpot Meetings slugs `gbolnot/demo-hubviously` and `gbolnot/hubviously`
  (operator will create new slugs later, then update the two references in
  `content.ts`).

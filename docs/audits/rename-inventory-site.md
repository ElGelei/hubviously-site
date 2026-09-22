# Rename inventory — marketing site (hubviously.com → untanggy.com)

Read-only audit of `hubviously-site` (github.com/ElGelei/hubviously-site) for the
Hubviously → Untanggy rename. Companion to the app-repository inventory.
Audit date: 2026-09-10, at commit `06e50dc` on `main`.

Notes on file layout: `app/_lib/content.ts` stores each page body as one giant
single-line string constant, so references there are given as
`line:col` (column = character offset of the match on that line). Constants:
line 7 = `homeHtml`, line 9 = `contactHtml`, line 11 = `privacyHtml`,
line 13 = `cookiesHtml`, line 15 = `termsHtml`, line 17 = `mentionsLegalesHtml`.

---

## 1. Brand name displayed to users ("Hubviously" as text)

| File | Line(s) | Occurrence | Notes |
|---|---|---|---|
| [app/layout.tsx](../../app/layout.tsx) | 6 | `SITE_TITLE = "Hubviously — Untangle your HubSpot portal"` | Feeds `<title>`, OG, Twitter |
| [app/layout.tsx](../../app/layout.tsx) | 14 | Title template `"%s — Hubviously"` | |
| [app/layout.tsx](../../app/layout.tsx) | 17 | `applicationName: "Hubviously"` | |
| [app/layout.tsx](../../app/layout.tsx) | 18 | `authors: [{ name: "Hubviously" }]` | |
| [app/layout.tsx](../../app/layout.tsx) | 33 | `siteName: "Hubviously"` (OpenGraph) | |
| [app/layout.tsx](../../app/layout.tsx) | 37 | Commented-out OG image alt `"Hubviously"` | In the OG-image TODO |
| [app/layout.tsx](../../app/layout.tsx) | 86, 125 | `<img src="/logo-mark.png" alt="Hubviously" />` | Header + footer logo alt |
| [app/layout.tsx](../../app/layout.tsx) | 88–91, 127–130 | Wordmark split as `<span class="hub">Hub</span><span class="viously">viously</span>` | Header + footer. CSS classes `.hub` / `.viously` in globals.css style the two halves — the wordmark markup **and** the class names/styles need a new split for "Untanggy" |
| [app/layout.tsx](../../app/layout.tsx) | 160 | `© 2026 Hubviously. Made for HubSpot admins.` | Footer copyright |
| [app/privacy/page.tsx](../../app/privacy/page.tsx) | 5, 7 | Page title `Privacy Policy — Hubviously`; description "How Hubviously collects…" | |
| [app/terms/page.tsx](../../app/terms/page.tsx) | 5, 7 | Page title `Terms of Service — Hubviously`; description "…use of the Hubviously service…" | |
| [app/cookies/page.tsx](../../app/cookies/page.tsx) | 5 | Page title `Cookie Policy — Hubviously` | |
| [app/mentions-legales/page.tsx](../../app/mentions-legales/page.tsx) | 5 | Page title `Mentions Légales — Hubviously` | |
| [app/getting-started/page.tsx](../../app/getting-started/page.tsx) | 6 | Description "…getting value from Hubviously" | |
| [app/getting-started/page.tsx](../../app/getting-started/page.tsx) | 25 | Body copy "…Hubviously never modifies your portal" | |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 7 (`homeHtml`) ×3 | cols 473 (hero sub-copy), 1529 (hero image `alt="Hubviously Explorer…"`), 25129 (features copy "Hubviously holds up at 1,000+ workflows…") | |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 11 (`privacyHtml`) ×4 | cols 11936, 11978 ("Use Hubviously. Hubviously is a B2B SaaS platform…"), 41897, 42477 (Stripe/PCI sections) | Termly-generated privacy policy — the source of truth is the **Termly editor**, not this file; regenerate there and re-export |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 15 (`termsHtml`) ×10 | cols 237, 623, 1224, 5112, 8030, 10422, 13157, 13992, 18068, 19180 — the defined term «"Hubviously," "we," "us"» throughout the ToS | Legal defined term; also the trademark clause context in line 17 |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 17 (`mentionsLegalesHtml`) ×3 | cols 2007 («La marque "Hubviously"…»), 2201, 3164 | col 2007 is a **trademark statement** — legal must confirm the "Untanggy" mark is registered/owned by HS Simple before swapping |
| [public/canvas.js](../../public/canvas.js) | 1 | Comment "Hubviously programmatic canvas mockups" | Comment only |
| [public/canvas.js](../../public/canvas.js) | 22 | Rendered mockup text `>Hubviously</span>` | **User-visible** — drawn inside the homepage hero/product mockup |
| [app/globals.css](../../app/globals.css) | 4, 27 | Comments "Hubviously brand tokens…", "Hubviously shared marketing styles" | Comments only |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 1 | Comment "extracted from the original Hubviously design and Termly legal pages" | Comment only |

## 2. Domain in a URL (hubviously.com / app.hubviously.com / hello@hubviously.com)

### 2a. Site domain `hubviously.com`

| File | Line(s) | Occurrence |
|---|---|---|
| [app/layout.tsx](../../app/layout.tsx) | 5 | `const SITE_URL = "https://hubviously.com"` — feeds `metadataBase`, OG url, canonical |
| [app/sitemap.ts](../../app/sitemap.ts) | 3 | `const SITE_URL = "https://hubviously.com"` — all 7 sitemap entries derive from it |
| [public/robots.txt](../../public/robots.txt) | 5 | `Sitemap: https://hubviously.com/sitemap.xml` |
| [app/privacy/page.tsx](../../app/privacy/page.tsx) | 8 | canonical `https://hubviously.com/privacy` |
| [app/terms/page.tsx](../../app/terms/page.tsx) | 8 | canonical `https://hubviously.com/terms` |
| [app/cookies/page.tsx](../../app/cookies/page.tsx) | 7, 8 | description mentions "used on hubviously.com"; canonical `https://hubviously.com/cookies` |
| [app/mentions-legales/page.tsx](../../app/mentions-legales/page.tsx) | 7, 8 | description "…au site hubviously.com"; canonical `https://hubviously.com/mentions-legales` |
| [app/getting-started/page.tsx](../../app/getting-started/page.tsx) | 7 | canonical `https://hubviously.com/getting-started` |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 11 (`privacyHtml`) | `https://hubviously.com` ×2 (cols 10898, 10923) and `https://hubviously.com/cookies` ×6 (cols 47900, 47933, 109743, 109776, 145265, 145298) |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 13 (`cookiesHtml`) | `https://hubviously.com` ×2 (cols 9830, 9855) |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 15 (`termsHtml`) | `https://hubviously.com` ×2 (cols 4563, 4588) |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 17 (`mentionsLegalesHtml`) | plain-text `hubviously.com` ×3 (cols 332, 1047, 1415) |

### 2b. App domain `app.hubviously.com` (sign in / sign up CTAs)

| File | Line(s) | URL | CTA |
|---|---|---|---|
| [app/layout.tsx](../../app/layout.tsx) | 101 | `https://app.hubviously.com/login` | Header "Sign in" |
| [app/layout.tsx](../../app/layout.tsx) | 107 | `https://app.hubviously.com/signup` | Header "Connect free" |
| [app/getting-started/page.tsx](../../app/getting-started/page.tsx) | 23 | `https://app.hubviously.com/signup` | Link text is also the literal domain `app.hubviously.com/signup` (change both href and visible text) |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 7 (`homeHtml`) ×6 | `https://app.hubviously.com/signup` at cols 691 (hero "Connect your portal free"), 13291 ("Two ways to work" CTA), 34047 (Free plan), 37001 (Solo plan "$19"), 38504 (Team plan "$49"), 39210 (bottom CTA) | All signup |

### 2c. Email address `hello@hubviously.com` (domain-tied)

| File | Line(s) | Count |
|---|---|---|
| [app/getting-started/page.tsx](../../app/getting-started/page.tsx) | 56 | 1 (mailto + visible text) |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 9 (`contactHtml`) | 2 (cols 1427, 1498 — mailto + visible) |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 11 (`privacyHtml`) | 12 (cols 14337, 14360, 131744, 131767, 146186, 146209, 205903, 205926, 210174, 210197, 223018, 223041) |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 13 (`cookiesHtml`) | 2 (cols 39855, 39878) |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 15 (`termsHtml`) | 12 (cols 3914, 3937, 5590, 5613, 9004, 9027, 14310, 14333, 18572, 18595, 19373, 19396) |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 17 (`mentionsLegalesHtml`) | 6 (cols 836, 859, 2721, 2744, 4452, 4475) |

The mailbox itself lives on the email provider for hubviously.com — a
`hello@untanggy.com` mailbox must exist (and ideally hubviously.com mail keeps
forwarding) before these strings change.

### 2d. Brand name inside third-party URLs (change requires action in HubSpot, not here)

| File | Line | URL | What it is |
|---|---|---|---|
| [app/_lib/content.ts](../../app/_lib/content.ts) | 7 (`homeHtml`), col 1049 | `https://meetings-eu1.hubspot.com/gbolnot/demo-hubviously` | Hero "Book a demo" CTA — HubSpot Meetings slug contains the brand. Renaming the slug in HubSpot breaks any old link in the wild; decide rename-vs-keep, then update here |
| [app/_lib/content.ts](../../app/_lib/content.ts) | 9 (`contactHtml`), col 997 | `data-src="https://meetings-eu1.hubspot.com/gbolnot/hubviously?embed=true"` | Contact-page embedded meetings widget — same slug situation |

## 3. Identifiers that must NOT change (rename-safe; breaking them breaks functionality)

| Identifier | Value | Where |
|---|---|---|
| HubSpot portal ID | `26886561` | [app/contact/page.tsx:21](../../app/contact/page.tsx) (forms loader `https://js-eu1.hsforms.net/forms/embed/26886561.js`); `data-portal-id` in `contactHtml` ([content.ts:9](../../app/_lib/content.ts)) |
| HubSpot form ID | `17097d5f-8a4c-4102-9623-e661a7e99033` (region `eu1`) | `data-form-id` on `.hs-form-frame` in `contactHtml` ([content.ts:9](../../app/_lib/content.ts)) |
| HubSpot Meetings loader | `https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js` | [app/contact/page.tsx:17](../../app/contact/page.tsx) |
| HubSpot shared-form link | `https://g09sx.share-eu1.hsforms.com/2Fwl9X4pMQQKWI-Zhp-mQMw` | `privacyHtml` ([content.ts:11](../../app/_lib/content.ts)) — DSAR/contact form referenced from the privacy policy |
| Termly consent banner / auto-blocker ID | `5ce27664-3325-4eb9-9f1a-73283d39d002` | [app/layout.tsx:78](../../app/layout.tsx) (`app.termly.io/resource-blocker/…`) |
| Termly DSAR form (privacy + mentions légales) | `b6bc8a56-55bd-489e-be3e-28e33487afb0` | `privacyHtml` ([content.ts:11](../../app/_lib/content.ts)), `mentionsLegalesHtml` ([content.ts:17](../../app/_lib/content.ts)) |
| Termly DSAR form (cookies) | `b6369b9a-2d85-4402-ab04-585a63bfcb25` | `cookiesHtml` ([content.ts:13](../../app/_lib/content.ts)) |
| Company legal identity | HS Simple SASU, SIREN 949 810 444, VAT FR84949810444, 200 Rue de la Croix Nivert, 75015 Paris | `termsHtml`, `mentionsLegalesHtml` — the operating company is unchanged by the product rename |
| Company domain shown in mockup | `hs-simple.com` | [public/canvas.js:23](../../public/canvas.js) |

Repo-internal identifiers containing "hubviously" that are safe to leave (or rename later, independently of launch):
`package.json:2` (`"name": "hubviously-site"`), [.claude/launch.json:5](../../.claude/launch.json) (dev-server config name), `.claude/settings.local.json:4,8` (recorded permission strings — archive), `package-lock.json` (derived from package.json name), GitHub repo name `ElGelei/hubviously-site`, and the local folder name.

## 4. Archive / non-shipped occurrences

| File | Line | Occurrence | Why archive |
|---|---|---|---|
| `.claude/settings.local.json` | 4, 8 | Old permission entries mentioning the path and `curl -sI https://hubviously.com/email/logo-mark.png` | Local tool config, not shipped; the curl entry is historical evidence that the email logo is served from this domain |
| [app/_lib/content.ts:1](../../app/_lib/content.ts) | 1 | File-header comment | Comment |
| [app/globals.css](../../app/globals.css) | 4, 27 | Section comments | Comments |
| [public/canvas.js:1](../../public/canvas.js) | 1 | File-header comment | Comment (line 22 is NOT archive — see §1) |

## 5. Assets

| Asset | Path | Wordmark in image? | Notes |
|---|---|---|---|
| Logo mark | [public/logo-mark.png](../../public/logo-mark.png) (225×224 PNG) | No — pictorial mark only (orange fruit + node-graph cutout), no text | Referenced from layout.tsx:86, 125. Whether the mark itself survives the rename is a brand decision, not a technical one |
| Favicon | [public/favicon.png](../../public/favicon.png) (64×64 PNG) | No — same pictorial mark | Referenced from layout.tsx:28 |
| **Email logo (loaded by the app's transactional emails)** | [public/email/logo-mark.png](../../public/email/logo-mark.png) → served at **`https://hubviously.com/email/logo-mark.png`** | No — same pictorial mark (byte-identical to public/logo-mark.png, 36,198 bytes) | ⚠️ Cross-repo dependency confirmed. Emails already sent will keep pointing at the hubviously.com URL forever — this exact path must remain reachable (redirect or keep serving) after the domain move |
| Hero screenshot | [public/hero-explorer.webp](../../public/hero-explorer.webp) | **YES** — renders the "Hubviously" wordmark top-left, plus demo portal domain `lumenly-hubviously-demo-account-dev-51895284.com` in the app chrome | Must be re-captured from the renamed app. Referenced from `homeHtml` (content.ts:7, col ~1500) with alt text "Hubviously Explorer…" |
| Hero mockup (programmatic) | [public/canvas.js](../../public/canvas.js) | **YES** — draws literal text `Hubviously` (line 22) next to `hs-simple.com` (line 23) | JS-rendered, so a text edit, not a re-capture |
| OG / social image | — | — | **Absent.** layout.tsx:36–37, 43 has a TODO to add `public/og.png` (1200×630); still commented out. Nothing to rename, but if an OG image is created for launch it should be Untanggy-branded from the start |

## 6. Hosting, DNS, redirects, env vars

| Item | Finding |
|---|---|
| Host | Vercel — stated in `mentionsLegalesHtml` ("Le site hubviously.com est hébergé par : Vercel Inc.", content.ts:17 col ~1047). No `.vercel/project.json`, no `vercel.json` in the repo, so the **Vercel project name and attached domains cannot be confirmed from this repo** — check the Vercel dashboard. Likely project `hubviously-site` (matches repo/package name), deploying from github.com/ElGelei/hubviously-site |
| Domains attached | Not recorded in repo. Expected: `hubviously.com` (+ presumably `www`). `app.hubviously.com` belongs to the app deployment, not this project |
| Redirect rules | **None anywhere.** [next.config.ts](../../next.config.ts) is empty (no `redirects()`), no `vercel.json`, no middleware file. The hubviously.com → untanggy.com 301s will have to be added (Vercel domain-level redirect or a `redirects()` config) as part of the cutover — including `/email/logo-mark.png` (see §5) |
| Env vars | **None.** No `.env*` files exist and no code reads `process.env` for the domain — `SITE_URL` is a hard-coded constant duplicated in [app/layout.tsx:5](../../app/layout.tsx) and [app/sitemap.ts:3](../../app/sitemap.ts). Check the Vercel dashboard for project-level env vars anyway (none are consumed by this code) |
| robots.txt | Static file [public/robots.txt](../../public/robots.txt) — sitemap URL hard-coded (§2a) |
| Analytics | **No first-party analytics tag exists** (no GA/gtag, Plausible, PostHog, Segment, etc.). The only tracking-adjacent scripts are Termly consent (layout.tsx:78) and HubSpot Meetings/Forms embeds on /contact — all identifier-based, listed in §3. Nothing analytics-related carries the domain |

## 7. Cross-links (both directions)

### Site → app (all on `app.hubviously.com`, full list in §2b)

- `https://app.hubviously.com/login` — 1 place (header Sign in)
- `https://app.hubviously.com/signup` — 8 places (header, getting-started, 6× homepage)

### Site → other external

- `https://meetings-eu1.hubspot.com/gbolnot/demo-hubviously` (homepage) and `…/gbolnot/hubviously?embed=true` (contact embed) — §2d
- Termly and HubSpot forms endpoints — §3 (keep)
- `mailto:hello@hubviously.com` — 35 places (§2c)

### App / marketplace → this site (URLs this site must keep answering, per the app inventory and this repo's roles)

| Purpose | URL on this domain | Served by |
|---|---|---|
| Transactional-email logo | `https://hubviously.com/email/logo-mark.png` | [public/email/logo-mark.png](../../public/email/logo-mark.png) — **immutable path**, old emails reference it forever |
| Support / docs link | `https://hubviously.com/getting-started` | [app/getting-started/page.tsx](../../app/getting-started/page.tsx) |
| Privacy policy | `https://hubviously.com/privacy` | [app/privacy/page.tsx](../../app/privacy/page.tsx) |
| Terms of service | `https://hubviously.com/terms` | [app/terms/page.tsx](../../app/terms/page.tsx) |
| Cookie policy | `https://hubviously.com/cookies` | [app/cookies/page.tsx](../../app/cookies/page.tsx) — also linked ×6 from inside the privacy policy itself |
| Marketing home / pricing | `https://hubviously.com/` (+ `/#pricing`, `/#features`) | [app/page.tsx](../../app/page.tsx) |
| Contact / demo booking | `https://hubviously.com/contact` | [app/contact/page.tsx](../../app/contact/page.tsx) |

Every one of these needs a 301 from the hubviously.com path to the untanggy.com
equivalent at cutover, and the app + HubSpot marketplace listing must be updated
to the new URLs in the same window (coordinate with the app inventory).

---

## Must never change (summary)

1. **HubSpot portal ID `26886561`**, forms loader URL, **form ID `17097d5f-8a4c-4102-9623-e661a7e99033`**, region `eu1`, Meetings loader URL, and the shared-form link `g09sx.share-eu1.hsforms.com/2Fwl9X4pMQQKWI-Zhp-mQMw`.
2. **Termly IDs**: banner `5ce27664-3325-4eb9-9f1a-73283d39d002`, DSAR forms `b6bc8a56-…` and `b6369b9a-…` (the policy *text* will be regenerated in Termly for the new name, but the account/form IDs stay).
3. **Company legal identity**: HS Simple SASU, SIREN 949 810 444, VAT FR84949810444, the Paris address, and `hs-simple.com` in canvas.js — the company is not being renamed.
4. **`/email/logo-mark.png` as a reachable path on hubviously.com** — transactional emails already delivered point at it; keep serving or 301 it indefinitely.
5. **hubviously.com DNS + redirects themselves** — the old domain must be retained and redirecting, not dropped.
6. Practically frozen (rename optional, decoupled from launch): GitHub repo name, `package.json` name, `.claude/launch.json` config name, and the HubSpot Meetings slugs `gbolnot/hubviously` / `gbolnot/demo-hubviously` (renaming those breaks previously shared booking links; decide separately).

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://untanggy.com";
const SITE_TITLE = "Untanggy — Untangle your HubSpot portal";
const SITE_DESCRIPTION =
  "Map every workflow, property and list in your HubSpot portal into an interactive dependency graph. Spot risks, cascades and hidden connections in seconds.";

// First-touch attribution. Runs inline on every page load, before Termly and
// before hydration. If the utg_attr cookie already exists it is left alone, so
// the first visit wins for 90 days. Otherwise it stores the utm_* params, the
// referrer and the landing path as URL-encoded JSON on .untanggy.com, where
// app.untanggy.com can read it at signup. On any other host (localhost,
// previews) the cookie is written without a domain so the script stays
// testable. Links to the app carry nothing extra: the cookie does the job.
const ATTRIBUTION_SCRIPT = `(function(){try{
var n="utg_attr";
if(document.cookie.split("; ").some(function(c){return c.indexOf(n+"=")===0;}))return;
var q=new URLSearchParams(location.search),d={};
["utm_source","utm_medium","utm_campaign","utm_content","utm_term"].forEach(function(k){d[k]=q.get(k)||"";});
var own=/(^|\.)untanggy\.com$/,r=document.referrer||"";
try{if(r&&own.test(new URL(r).hostname))r="";}catch(e){}
d.referrer=r;
d.landing_path=location.pathname;
d.first_touch_at=new Date().toISOString();
var c=n+"="+encodeURIComponent(JSON.stringify(d))+"; max-age=7776000; path=/; SameSite=Lax; Secure";
if(own.test(location.hostname))c+="; domain=.untanggy.com";
document.cookie=c;
}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Untanggy",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Untanggy",
  authors: [{ name: "Untanggy" }],
  keywords: [
    "HubSpot",
    "workflows",
    "RevOps",
    "HubSpot admin",
    "dependency graph",
    "marketing automation",
  ],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Untanggy",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // og:image / twitter:image tags come from the app/opengraph-image.tsx and
    // app/twitter-image.tsx file conventions (1200×630, generated at build).
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1A1A2E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          id="utg-attribution"
          dangerouslySetInnerHTML={{ __html: ATTRIBUTION_SCRIPT }}
        />
        {/*
          Termly Cookie Consent + auto-blocker. Loaded via next/script with
          strategy="afterInteractive" so it runs after React 19 hydration —
          this avoids the React #418 hydration mismatch we hit with
          beforeInteractive, and the raw blocking <script> in <head> we tried
          afterwards. Because Termly is declared in the root layout (which
          renders before page modules), it executes before the HubSpot
          Meetings and Forms scripts on /contact, so its autoBlocker installs
          its document.cookie / localStorage / fetch / XHR overrides in time
          to intercept HubSpot's tracking cookies.
        */}
        <Script
          id="termly-banner"
          src="https://app.termly.io/resource-blocker/5ce27664-3325-4eb9-9f1a-73283d39d002?autoBlock=on"
          strategy="afterInteractive"
        />
        <header className="nav" id="nav">
          <div className="nav-inner">
            <a href="/" className="brand">
              <span className="brand-mark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-mark.png" alt="Untanggy" />
              </span>
              <span className="brand-word">
                <span className="un">Un</span>
                <span className="tanggy">tanggy</span>
              </span>
            </a>
            <nav className="nav-links">
              <a href="/#features">Features</a>
              <a href="/#how">How it works</a>
              <a href="/#pricing">Pricing</a>
              <a href="/contact">Contact</a>
            </nav>
            <div className="nav-cta">
              <a
                href="https://app.untanggy.com/login"
                className="btn btn-ghost btn-sm"
              >
                Sign in
              </a>
              <a
                href="https://app.untanggy.com/signup"
                className="btn btn-primary btn-sm"
              >
                Connect free
              </a>
            </div>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <a href="/" className="brand" style={{ color: "#fff" }}>
                  <span className="brand-mark">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo-mark.png" alt="Untanggy" />
                  </span>
                  <span className="brand-word">
                    <span className="un">Un</span>
                    <span className="tanggy">tanggy</span>
                  </span>
                </a>
                <p>See how your HubSpot workflows actually connect.</p>
              </div>
              <div className="footer-col">
                <h4>Product</h4>
                <ul>
                  <li><a href="/#features">Features</a></li>
                  <li><a href="/#pricing">Pricing</a></li>
                  <li><a href="/#how">How it works</a></li>
                  <li><a href="/getting-started">Getting started</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <ul>
                  <li><a href="/privacy">Privacy</a></li>
                  <li><a href="/cookies">Cookies</a></li>
                  <li><a href="/terms">Terms</a></li>
                  <li><a href="/security">Security</a></li>
                  <li><a href="/dpa">DPA</a></li>
                  <li><a href="/mentions-legales">Mentions Légales</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bot">
              <span>© 2026 Untanggy. Made for HubSpot admins.</span>
              <span>Not affiliated with HubSpot, Inc.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

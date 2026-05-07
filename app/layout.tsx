import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://hubviously.com";
const SITE_TITLE = "Hubviously — Untangle your HubSpot portal";
const SITE_DESCRIPTION =
  "Map every workflow, property and list in your HubSpot portal into an interactive dependency graph. Spot loops, risks and hidden connections in seconds.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Hubviously",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Hubviously",
  authors: [{ name: "Hubviously" }],
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
    siteName: "Hubviously",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // TODO: add public/og.png (1200×630) and uncomment the images entry below
    // images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hubviously" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // images: ["/og.png"],
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
                <img src="/logo-mark.png" alt="Hubviously" />
              </span>
              <span className="brand-word">
                <span className="hub">Hub</span>
                <span className="viously">viously</span>
              </span>
            </a>
            <nav className="nav-links">
              <a href="/#features">Features</a>
              <a href="/#how">How it works</a>
              <a href="/#pricing">Pricing</a>
              <a href="/contact">Contact</a>
            </nav>
            <div className="nav-cta">
              <a href="https://app.hubviously.com" className="btn btn-ghost btn-sm">
                Sign in
              </a>
              <a href="/#cta" className="btn btn-primary btn-sm">
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
                    <img src="/logo-mark.png" alt="Hubviously" />
                  </span>
                  <span className="brand-word">
                    <span className="hub">Hub</span>
                    <span className="viously">viously</span>
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
                  <li><a href="/mentions-legales">Mentions Légales</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bot">
              <span>© 2026 Hubviously. Made for HubSpot admins.</span>
              <span>Not affiliated with HubSpot, Inc.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

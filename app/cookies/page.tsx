import type { Metadata } from "next";
import { cookiesHtml } from "../_lib/content";

export const metadata: Metadata = {
  title: { absolute: "Cookie Policy — Untanggy" },
  description:
    "Information about cookies and tracking technologies used on untanggy.com and how to manage your preferences.",
  alternates: { canonical: "https://untanggy.com/cookies" },
};

export default function CookiesPage() {
  return (
    <main className="legal-termly">
      <div
        className="legal-termly-inner"
        dangerouslySetInnerHTML={{ __html: cookiesHtml }}
      />
    </main>
  );
}

import type { Metadata } from "next";
import { cookiesHtml } from "../_lib/content";

export const metadata: Metadata = {
  title: "Cookie Policy — Hubviously",
  description:
    "Information about cookies and tracking technologies used on hubviously.com and how to manage your preferences.",
  alternates: { canonical: "https://hubviously.com/cookies" },
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

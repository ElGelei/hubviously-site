import type { Metadata } from "next";
import { mentionsLegalesHtml } from "../_lib/content";

export const metadata: Metadata = {
  title: { absolute: "Mentions Légales — Hubviously" },
  description:
    "Informations légales relatives au site hubviously.com, éditeur HS Simple SASU.",
  alternates: { canonical: "https://hubviously.com/mentions-legales" },
};

export default function MentionsLegalesPage() {
  // lang="fr" overrides the layout's <html lang="en"> for this French
  // page, so screen readers and crawlers treat the content as French
  // (LCEN-required wording).
  return (
    <main className="legal-termly" lang="fr">
      <div
        className="legal-termly-inner"
        dangerouslySetInnerHTML={{ __html: mentionsLegalesHtml }}
      />
    </main>
  );
}

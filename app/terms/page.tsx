import type { Metadata } from "next";
import { termsHtml } from "../_lib/content";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service — Hubviously" },
  description:
    "Terms governing the use of the Hubviously service for HubSpot administrators and RevOps teams.",
  alternates: { canonical: "https://hubviously.com/terms" },
};

export default function TermsPage() {
  return (
    <main className="legal-termly">
      <div
        className="legal-termly-inner"
        dangerouslySetInnerHTML={{ __html: termsHtml }}
      />
    </main>
  );
}

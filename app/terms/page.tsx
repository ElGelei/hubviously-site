import type { Metadata } from "next";
import { termsHtml } from "../_lib/content";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service — Untanggy" },
  description:
    "Terms governing the use of the Untanggy service for HubSpot administrators and RevOps teams.",
  alternates: { canonical: "https://untanggy.com/terms" },
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

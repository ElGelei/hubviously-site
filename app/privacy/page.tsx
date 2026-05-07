import type { Metadata } from "next";
import { privacyHtml } from "../_lib/content";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — Hubviously" },
  description:
    "How Hubviously collects, processes, and protects personal information of HubSpot administrators using our service.",
  alternates: { canonical: "https://hubviously.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-termly">
      <div
        className="legal-termly-inner"
        dangerouslySetInnerHTML={{ __html: privacyHtml }}
      />
    </main>
  );
}

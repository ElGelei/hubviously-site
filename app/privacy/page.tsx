import type { Metadata } from "next";
import { privacyHtml } from "../_lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hubviously collects, uses and protects HubSpot portal metadata. EU storage, GDPR rights, no model training on your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <div dangerouslySetInnerHTML={{ __html: privacyHtml }} />;
}

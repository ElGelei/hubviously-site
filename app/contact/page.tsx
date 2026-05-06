import type { Metadata } from "next";
import Script from "next/script";
import { contactHtml } from "../_lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 15-minute walkthrough of your HubSpot portal, or send us a message. We answer within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: contactHtml }} />
      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://js-eu1.hsforms.net/forms/embed/26886561.js"
        strategy="afterInteractive"
      />
    </>
  );
}

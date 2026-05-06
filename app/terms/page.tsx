import type { Metadata } from "next";
import { termsHtml } from "../_lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The rules for using Hubviously: account, acceptable use, billing, termination and liability.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <div dangerouslySetInnerHTML={{ __html: termsHtml }} />;
}

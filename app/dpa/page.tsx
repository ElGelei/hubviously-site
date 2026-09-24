import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Data Processing Agreement | Untanggy" },
  description:
    "The GDPR article 28 Data Processing Agreement between HS Simple SASU, operator of Untanggy, and its customers.",
  alternates: { canonical: "https://untanggy.com/dpa" },
  // Override the layout's og/twitter titles, which contain an em-dash.
  openGraph: {
    type: "website",
    siteName: "Untanggy",
    title: "Data Processing Agreement | Untanggy",
    url: "https://untanggy.com/dpa",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Processing Agreement | Untanggy",
    images: ["/twitter-image"],
  },
};

export default function DpaPage() {
  return (
    <main className="legal-termly">
      <div className="legal-termly-inner trust">
        <h1>Data Processing Agreement</h1>

        <h2>1. Parties</h2>
        <p>
          This agreement is made under article 28 of the General Data
          Protection Regulation (GDPR) between:
        </p>
        <ul>
          <li>
            HS Simple SASU, SIREN 949810444, 200 rue de la Croix Nivert, 75015
            Paris, France, operator of Untanggy, as processor; and
          </li>
          <li>the customer, as controller.</li>
        </ul>

        <h2>2. Subject matter and duration</h2>
        <p>
          The subject matter of the processing is the Untanggy service. The
          processing lasts for the term of the subscription.
        </p>

        <h2>3. Nature and purpose</h2>
        <p>
          Mapping dependencies between HubSpot workflows and assets on the
          customer&rsquo;s instructions.
        </p>

        <h2>4. Categories of personal data</h2>
        <ul>
          <li>Names and email addresses of the customer&rsquo;s HubSpot users.</li>
          <li>Names and email addresses of the customer&rsquo;s Untanggy users.</li>
          <li>HubSpot contact ids received through the deletion webhook.</li>
        </ul>

        <h2>5. Categories of data subjects</h2>
        <ul>
          <li>
            The customer&rsquo;s employees and contractors who use HubSpot or
            Untanggy.
          </li>
          <li>Contacts, by id only.</li>
        </ul>

        <h2>6. Processor obligations</h2>
        <p>The processor:</p>
        <ul>
          <li>acts only on the customer&rsquo;s documented instructions;</li>
          <li>keeps the personal data confidential;</li>
          <li>
            applies the security measures described in the annex:{" "}
            <a href="/security">Security and data</a>;
          </li>
          <li>
            engages sub-processors only with 30 days&rsquo; notice to the
            customer, who has a right to object;
          </li>
          <li>
            assists the customer with data subject requests and data
            protection impact assessments;
          </li>
          <li>
            notifies the customer of a personal data breach within 72 hours;
          </li>
          <li>deletes customer data within 30 days of termination;</li>
          <li>provides audit information on request.</li>
        </ul>

        <h2>7. International transfers</h2>
        <p>
          Personal data is transferred to the sub-processors listed on{" "}
          <a href="/security">Security and data</a>. Inngest (United States)
          currently receives portal configuration metadata without a data
          processing agreement in place; this transfer is being removed.
        </p>

        <h2>8. Governing law</h2>
        <p>This agreement is governed by French law.</p>

        <p>
          Signed copies on request at{" "}
          <a href="mailto:hello@untanggy.com">hello@untanggy.com</a>.
        </p>

        <p className="trust-updated">Last updated: 24 September 2026</p>
      </div>
    </main>
  );
}

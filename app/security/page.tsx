import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Security and data | Untanggy" },
  description:
    "What Untanggy reads from HubSpot, where it is processed and stored, how it is encrypted and deleted, and which sub-processors we use.",
  alternates: { canonical: "https://untanggy.com/security" },
  // Override the layout's og/twitter titles, which contain an em-dash.
  openGraph: {
    type: "website",
    siteName: "Untanggy",
    title: "Security and data | Untanggy",
    url: "https://untanggy.com/security",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security and data | Untanggy",
    images: ["/twitter-image"],
  },
};

// Source: lib/hubspot-scopes.ts in the app repo (REQUIRED_SCOPE_LIST then
// OPTIONAL_SCOPE_LIST). Keep in sync when scopes change.
const SCOPES: { scope: string; kind: "Required" | "Optional" }[] = [
  { scope: "oauth", kind: "Required" },
  { scope: "automation", kind: "Required" },
  { scope: "forms", kind: "Required" },
  { scope: "crm.lists.read", kind: "Required" },
  { scope: "crm.objects.contacts.read", kind: "Required" },
  { scope: "crm.schemas.contacts.read", kind: "Required" },
  { scope: "crm.schemas.companies.read", kind: "Required" },
  { scope: "crm.schemas.deals.read", kind: "Required" },
  { scope: "automation.sequences.read", kind: "Optional" },
  { scope: "crm.schemas.tickets.read", kind: "Optional" },
  { scope: "crm.objects.leads.read", kind: "Optional" },
  { scope: "crm.schemas.custom.read", kind: "Optional" },
  { scope: "crm.objects.users.read", kind: "Optional" },
  { scope: "settings.users.teams.read", kind: "Optional" },
  { scope: "crm.schemas.line_items.read", kind: "Optional" },
  { scope: "crm.schemas.quotes.read", kind: "Optional" },
  { scope: "content", kind: "Optional" },
  { scope: "crm.schemas.projects.read", kind: "Optional" },
  { scope: "crm.schemas.appointments.read", kind: "Optional" },
  { scope: "crm.objects.goals.read", kind: "Optional" },
  { scope: "crm.objects.feedback_submissions.read", kind: "Optional" },
];

const SUBPROCESSORS = [
  { name: "Supabase", purpose: "Database and authentication", data: "All customer data", location: "EU (Ireland)" },
  { name: "Vercel", purpose: "Hosting and application functions", data: "All customer data in transit", location: "EU (Dublin) for functions" },
  { name: "Inngest", purpose: "Job orchestration", data: "Sync execution state as described in section 2, kept 24 hours", location: "United States" },
  { name: "Resend", purpose: "Transactional email", data: "Account email addresses", location: "EU" },
  { name: "Stripe", purpose: "Billing", data: "Billing contact and payment data, no HubSpot data", location: "Ireland and United States" },
  { name: "Cloudflare Turnstile", purpose: "Bot protection on sign-in", data: "Browser signals, no HubSpot data", location: "Global" },
  { name: "Google", purpose: "Optional sign-in with Google", data: "Account email and name", location: "Global" },
  { name: "OVHcloud", purpose: "Support mailbox (hello@untanggy.com)", data: "Correspondence", location: "France" },
];

export default function SecurityPage() {
  return (
    <main className="legal-termly">
      <div className="legal-termly-inner trust">
        <h1>Security and data</h1>

        <h2>1. What we read</h2>
        <p>
          We read workflow definitions, property definitions, and the names of
          lists, forms, marketing emails, sequences, teams, pipeline stages and
          custom object types. We also read the names and email addresses of
          the HubSpot users in the portal, to show who created or edited a
          workflow.
        </p>
        <p>
          Access is read-only OAuth, with 21 scopes, listed in the table below.
        </p>
        <p>
          HubSpot offers no read-only version of the automation, forms and
          content scopes, so they technically allow writing. Untanggy never
          writes to a connected portal: the only non-read calls it makes are
          the OAuth token exchange, refresh, introspection and revocation on
          disconnect.
        </p>
        <div className="trust-table-wrap">
          <table className="trust-table">
            <thead>
              <tr>
                <th>Scope</th>
                <th>Required or optional</th>
              </tr>
            </thead>
            <tbody>
              {SCOPES.map((s) => (
                <tr key={s.scope}>
                  <td><code>{s.scope}</code></td>
                  <td>{s.kind}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          We never read contact, company, deal or ticket records. The only
          record-level event we receive is HubSpot&rsquo;s contact deletion
          webhook, which carries a contact id; we acknowledge and log it.
        </p>
        <p>
          The crm.objects.contacts.read scope is required by HubSpot to
          subscribe to that webhook. We make no other use of it and store no
          contact record.
        </p>

        <h2>2. Where data is processed and stored</h2>
        <ul>
          <li>Database: Supabase (PostgreSQL), AWS eu-west-1, Ireland.</li>
          <li>Application functions: Vercel, region dub1, Dublin, Ireland.</li>
          <li>
            Job orchestration: Inngest, United States (SOC 2 Type II). Inngest
            runs our sync jobs and stores their execution state for 24 hours.
            Today that state includes portal configuration metadata (workflow,
            property, list and team names, and the names and email addresses
            of HubSpot users). We are changing our sync jobs so that Inngest
            only handles identifiers and no personal data; this page will be
            updated when that ships. Until then, no data processing agreement
            covers this transfer.
          </li>
        </ul>

        <h2>3. Encryption</h2>
        <p>
          HubSpot tokens are encrypted at rest (AES-256). All traffic uses TLS.
          The database is encrypted at rest by Supabase.
        </p>

        <h2>4. Deletion</h2>
        <p>
          Disconnecting a portal revokes our HubSpot token and deletes all
          synced data for that portal immediately, with a timestamped log entry
          (who, when, revocation result). Revoking our access does not
          uninstall the app from HubSpot; a HubSpot admin can do that in
          Connected Apps.
        </p>
        <p>
          Deleting an account does the same for every portal, then deletes the
          account.
        </p>
        <p>
          We do not keep database backups beyond the live database. Data held
          by sub-processors after deletion (billing records at Stripe,
          delivered emails at Resend, application logs at Vercel and Supabase,
          sync state at Inngest for 24 hours) expires under each
          provider&rsquo;s retention period.
        </p>

        <h2>5. Retention</h2>
        <p>
          Portal data is kept only while the portal is connected. We keep sync
          timestamps per organisation for rate limiting; they contain no portal
          content.
        </p>
        <p>
          Application logs may contain the sign-in email of an Untanggy user
          and the name of a connected portal; we are removing these from logs.
        </p>

        <h2>6. Access</h2>
        <p>
          Untanggy is operated by a single founder (HS Simple SASU). No third
          party has human access to customer data.
        </p>
        {/* TODO(operator): delete the paragraph below if MFA is not enabled
            on every administrative account. */}
        <p>
          All administrative accounts are protected by multi-factor
          authentication.
        </p>

        <h2>7. Incidents</h2>
        <p>
          Affected customers are notified without undue delay and within 72
          hours of our becoming aware of a personal data breach.
        </p>
        <p>
          Security contact:{" "}
          <a href="mailto:hello@untanggy.com">hello@untanggy.com</a>.
        </p>

        <h2>8. Sub-processors</h2>
        <div className="trust-table-wrap">
          <table className="trust-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Purpose</th>
                <th>Data touched</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {SUBPROCESSORS.map((p) => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.purpose}</td>
                  <td>{p.data}</td>
                  <td>{p.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          We give 30 days&rsquo; notice before adding a sub-processor.
          Customers can object at{" "}
          <a href="mailto:hello@untanggy.com">hello@untanggy.com</a>.
        </p>

        <h2>9. Data Processing Agreement</h2>
        <p>
          Read our <a href="/dpa">Data Processing Agreement</a>.
        </p>

        <p className="trust-updated">Last updated: 24 September 2026</p>
      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting started",
  description:
    "Connect your HubSpot portal, run your first sync, and explore the dependency map. A five minute guide to getting value from Hubviously.",
  alternates: { canonical: "https://hubviously.com/getting-started" },
};

export default function GettingStartedPage() {
  return (
    <main className="legal-termly">
      <div className="legal-termly-inner">
        <h1>Getting started</h1>
        <p>
          From signup to a full map of your portal in a few minutes. Here is
          everything you need to know.
        </p>

        <h2>1. Connect your portal</h2>
        <p>
          Sign up at{" "}
          <a href="https://app.hubviously.com/signup">app.hubviously.com/signup</a>,
          then click &ldquo;Connect portal&rdquo;. Approve the HubSpot
          permissions when prompted: access is read-only, and Hubviously never
          modifies your portal. Finally, pick the account you want to connect.
        </p>

        <h2>2. Run your first sync</h2>
        <p>
          Click Sync on the portal card. The first sync takes one to a few
          minutes depending on the size of your portal. When it finishes, the
          canvas opens with every workflow, property, list, form and email
          mapped.
        </p>

        <h2>3. Explore the map</h2>
        <p>
          Click any workflow to see what it writes, what reads it, and what
          depends on it. Use filters to focus on the part of the portal you
          care about. Use &ldquo;Open in Explorer&rdquo; to investigate one
          change at a time.
        </p>

        <h2>4. Simulate and report (Pro)</h2>
        <p>
          In Explorer, use the What-if tab to simulate edits before you make
          them. Or click &ldquo;Analyze impact&rdquo; on any workflow in the
          canvas to get a client-ready impact report you can copy straight into
          an email.
        </p>

        <h2>Need help?</h2>
        <p>
          Write to us at{" "}
          <a href="mailto:hello@hubviously.com">hello@hubviously.com</a> and we
          will get you unstuck.
        </p>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support the Work — AI for Good Malaysia",
  description:
    "Fund the public-interest layer of AI in Southeast Asia. We are raising USD 100,000 to put volunteer-built infrastructure on real footing.",
};

const BUDGET_ROWS = [
  {
    item: "Community Lead (1.0 FTE)",
    amount: "$42,000",
    what: "Runs biweekly builder–NGO sessions, scopes projects, manages volunteer pipeline. Currently unfilled — Cleve is doing this on top of running Cleve.ai.",
  },
  {
    item: "Engineer-in-Residence (1.0 FTE)",
    amount: "$38,000",
    what: "Ships the flagship open-source projects: NGO digital-needs registry, SEA-languages translation layer, procurement playbook.",
  },
  {
    item: "Project fund",
    amount: "$15,000",
    what: "Underwrites three flagship public-interest builds per year — design, hosting, contractor top-ups, NGO partner stipends.",
  },
  {
    item: "Operations",
    amount: "$5,000",
    what: "Hosting, domain, legal entity setup, accounting, events.",
  },
];

const WHY_US = [
  {
    label: "Community already exists.",
    text: "20+ active builders. 2 NGO partnerships shipped. 5M+ content views on AI literacy. Live open data API used as a reference by 16-country comparison work.",
  },
  {
    label: "Founder credibility.",
    text: "AI for Good Malaysia is led by Cleve Mufti Athyrashad — CTO of Cleve.ai (100K+ users), Mozilla Fellowship applicant (Track II), speaker at Malaysia's Foreign Affairs Ministry and the IDFR Distinguished Lecture Series, MIT-collaborated AI researcher.",
  },
  {
    label: "Regional position.",
    text: "We are embedded in Southeast Asia's builder networks (Buildclub MY, AI Tinkerers KL, Cursor MY, AI SEA, 500 AI Residency). A grant here funds a node in a working regional ecosystem, not a standalone project.",
  },
  {
    label: "Open by default.",
    text: "Every artifact we ship is MIT-licensed and reusable. Funding us is funding infrastructure that any city in the region inherits, not a private capability.",
  },
];

const WHAT_YOU_GET = [
  {
    title: "Quarterly impact reports",
    body: "Projects shipped, NGOs served, builders activated, content reach. Public, so we cannot hide a bad quarter.",
    accent: "accent-sky",
  },
  {
    title: "Recognition",
    body: "On the site, in the manifesto signatory block, and in every shipped project's README. Or full anonymity — your choice.",
    accent: "accent-clay",
  },
  {
    title: "Direct access to the work",
    body: "Invitations to community sessions, early access to flagship projects, optional input on the project fund's allocation.",
    accent: "accent-olive",
  },
  {
    title: "Co-authored research",
    body: "If your foundation is interested in publishing on AI inequality, public-interest AI infrastructure, or AI adoption in the Global South, we will co-author. Our open data API is the seed of this.",
    accent: "accent-cactus",
  },
];

const NOT_FUNDED = [
  "AI safety research. We respect that work; it is not what we do.",
  "A Malaysian ChatGPT competitor. We do not believe one is needed.",
  "Think-tank policy papers. We ship code and run community.",
  "A “scaling to 10 countries by 2027” plan. We are deliberately starting small and shipping well, designing the work to fork rather than expand by hiring.",
];

export default function FundersPage() {
  return (
    <main>
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-40 pb-16 px-6 border-b-2 border-border">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-8 text-sm font-semibold text-text-primary bg-surface-raised px-5 py-2 rounded-full border-2 border-border"
            style={{ boxShadow: "3px 3px 0px #1a1b1f" }}
          >
            OPEN TO FUNDERS
          </div>
          <h1 className="heading-display text-4xl sm:text-5xl text-text-primary mb-8 max-w-2xl">
            Fund the public-interest layer of AI.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-10">
            Five companies have raised over half a trillion dollars to build
            frontier AI for shareholders. The counterweight — open,
            public-interest, Southeast Asia-rooted — is being built on
            volunteer time and a founder&apos;s savings. We are asking funders
            who believe AI&apos;s benefits should not concentrate to help us
            put it on real footing.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${SITE.email}`} className="btn-pill btn-pill-clay text-base px-8 py-3">
              Email the founder
            </a>
            <a href="/manifesto" className="btn-pill btn-pill-outline text-base px-8 py-3">
              Read the manifesto
            </a>
          </div>
        </div>
      </section>

      {/* ── What we are raising ── */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-text-tertiary uppercase tracking-widest mb-4">
            What we are raising
          </p>
          <p className="text-xl text-text-primary leading-relaxed mb-2">
            We are raising{" "}
            <span className="text-clay font-bold">USD 100,000 over 12 months.</span>
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-12">
            This is roughly the loaded cost of one junior engineer at a frontier
            AI lab. With it, we will catalyze multiples of that in volunteer
            engineering hours and ship public infrastructure that does not
            currently exist.
          </p>

          {/* Budget table */}
          <h2 className="heading-section text-text-primary mb-3">
            Budget breakdown
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Four line items. No surprises.
          </p>

          <div className="space-y-4">
            {BUDGET_ROWS.map((row) => (
              <div
                key={row.item}
                className="card-flat p-6 sm:p-8 grid sm:grid-cols-[140px_1fr] gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold text-clay" style={{ fontFamily: "var(--font-serif)" }}>
                    {row.amount}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-primary mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                    {row.item}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{row.what}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-text-secondary italic mt-6 pl-1">
            Salaries are calibrated to Malaysian senior-engineer market rates,
            roughly 25% of Bay Area equivalents. Every dollar goes roughly four
            times as far here.
          </p>
        </div>
      </section>

      {/* ── Why fund us ── */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">
            Why fund us, not a bigger org
          </h2>
          <p className="text-lg text-text-secondary mb-4 leading-relaxed">
            We are small on purpose. International AI-ethics organizations are
            well-funded and based in San Francisco, Brussels, or London. They
            produce excellent policy work and they do not have builders shipping
            code in Kuala Lumpur. We do.
          </p>
          <div className="card-flat p-8 sm:p-10 mt-8">
            <div className="space-y-5">
              {WHY_US.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-clay flex-shrink-0 font-bold mt-0.5">—</span>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    <span className="text-text-primary font-semibold">{item.label}</span>{" "}
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ── */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">What you get</h2>
          <p className="text-lg text-text-secondary mb-10">Concrete, not ceremonial.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {WHAT_YOU_GET.map((item) => (
              <div key={item.title} className={`card ${item.accent} p-6`}>
                <h4 className="text-base font-semibold text-text-primary mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {item.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What this does NOT fund ── */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">
            What this funding does not do
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            We are direct about this so you can decide if we are the right fit.
          </p>
          <div className="card-flat p-8 sm:p-10">
            <div className="space-y-4">
              {NOT_FUNDED.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-text-tertiary font-bold flex-shrink-0 mt-0.5">✕</span>
                  <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-text-secondary mt-8 pt-6 border-t-2 border-border-subtle">
              If you are looking for any of the above, we will happily refer you
              to organizations doing those things well.
            </p>
          </div>
        </div>
      </section>

      {/* ── Get in touch ── */}
      <section className="section-padding pt-0 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-section text-text-primary mb-4">Get in touch</h2>
          <p className="text-text-secondary mb-2 leading-relaxed">
            Cleve Mufti Athyrashad —{" "}
            <a href={`mailto:${SITE.email}`} className="text-clay hover:text-clay-hover transition-colors font-medium">
              {SITE.email}
            </a>
          </p>
          <p className="text-sm text-text-secondary mb-10 leading-relaxed max-w-lg mx-auto">
            For larger funders or foundations: please mention which program area
            you are inquiring from. We will respond within 48 hours and can send
            a detailed grant proposal, references, financial documentation, and
            registration paperwork on request.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`mailto:${SITE.email}`} className="btn-pill btn-pill-clay text-base px-8 py-3">
              Email Cleve
            </a>
            <a
              href="https://cal.com/mfrashad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-outline text-base px-8 py-3"
            >
              Schedule a 30-min call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support the Work — Youth for Responsible AI",
  description:
    "Fund AI safety and responsible AI content, research experiments, and talks reaching the next generation of decision-makers.",
};

const SCENARIOS = [
  {
    amount: "$10K",
    headline: "Content production becomes consistent.",
    detail: "Weekly video and article output, a proper production pipeline, and a structured editorial calendar covering AI safety, AI risk, and responsible AI.",
  },
  {
    amount: "$25K",
    headline: "The first flagship research experiment ships properly.",
    detail: "Design budget, time for a focused data investigation, and documentation so any researcher can build on the work.",
  },
  {
    amount: "$50K",
    headline: "The initiative scales.",
    detail: "Dedicated content coordination, talks in multiple cities and online events, content program reaches a significantly wider audience, second language track added.",
  },
  {
    amount: "$100K",
    headline: "This becomes infrastructure.",
    detail: "Full-time coordination, open data API expands to 30+ countries, a free AI safety literacy curriculum released for youth educators globally.",
  },
];

const WHY_US = [
  {
    label: "Youth-led and youth-focused.",
    text: "The generation that will live with AI's consequences is almost entirely absent from the conversations about it. We exist to change that — creating content by and for young people on AI safety and responsible AI.",
  },
  {
    label: "A gap no one else is filling.",
    text: "International AI organizations produce good work. They do not produce AI safety content specifically designed for young audiences who are not already in the tech ecosystem. We do.",
  },
  {
    label: "Open by default.",
    text: "Every dataset, tool, and piece of content we produce is free and MIT-licensed. Funding us is funding infrastructure the whole community inherits.",
  },
  {
    label: "Already active.",
    text: "We are not a plan. We are an operating initiative looking to scale. The roadmap page shows what different levels of support make possible.",
  },
];

const WHAT_YOU_GET = [
  {
    title: "Quarterly impact reports",
    body: "Content reach, research experiments shipped, talks given, languages covered. Public, so we cannot hide a bad quarter.",
    accent: "accent-sky",
  },
  {
    title: "Recognition",
    body: "On the site, in the manifesto signatory block, and in every shipped project's README. Or full anonymity — your choice.",
    accent: "accent-clay",
  },
  {
    title: "Direct access to the work",
    body: "Early access to research findings, optional input on the editorial calendar, invitations to speaking events.",
    accent: "accent-olive",
  },
  {
    title: "Co-authored research",
    body: "If your foundation publishes on AI literacy, AI access gaps, or AI adoption, we will co-author. Our open data projects are the seed of this.",
    accent: "accent-cactus",
  },
];

const NOT_FUNDED = [
  "Building production software or apps. We make content, explainers, and research experiments — not applications.",
  "Lobbying or political advocacy. We do science communication and public education, not policy campaigns.",
  "A scaling-to-10-countries-by-2027 headcount plan. We start small, ship well, and design the work to fork rather than expand by hiring.",
];

export default function FundersPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 border-b-2 border-border">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-8 text-sm font-semibold text-text-primary bg-surface-raised px-5 py-2 rounded-full border-2 border-border"
            style={{ boxShadow: "3px 3px 0px #1a1b1f" }}
          >
            OPEN TO FUNDERS
          </div>
          <h1 className="heading-display text-4xl sm:text-5xl text-text-primary mb-8 max-w-2xl">
            Fund AI literacy for the generation that needs it most.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-10">
            Five companies control 71% of the world&apos;s AI compute. The generation
            that will live longest with AI&apos;s consequences has the least access to
            clear, honest explanation of what it does and how to question it. We are
            building that explanation — free, open, and youth-led.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${SITE.email}`} className="btn-pill btn-pill-clay text-base px-8 py-3">
              Email us
            </a>
            <a href="/manifesto" className="btn-pill btn-pill-outline text-base px-8 py-3">
              Read the manifesto
            </a>
          </div>
        </div>
      </section>

      {/* What funding enables */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">What your support enables</h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            Every level of funding has concrete outcomes. These follow directly from what the initiative is already doing.
          </p>

          <div className="space-y-4">
            {SCENARIOS.map((s) => (
              <div
                key={s.amount}
                className="card-flat p-6 sm:p-8 grid sm:grid-cols-[100px_1fr] gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <span
                    className="text-2xl font-bold text-clay"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {s.amount}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-base font-semibold text-text-primary mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {s.headline}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-text-secondary mt-6 pl-1">
            Scenarios are cumulative. Full breakdown:{" "}
            <a href="/roadmap" className="text-clay hover:text-clay-hover font-medium transition-colors">
              read the roadmap
            </a>.
          </p>
        </div>
      </section>

      {/* Why fund us */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">
            Why fund us, not a bigger org
          </h2>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            International AI organizations are well-funded and based in San Francisco, Brussels, or London. They produce good work. They do not produce AI safety content for young audiences outside the tech ecosystem. We do.
          </p>
          <div className="card-flat p-8 sm:p-10">
            <div className="space-y-5">
              {WHY_US.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-clay flex-shrink-0 font-bold mt-0.5">+</span>
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

      {/* What you get */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">What you get</h2>
          <p className="text-lg text-text-secondary mb-10">Specific, not ceremonial.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {WHAT_YOU_GET.map((item) => (
              <div key={item.title} className={`card ${item.accent} p-6`}>
                <h4
                  className="text-base font-semibold text-text-primary mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What this does NOT fund */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">
            What this funding does not cover
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Worth stating directly so you can decide if we are the right fit.
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
              If you are looking for any of the above, we will refer you to organizations doing those things well.
            </p>
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="section-padding pt-0 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-section text-text-primary mb-4">Get in touch</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            <a href={`mailto:${SITE.email}`} className="text-clay hover:text-clay-hover transition-colors">
              {SITE.email}
            </a>
          </p>
          <p className="text-sm text-text-secondary mb-10 leading-relaxed max-w-lg mx-auto">
            For foundations or program officers: mention which area you are inquiring from. We respond within 48 hours and can send a grant proposal, references, and financial documentation on request.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`mailto:${SITE.email}`} className="btn-pill btn-pill-clay text-base px-8 py-3">
              Email us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

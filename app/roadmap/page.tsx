import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Roadmap — Youth for Responsible AI",
  description:
    "What Youth for Responsible AI is today and what becomes possible at each level of support. Scenario model from bootstrapped to infrastructure.",
};

const SCENARIOS = [
  {
    amount: "$10,000",
    headline: "Content production becomes consistent.",
    enables: [
      "Dedicated production time for weekly video and article output on AI safety and responsible AI.",
      "A structured editorial calendar so topics are researched and queued, not improvised.",
      "Proper onboarding for Creators and Researchers so new contributors can publish in week one.",
      "The founding team stops being the only ones doing everything.",
    ],
  },
  {
    amount: "$25,000",
    headline: "The first flagship research experiment ships properly.",
    enables: [
      "Design and development budget for a focused interactive data experiment on an AI issue.",
      "Documentation and open data release so any researcher can build on the work.",
      "One fully documented, citable research experiment per year.",
      "Time for a deeper data investigation beyond what volunteer hours allow.",
    ],
  },
  {
    amount: "$50,000",
    headline: "The initiative scales.",
    enables: [
      "Dedicated content coordination — someone manages the pipeline so contributors can focus on creating.",
      "Talks and workshops in multiple cities and online events globally.",
      "Content program reaches a significantly wider youth audience.",
      "Second language track added based on where the community is strongest.",
    ],
  },
  {
    amount: "$100,000",
    headline: "This becomes infrastructure.",
    enables: [
      "Full-time coordination — the founding team stops doing four jobs at once.",
      "Open data API expands to 30 or more countries.",
      "A free AI safety literacy curriculum, open, designed for youth educators globally.",
      "Other communities can fork the entire model — content structure, research templates, editorial playbook.",
    ],
  },
];

const TODAY_ITEMS = [
  "An active volunteer community publishing AI safety and responsible AI content.",
  "Open data research experiments anyone can use, cite, and build on.",
  "Speaking engagements at universities, policy forums, and community events.",
  "A manifesto, a content library, and a growing contributor base.",
];

export default function RoadmapPage() {
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
            ROADMAP
          </div>
          <h1 className="heading-display text-4xl sm:text-5xl text-text-primary mb-6 max-w-2xl">
            What this initiative is.<br />
            <span className="text-clay">What it can become.</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            This page is honest about where we are and direct about what different levels of support make possible. No projections without a basis. No inflated targets.
          </p>
        </div>
      </section>

      {/* Today */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-text-tertiary uppercase tracking-widest mb-4">
            Today — bootstrapped
          </p>
          <h2 className="heading-section text-text-primary mb-4">
            Everything you see was built in the gaps.
          </h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            Youth for Responsible AI runs on volunteer time. The founding team handles content, research, speaking, and coordination simultaneously. That is the constraint. It is also the proof that the model works before it has resources.
          </p>
          <div className="card-flat p-8 sm:p-10">
            <div className="space-y-4">
              {TODAY_ITEMS.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-clay font-bold flex-shrink-0 mt-0.5">+</span>
                  <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">What support enables</h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            Each level below describes what becomes possible with that level of funding. Read each as an outcome, not a budget line.
          </p>

          <div className="space-y-5">
            {SCENARIOS.map((s) => (
              <div key={s.amount} className="card accent-cactus p-6 sm:p-10">
                <div className="flex flex-wrap items-baseline gap-4 mb-4">
                  <span
                    className="text-4xl font-bold text-clay"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {s.amount}
                  </span>
                  <span
                    className="text-lg font-semibold text-text-primary"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {s.headline}
                  </span>
                </div>
                <div className="space-y-3">
                  {s.enables.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-cactus font-bold flex-shrink-0 mt-0.5 text-sm">→</span>
                      <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Constraint note */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <div className="card-flat p-8 sm:p-10 border-l-4 border-clay">
            <p className="text-sm font-semibold text-text-tertiary uppercase tracking-widest mb-4">
              A note on constraints
            </p>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              These scenarios are cumulative. $25,000 includes everything $10,000 enables. $100,000 includes all of it.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              The initiative is doing useful work now. Funding changes the rate and scale. The mission exists with or without it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA to funders */}
      <section className="section-padding pt-0 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section text-text-primary mb-4">Want to support this?</h2>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl mx-auto">
            The funders page has the full context: what we are raising, why, and what you get in return.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/funders" className="btn-pill btn-pill-clay px-8 py-3 text-base">
              Read the funders page
            </a>
            <a href="/act" className="btn-pill btn-pill-outline px-8 py-3 text-base">
              Contribute instead →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

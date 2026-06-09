import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Collaborate — Youth for Responsible AI",
  description:
    "Partner with Youth for Responsible AI to co-create AI safety and responsible AI content, research experiments, or educational materials.",
};

const WHO_WE_WORK_WITH = [
  "Newsrooms and journalists covering AI, technology, or society who need data, context, or a youth-focused angle.",
  "Educators and universities looking to develop or adapt AI safety and AI literacy curriculum for young audiences.",
  "Research institutions that want a youth community partner for fieldwork, data collection, or audience distribution.",
  "Governments and public-sector teams seeking accessible public education materials on AI policy for non-technical audiences.",
  "NGOs and civil society organizations wanting to understand how AI affects the communities they serve.",
  "Youth organizations and student groups working on responsible technology and digital rights.",
];

const GOOD_COLLABORATIONS = [
  "Co-produce an explainer video series on a specific AI safety topic for your audience.",
  "Adapt our open data on AI adoption into a country- or sector-specific report with your branding.",
  "Bring us in as a youth voice for a global AI literacy or governance project.",
  "Jointly host a public talk, workshop, or seminar on responsible AI for a general audience.",
];

const BAD_FITS = [
  { problem: "\"Build us an AI product\"", why: "We are a content and research initiative, not a software development studio." },
  { problem: "\"Promote our AI tool to your audience\"", why: "We are not a marketing channel. We make independent, honest content." },
  { problem: "\"We need this in two weeks\"", why: "Good collaboration takes time to scope. We do not rush." },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "You tell us what you are trying to do.",
    body: "A brief email or 20-minute call. Tell us your audience, your goal, and what you think we could add.",
  },
  {
    step: "02",
    title: "We scope something concrete together.",
    body: "In writing. We define what a collaboration looks like, what each party contributes, and what success looks like.",
  },
  {
    step: "03",
    title: "We make something and publish it.",
    body: "Content, a dataset, a talk — whatever the scope calls for. Everything produced is open, honest, and attributed.",
  },
];

export default function PartnersPage() {
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
            COLLABORATE WITH US
          </div>
          <h1 className="heading-display text-4xl sm:text-5xl text-text-primary mb-8 max-w-2xl">
            Co-create AI safety content and research.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-10">
            We make AI safety and responsible AI accessible to young audiences
            and general publics. If you are working on something adjacent —
            journalism, education, research, public policy — let&apos;s build it together.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${SITE.email}`} className="btn-pill btn-pill-clay text-base px-8 py-3">
              Tell us about your project
            </a>
            <a href="/why-now" className="btn-pill btn-pill-outline text-base px-8 py-3">
              Read the case
            </a>
          </div>
        </div>
      </section>

      {/* ── Who we work with ── */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">Who we work with</h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            We collaborate with organizations that want to reach young audiences and general publics with honest, accurate content on AI safety and AI risk.
          </p>

          <div className="card-flat p-8 sm:p-10">
            <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-6">
              Good fits
            </p>
            <div className="space-y-4">
              {WHO_WE_WORK_WITH.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-clay font-bold flex-shrink-0 mt-0.5">+</span>
                  <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What good collaborations look like ── */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">
            What good collaborations look like
          </h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            Concrete, scoped, and open. Here are examples we would say yes to.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Yes column */}
            <div className="card accent-olive p-6">
              <p className="text-xs font-semibold text-olive uppercase tracking-wider mb-5">
                We would say yes to
              </p>
              <div className="space-y-4">
                {GOOD_COLLABORATIONS.map((p, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-olive font-bold flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-sm text-text-secondary leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* No column */}
            <div className="card accent-fig p-6">
              <p className="text-xs font-semibold text-fig uppercase tracking-wider mb-5">
                We would say no to
              </p>
              <div className="space-y-4">
                {BAD_FITS.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-fig font-bold flex-shrink-0 mt-0.5">✕</span>
                    <div>
                      <p className="text-sm text-text-primary font-medium leading-snug mb-0.5">
                        {item.problem}
                      </p>
                      <p className="text-xs text-text-secondary leading-relaxed">{item.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">How it works</h2>
          <p className="text-lg text-text-secondary mb-10">Three steps. No surprises.</p>

          <div className="space-y-4">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.step}
                className="card-flat p-6 sm:p-8 grid sm:grid-cols-[64px_1fr] gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <span
                    className="text-3xl font-bold text-clay"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-base font-semibold text-text-primary mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get in touch ── */}
      <section className="section-padding pt-0 pb-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-section text-text-primary mb-4">Get in touch</h2>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            Tell us briefly:
          </p>
          <div className="card-flat p-8 mb-10">
            <div className="space-y-3">
              {[
                "What your organization does and who your audience is.",
                "What you are trying to do and why AI safety or responsible AI is relevant.",
                "What you think a collaboration with us could look like.",
                "Any constraints: timeline, format, budget.",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-clay font-bold flex-shrink-0 w-5 text-sm mt-0.5">
                    {i + 1}.
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${SITE.email}`} className="btn-pill btn-pill-clay text-base px-8 py-3">
              Email us
            </a>
          </div>
          <p className="text-sm text-text-secondary mt-6">
            We respond within a week. If we are not the right fit, we will try to refer you to someone who is.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

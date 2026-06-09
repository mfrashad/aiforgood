import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why This Matters Now — Youth for Responsible AI",
  description:
    "Five companies control 71% of global AI compute. The window to build public understanding of AI — before the decisions are made for us — is narrowing.",
};

const NOW_CARDS = [
  {
    accent: "accent-clay",
    label: "AI compute is owned by five companies",
    body: "Amazon, Google, Meta, Microsoft, and Oracle control 71% of the world's cumulative AI compute, up from 63% eighteen months earlier. Their combined capital expenditure for 2026 exceeds $660 billion. Any community, NGO, or government that needs AI pays rent to this oligopoly.",
    source: "Epoch AI, 2025",
  },
  {
    accent: "accent-sky",
    label: "The US gets 23 times more AI investment than China",
    body: "US private AI investment reached $285.9 billion in 2025. China received $13.3 billion. The Global South received a rounding error. The AI frontier is not a global phenomenon — it is concentrated in a handful of zip codes. Everywhere else is structurally excluded.",
    source: "Stanford HAI 2026 AI Index",
  },
  {
    accent: "accent-olive",
    label: "93% of the world's languages are invisible to AI",
    body: "Only 7% of the world's 7,000 languages appear in published online material. English dominates AI training data at 30%. AI systems built on this data will fail anyone who does not speak English. Not as a bug. As an architectural consequence.",
    source: "Nature, 2025",
  },
  {
    accent: "accent-fig",
    label: "The most powerful AI systems are getting less transparent",
    body: "Stanford HAI's Foundation Model Transparency Index dropped from 58 to 40 in a single year. The most capable AI systems are becoming less auditable as they become more powerful. Power is concentrating. The public's ability to scrutinize it is shrinking.",
    source: "Stanford HAI 2026 AI Index",
  },
];

const NEXT_CARDS = [
  {
    label: "Young people will live with AI the longest — but are absent from the decisions",
    body: "The people who will live longest with the consequences of today's AI choices are almost entirely excluded from making them. AI governance, model development, and infrastructure investment are led overwhelmingly by people over 40 in a handful of wealthy countries. The communities that will inherit AI's consequences are not at the table.",
    source: "",
  },
  {
    label: "AI is used on communities, not by them",
    body: "The AI Now Institute's 2025 report is direct: today's AI is not just being used by us. It is being used on us. Facial recognition systems misidentify Black and Asian faces 10 to 100 times more often than white faces. Automated hiring filters out applicants whose resumes do not match patterns from existing employees. The communities with the least power have the least recourse.",
    source: "AI Now Institute 2025; MIT Sloan",
  },
  {
    label: "The people most affected by AI are the least informed about it",
    body: "The organizations and communities most subject to AI decisions — in hiring, credit, content moderation, and public services — have the least access to plain-language explanation of how those systems work. The gap between AI capability and public understanding is growing faster than the AI itself.",
    source: "",
  },
];

const BUILD_CARDS = [
  {
    accent: "accent-olive",
    label: "Open explanation anyone can use",
    body: "The OECD and the UN both concluded in 2024 that core AI components should be governed as public commons. Open, accessible explanation of AI is part of that commons — it is the mechanism by which people can understand, question, and contest the systems that affect them.",
    source: "OECD.AI 2025; UN 2024",
  },
  {
    accent: "accent-olive",
    label: "A public record of the AI divide",
    body: "Data that does not exist cannot drive policy or public understanding. We build open data experiments because no single source tracks AI adoption, transparency, and impact in a usable format. That data is free. Any researcher, journalist, or NGO can use it.",
    source: "",
  },
  {
    accent: "accent-olive",
    label: "Youth voices in the conversation",
    body: "The technology is moving fast. What is missing is content explaining it — produced by the generation most affected by it, in language their peers can actually understand and act on. That is what this community builds.",
    source: "",
  },
];

const CTA_CARDS = [
  { label: "Get involved", sub: "Create content or run research experiments", href: "/act" },
  { label: "Collaborate with us", sub: "For newsrooms, educators, and researchers", href: "/partners" },
  { label: "Support this work", sub: "For funders and foundations", href: "/funders" },
];

export default function WhyNowPage() {
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
            THE CASE FOR RESPONSIBLE AI
          </div>
          <h1 className="heading-display text-4xl sm:text-5xl text-text-primary mb-6 max-w-2xl">
            AI is concentrating power.{" "}
            <span className="text-clay">The window to counter this is now.</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            All of this is already happening. The data below is from 2024 and 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Now */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">What is happening right now</h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            Four sourced facts on who controls AI and who it serves.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {NOW_CARDS.map((card) => (
              <div key={card.label} className={`card-flat ${card.accent} p-6`}>
                <h3
                  className="text-base font-semibold text-text-primary mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {card.label}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{card.body}</p>
                {card.source && (
                  <p className="text-xs text-text-tertiary font-medium">{card.source}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — What comes next */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">What comes next</h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            These follow directly from the trends above.
          </p>
          <div className="space-y-5">
            {NEXT_CARDS.map((card) => (
              <div key={card.label} className="card accent-clay p-6 sm:p-8">
                <h3
                  className="text-base font-semibold text-text-primary mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {card.label}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">{card.body}</p>
                {card.source && (
                  <p className="text-xs text-text-tertiary font-medium">{card.source}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — What we can still build */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-section text-text-primary mb-3">What we can still build</h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            Each problem above has a direct counter: making AI understandable, documenting the divide, and amplifying youth voices.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {BUILD_CARDS.map((card) => (
              <div key={card.label} className={`card ${card.accent} p-6`}>
                <h3
                  className="text-base font-semibold text-text-primary mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {card.label}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">{card.body}</p>
                {card.source && (
                  <p className="text-xs text-text-tertiary font-medium">{card.source}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA row */}
      <section className="section-padding pt-0 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="divider mb-14" />
          <div className="grid sm:grid-cols-3 gap-5">
            {CTA_CARDS.map((card) => (
              <a
                key={card.label}
                href={card.href}
                className="card-flat p-6 hover:bg-surface transition-colors group"
              >
                <h4
                  className="text-base font-semibold text-text-primary mb-1 group-hover:text-clay transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {card.label} →
                </h4>
                <p className="text-sm text-text-secondary">{card.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

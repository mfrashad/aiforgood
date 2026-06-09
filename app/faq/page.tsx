import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ — Youth for Responsible AI",
  description:
    "Questions about Youth for Responsible AI: what we make, who we are for, how volunteer time works, and why this exists.",
};

const FAQS = [
  {
    q: "Is this just another AI ethics page doing content theater?",
    steel: "The AI safety space is full of accounts that repost headlines, add a take, and change nothing.",
    a: "We measure output in content that reaches people who would not otherwise have access to honest AI explanation — young people especially. We build open data experiments, give talks, and make AI risk legible for audiences outside the tech bubble. Think-tank white papers are not what we produce. Neither is generic tech content. We make AI safety and responsible AI understandable for the people who will eventually make decisions about it.",
  },
  {
    q: "Why focus on youth specifically?",
    a: "Young people will live longest with the consequences of AI decisions being made right now — about who controls AI infrastructure, who it serves, and who is accountable for its harms. They are almost entirely absent from those decisions. We exist because the people with the most at stake should understand what is happening and have a voice in shaping it.",
  },
  {
    q: "Why volunteer time instead of just donating money?",
    a: "A skilled creator or researcher contributing consistent work produces something money alone cannot buy: original content rooted in specific contexts, analysis that speaks to a real audience, and a voice that builds trust over time. Most AI safety initiatives are funded centrally and speak in global generalities. We are specific, consistent, and youth-led.",
  },
  {
    q: "Is this a research organization?",
    a: "Not in the academic sense. We build small research experiments — interactive data visualizations, open datasets, and focused investigations — that make AI issues tangible for general audiences. We are science communicators who use data, not a think tank.",
  },
  {
    q: "How is this different from Big Tech's own AI for Good programs?",
    steel: "Google.org and Microsoft Philanthropies spend hundreds of millions on AI for social good.",
    a: "They produce content and programs that serve their brand and their product narratives. They do not produce AI safety content that critically examines the concentration of AI power or algorithmic bias. We do. We have no product to protect. We say what the evidence shows.",
  },
  {
    q: "Who funds this?",
    a: "Currently self-funded and running on volunteer time. No institutional funding yet. We are transparent about that. We are looking for funders who believe AI safety education and responsible AI literacy should exist for the generation that will inherit AI's consequences. If that is you, read the funders page.",
    links: [{ label: "Funders page", href: "/funders" }],
  },
  {
    q: "Will my volunteer hours make any difference?",
    steel: "Most volunteer programs are not worth your time.",
    a: "It depends on how you use them. If you show up and own something — a content series, a data experiment, a talk — yes. If you sign up and wait to be assigned a task, probably not. We look for people who pick something up and run with it. The /act page has concrete starting points for every time budget.",
    links: [{ label: "See what to do", href: "/act" }],
  },
  {
    q: "Why should I trust that this initiative will still exist in two years?",
    a: "The initiative already exists and has produced things. The risk is not that it disappears. It is that it stays small. The trajectory depends on how many skilled contributors join and stay consistent. The roadmap page is honest about what different levels of support make possible.",
    links: [{ label: "Read the roadmap", href: "/roadmap" }],
  },
];

export default function FaqPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-40 pb-16 px-6 border-b-2 border-border">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-display text-4xl sm:text-5xl text-text-primary mb-6">
            Questions we hear a lot.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Honest answers. No softening.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto space-y-5">
          {FAQS.map((faq, i) => (
            <div key={i} className="card-flat p-6 sm:p-8">
              {faq.steel && (
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-widest mb-3">
                  The objection
                </p>
              )}
              {faq.steel && (
                <p className="text-sm text-text-secondary italic mb-5 border-l-2 border-border-subtle pl-4">
                  {faq.steel}
                </p>
              )}
              <h3
                className="text-lg font-semibold text-text-primary mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {faq.q}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{faq.a}</p>
              {faq.links && (
                <div className="flex flex-wrap gap-3 mt-2">
                  {faq.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-clay hover:text-clay-hover transition-colors"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Graduated engagement CTA */}
      <section className="section-padding pt-0 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="divider mb-14" />
          <h2 className="heading-section text-text-primary mb-4">Still have questions?</h2>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            Email us directly. Response within 48 hours.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/act" className="btn-pill btn-pill-clay px-8 py-3 text-base">
              See what to do right now →
            </a>
            <a href="/volunteer" className="btn-pill btn-pill-outline px-8 py-3 text-base">
              Apply to contribute
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

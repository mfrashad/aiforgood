import Image from "next/image";

const INITIATIVES = [
  {
    id: "content",
    title: "Content & Media",
    badge: "ACTIVE",
    accent: "accent-clay",
    image: "/sprites/initiative-advocacy.png",
    description:
      "Short-form videos, articles, and infographics explaining AI safety and AI risk in plain language — no jargon, no hype. Made by young people, for everyone.",
    cta: { label: "View Content", href: "#advocacy" },
  },
  {
    id: "research",
    title: "Research Experiments",
    badge: "ACTIVE",
    accent: "accent-sky",
    image: "/sprites/initiative-projects.png",
    description:
      "Small, focused experiments that make AI issues tangible — interactive data visualizations and open datasets anyone can explore and cite.",
    cta: { label: "Browse Research", href: "#projects" },
  },
  {
    id: "talks",
    title: "Talks & Speaking",
    badge: "ACTIVE",
    accent: "accent-olive",
    image: "/sprites/initiative-community.png",
    description:
      "Briefings, talks, and panel sessions at universities, conferences, policy forums, and community events on AI safety, AI risk, and responsible AI governance.",
    cta: { label: "Read the Case", href: "/why-now" },
  },
];

export default function InitiativesSection() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-section text-text-primary text-center mb-3">
          What we do
        </h2>
        <p className="text-lg text-text-secondary text-center mb-14 max-w-2xl mx-auto">
          Science communication on AI safety and AI risk: content, research experiments, and talks.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {INITIATIVES.map((item) => (
            <div
              key={item.id}
              className={`card ${item.accent} overflow-hidden flex flex-col`}
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
              <span className={`text-xs font-bold px-3 py-1 rounded-full self-start mb-5 border ${item.badge === "ACTIVE" ? "text-olive border-olive/40 bg-olive/10" : "text-text-tertiary border-border-subtle bg-surface"}`}>
                {item.badge}
              </span>

              <h3
                className="text-xl text-text-primary mb-3"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                {item.title}
              </h3>

              <p className="text-[15px] text-text-secondary leading-relaxed flex-1 mb-6">
                {item.description}
              </p>

              <a
                href={item.cta.href}
                className="text-sm font-medium text-clay hover:text-clay-hover transition-colors"
              >
                {item.cta.label} &rarr;
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

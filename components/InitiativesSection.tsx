import Image from "next/image";

const INITIATIVES = [
  {
    id: "community",
    title: "Community",
    badge: "COMING SOON",
    accent: "accent-olive",
    image: "/sprites/initiative-community.png",
    description:
      "Biweekly sessions connecting builders to NGOs and social impact orgs. Part workshop, part co-working, part open hangout. We form teams, match real needs to builders, and ship projects that matter.",
    cta: { label: "Join as Volunteer Committee", href: "#join" },
  },
  {
    id: "advocacy",
    title: "Advocacy",
    badge: "ACTIVE",
    accent: "accent-clay",
    image: "/sprites/initiative-advocacy.png",
    description:
      "Educational content making AI accessible to everyone. Talks, short-form videos, blogs, and infographics advocating for responsible AI, AI safety, and open-source AI for social good. Content in English and Bahasa Malaysia.",
    cta: { label: "View Content", href: "#advocacy" },
  },
  {
    id: "projects",
    title: "Open Source Projects",
    badge: "ACTIVE",
    accent: "accent-sky",
    image: "/sprites/initiative-projects.png",
    description:
      "A growing collection of open-source projects that use AI for social good. Each project ships reusable components — datasets, APIs, templates — so the next builder inherits, not rebuilds.",
    cta: { label: "Browse Projects", href: "#projects" },
  },
];

export default function InitiativesSection() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-section text-text-primary text-center mb-3">
          Our Initiatives
        </h2>
        <p className="text-lg text-text-secondary text-center mb-14 max-w-2xl mx-auto">
          Three pillars of building AI for social good
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
              <span className="text-xs font-medium text-text-secondary bg-surface/60 px-3 py-1 rounded-full self-start mb-5">
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

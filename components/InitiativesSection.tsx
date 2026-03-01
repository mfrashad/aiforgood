import Image from "next/image";

const INITIATIVES = [
  {
    id: "community",
    title: "Community",
    badge: "COMING SOON",
    badgeColor: "text-amber-glow bg-amber-glow/15",
    description:
      "Biweekly sessions connecting builders to NGOs and social impact orgs. Part workshop, part co-working, part open hangout. We form teams, match real needs to builders, and ship projects that matter.",
    image: "/sprites/initiative-community.png",
    cta: { label: "Join as Volunteer Committee", href: "#join" },
    ctaColor: "text-brand-green hover:text-brand-green/80",
  },
  {
    id: "advocacy",
    title: "Advocacy",
    badge: "ACTIVE",
    badgeColor: "text-brand-green bg-brand-green/15",
    description:
      "Educational content making AI accessible to everyone. Talks, short-form videos, blogs, and infographics advocating for responsible AI, AI safety, and open-source AI for social good. Content in English and Bahasa Malaysia.",
    image: "/sprites/initiative-advocacy.png",
    cta: { label: "View Content", href: "#advocacy" },
    ctaColor: "text-sunset hover:text-sunset/80",
  },
  {
    id: "projects",
    title: "Open Source Projects",
    badge: "ACTIVE",
    badgeColor: "text-brand-green bg-brand-green/15",
    description:
      "A growing collection of open-source projects that use AI for social good. Each project ships reusable components — datasets, APIs, templates — so the next builder inherits, not rebuilds.",
    image: "/sprites/initiative-projects.png",
    cta: { label: "Browse Projects", href: "#projects" },
    ctaColor: "text-[#38bdf8] hover:text-[#38bdf8]/80",
  },
];

export default function InitiativesSection() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-[family-name:var(--font-pixel)] text-xl sm:text-2xl text-amber-glow text-center mb-2">
          Our Initiatives
        </h2>
        <p className="text-base sm:text-lg text-text-dim text-center mb-12">
          Three pillars of building AI for social good
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {INITIATIVES.map((item) => (
            <div
              key={item.id}
              className="bg-earth-brown/30 border-2 border-earth-mid/40 p-6 flex flex-col"
            >
              <span
                className={`font-[family-name:var(--font-pixel)] text-[9px] ${item.badgeColor} px-2 py-0.5 inline-block self-start mb-4`}
              >
                {item.badge}
              </span>

              <div className="flex justify-center mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={140}
                  height={140}
                  className="pixel-render"
                />
              </div>

              <h3 className="font-[family-name:var(--font-pixel)] text-sm sm:text-base text-text-warm mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-text-dim leading-relaxed flex-1 mb-4">
                {item.description}
              </p>

              <a
                href={item.cta.href}
                className={`font-[family-name:var(--font-pixel)] text-[10px] ${item.ctaColor} transition-colors`}
              >
                {item.cta.label} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

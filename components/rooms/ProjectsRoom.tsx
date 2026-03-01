import Image from "next/image";
import { FEATURED_PROJECT, COMMUNITY_PROJECTS, HELPED_NGOS, SITE } from "@/lib/constants";

export default function ProjectsRoom() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Room frame */}
        <div className="room-frame bg-earth-brown/40 p-6 sm:p-10 relative overflow-hidden">
          {/* Torch glows */}
          <div className="absolute -left-4 top-1/3 w-16 h-16 rounded-full bg-amber-glow/25 torch-glow" />
          <div className="absolute -right-4 top-1/4 w-16 h-16 rounded-full bg-amber-glow/25 torch-glow" style={{ animationDelay: "0.6s" }} />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              {/* Bookshelf icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-render shrink-0" style={{ shapeRendering: "crispEdges" }}>
                <rect x="2" y="2" width="28" height="28" fill="#5C3A1E" />
                <rect x="4" y="4" width="6" height="24" fill="#4CAF50" opacity="0.6" />
                <rect x="12" y="4" width="4" height="24" fill="#DAA520" opacity="0.6" />
                <rect x="18" y="4" width="5" height="24" fill="#FF9E6D" opacity="0.6" />
                <rect x="25" y="4" width="3" height="24" fill="#38bdf8" opacity="0.6" />
                <rect x="2" y="14" width="28" height="2" fill="#3D2817" />
              </svg>
              <div>
                <h2 className="font-[family-name:var(--font-pixel)] text-lg sm:text-2xl text-amber-glow">
                  Projects
                </h2>
                <span className="font-[family-name:var(--font-pixel)] text-[9px] text-brand-green bg-brand-green/15 px-2 py-0.5 inline-block mt-1">
                  ACTIVE
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-text-dim mb-8">
              Open-source tools for social impact
            </p>

            {/* Featured project — displayed on a "screen" */}
            <div className="bg-earth-deep/60 border-2 border-earth-mid/50 overflow-hidden mb-6">
              <div className="md:flex">
                {/* Info side */}
                <div className="md:w-1/2 p-6">
                  <div className="font-[family-name:var(--font-pixel)] text-[9px] text-brand-green bg-brand-green/15 px-2 py-0.5 inline-block mb-3">
                    FEATURED
                  </div>
                  <h3 className="font-[family-name:var(--font-pixel)] text-sm sm:text-base text-text-warm mb-3">
                    {FEATURED_PROJECT.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-dim leading-relaxed mb-4">
                    {FEATURED_PROJECT.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {FEATURED_PROJECT.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-earth-mid/30 text-text-dim px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={FEATURED_PROJECT.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-btn text-[9px]! py-2! px-4!"
                    >
                      Live Demo →
                    </a>
                    <a
                      href={FEATURED_PROJECT.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-pixel)] text-[9px] px-4 py-2 border-2 border-earth-mid text-text-dim hover:text-text-warm hover:border-text-dim transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Data viz preview */}
                <div className="md:w-1/2 bg-earth-deep/80 flex items-center justify-center p-6 min-h-[200px]">
                  <div className="text-center">
                    <Image
                      src="/sprites/projects-data.png"
                      alt="Global AI Adoption data visualization"
                      width={240}
                      height={240}
                      className="pixel-render mx-auto mb-3"
                    />
                    <p className="text-[10px] text-text-dim">
                      Each dot = 0.25% of a country&apos;s population
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NGOs We Helped */}
            {HELPED_NGOS.map((ngo) => (
              <div key={ngo.name} className="bg-earth-deep/60 border-2 border-brand-green/30 p-5 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <span className="font-[family-name:var(--font-pixel)] text-[9px] text-brand-green bg-brand-green/15 px-2 py-0.5 inline-block mb-2">
                      {ngo.badge}
                    </span>
                    <h3 className="font-[family-name:var(--font-pixel)] text-sm sm:text-base text-text-warm mb-2">
                      {ngo.name}
                    </h3>
                    <p className="text-sm sm:text-base text-text-dim leading-relaxed mb-3">
                      {ngo.description}
                    </p>
                    <a
                      href={ngo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-pixel)] text-[10px] text-brand-green hover:text-brand-green/80"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Community Open Source Projects */}
            <div className="mb-6">
              <h3 className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs text-text-dim mb-4">
                Local Open Source Projects
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {COMMUNITY_PROJECTS.map((project) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-earth-deep/40 border-2 border-earth-mid/30 p-4 hover:border-earth-mid/60 transition-colors group"
                  >
                    <h4 className="font-[family-name:var(--font-pixel)] text-[11px] sm:text-xs text-text-warm group-hover:text-amber-glow transition-colors mb-1">
                      {project.name}
                    </h4>
                    <p className="text-xs text-text-dim leading-relaxed mb-2">
                      {project.description}
                    </p>
                    <span className="text-[10px] text-text-dim/50">
                      {project.url.replace("https://", "")} →
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-[10px] text-text-dim/50 mt-3 italic">
                Non-affiliated local projects building for social good
              </p>
            </div>

            {/* Submit / Shared Resources */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Your Project Here */}
              <div className="border-2 border-dashed border-earth-mid/40 bg-earth-deep/30 p-6 text-center">
                <div className="font-[family-name:var(--font-pixel)] text-xl text-text-dim/30 mb-2">
                  +
                </div>
                <h4 className="font-[family-name:var(--font-pixel)] text-[11px] sm:text-xs text-text-dim mb-2">
                  Your Project Here
                </h4>
                <p className="text-sm sm:text-base text-text-dim/70 mb-3">
                  Have an open-source AI project for social good? We want to
                  feature it.
                </p>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-pixel)] text-[10px] text-brand-green hover:text-brand-green/80"
                >
                  Submit a Project →
                </a>
              </div>

              {/* Shared Resources */}
              <div className="border-2 border-dashed border-earth-mid/40 bg-earth-deep/30 p-6 text-center">
                <div className="font-[family-name:var(--font-pixel)] text-xl text-text-dim/30 mb-2">
                  +
                </div>
                <h4 className="font-[family-name:var(--font-pixel)] text-[11px] sm:text-xs text-text-dim mb-2">
                  Shared Resources
                </h4>
                <p className="text-sm sm:text-base text-text-dim/70 mb-3">
                  Reusable datasets, APIs, and templates from community
                  projects. Coming soon.
                </p>
                <span className="font-[family-name:var(--font-pixel)] text-[10px] text-text-dim/50">
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

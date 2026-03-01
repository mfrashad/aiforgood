import { FEATURED_PROJECT, SITE } from "@/lib/constants";

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
                <h2 className="font-[family-name:var(--font-pixel)] text-sm sm:text-base text-amber-glow">
                  Projects
                </h2>
                <span className="font-[family-name:var(--font-pixel)] text-[7px] text-brand-green bg-brand-green/15 px-2 py-0.5 inline-block mt-1">
                  ACTIVE
                </span>
              </div>
            </div>

            <p className="font-[family-name:var(--font-silk)] text-sm text-text-dim mb-8">
              Open-source tools for social impact
            </p>

            {/* Featured project — displayed on a "screen" */}
            <div className="bg-earth-deep/60 border-2 border-earth-mid/50 overflow-hidden mb-6">
              <div className="md:flex">
                {/* Info side */}
                <div className="md:w-1/2 p-6">
                  <div className="font-[family-name:var(--font-pixel)] text-[7px] text-brand-green bg-brand-green/15 px-2 py-0.5 inline-block mb-3">
                    FEATURED
                  </div>
                  <h3 className="font-[family-name:var(--font-pixel)] text-[11px] text-text-warm mb-3">
                    {FEATURED_PROJECT.title}
                  </h3>
                  <p className="font-[family-name:var(--font-silk)] text-xs text-text-dim leading-relaxed mb-4">
                    {FEATURED_PROJECT.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {FEATURED_PROJECT.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-[family-name:var(--font-silk)] text-[10px] bg-earth-mid/30 text-text-dim px-2 py-0.5"
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
                      className="pixel-btn text-[8px]! py-2! px-4!"
                    >
                      Live Demo →
                    </a>
                    <a
                      href={FEATURED_PROJECT.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-pixel)] text-[8px] px-4 py-2 border-2 border-earth-mid text-text-dim hover:text-text-warm hover:border-text-dim transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Data viz preview */}
                <div className="md:w-1/2 bg-earth-deep/80 flex items-center justify-center p-6 min-h-[200px]">
                  <div className="text-center">
                    {/* Mini data grid */}
                    <div className="grid grid-cols-10 gap-[3px] max-w-[160px] mx-auto mb-3">
                      {Array.from({ length: 100 }).map((_, i) => {
                        const colors = ["#4CAF50", "#DAA520", "#38bdf8", "#5C3A1E"];
                        const color =
                          i < 5
                            ? colors[2]
                            : i < 20
                              ? colors[1]
                              : i < 40
                                ? colors[0]
                                : colors[3];
                        return (
                          <div
                            key={i}
                            className="aspect-square rounded-[1px]"
                            style={{
                              background: color,
                              opacity: 0.7,
                            }}
                          />
                        );
                      })}
                    </div>
                    <p className="font-[family-name:var(--font-silk)] text-[10px] text-text-dim">
                      Each dot = 0.25% of a country&apos;s population
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Future projects */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Your Project Here */}
              <div className="border-2 border-dashed border-earth-mid/40 bg-earth-deep/30 p-6 text-center">
                <div className="font-[family-name:var(--font-pixel)] text-xl text-text-dim/30 mb-2">
                  +
                </div>
                <h4 className="font-[family-name:var(--font-pixel)] text-[9px] text-text-dim mb-2">
                  Your Project Here
                </h4>
                <p className="font-[family-name:var(--font-silk)] text-[11px] text-text-dim/70 mb-3">
                  Have an open-source AI project for social good? We want to
                  feature it.
                </p>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-pixel)] text-[8px] text-brand-green hover:text-brand-green/80"
                >
                  Submit a Project →
                </a>
              </div>

              {/* Shared Resources */}
              <div className="border-2 border-dashed border-earth-mid/40 bg-earth-deep/30 p-6 text-center">
                <div className="font-[family-name:var(--font-pixel)] text-xl text-text-dim/30 mb-2">
                  +
                </div>
                <h4 className="font-[family-name:var(--font-pixel)] text-[9px] text-text-dim mb-2">
                  Shared Resources
                </h4>
                <p className="font-[family-name:var(--font-silk)] text-[11px] text-text-dim/70 mb-3">
                  Reusable datasets, APIs, and templates from community
                  projects. Coming soon.
                </p>
                <span className="font-[family-name:var(--font-pixel)] text-[8px] text-text-dim/50">
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

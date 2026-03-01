import { CONTENT_TYPES, TALKS_DESCRIPTION, SITE } from "@/lib/constants";

export default function AdvocacyRoom() {
  return (
    <section id="advocacy" className="py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Room frame */}
        <div className="room-frame bg-earth-brown/40 p-6 sm:p-10 relative overflow-hidden">
          {/* Torch glows */}
          <div className="absolute -left-4 top-1/4 w-20 h-20 rounded-full bg-amber-glow/20 torch-glow" />
          <div className="absolute -right-4 bottom-1/4 w-20 h-20 rounded-full bg-amber-glow/20 torch-glow" style={{ animationDelay: "0.7s" }} />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              {/* Cinema screen icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-render shrink-0" style={{ shapeRendering: "crispEdges" }}>
                <rect x="2" y="6" width="28" height="20" fill="#3D2817" />
                <rect x="4" y="8" width="24" height="16" fill="#1A0F0A" />
                <rect x="6" y="10" width="20" height="12" fill="#DAA520" opacity="0.3" />
                <rect x="12" y="14" width="8" height="4" fill="#F5E6D3" opacity="0.5" />
              </svg>
              <div>
                <h2 className="font-[family-name:var(--font-pixel)] text-sm sm:text-base text-amber-glow">
                  Advocacy
                </h2>
                <span className="font-[family-name:var(--font-pixel)] text-[7px] text-brand-green bg-brand-green/15 px-2 py-0.5 inline-block mt-1">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Cinema seats decoration */}
            <div className="flex justify-center gap-1 mb-8 opacity-40">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="relative">
                  <svg width="20" height="16" viewBox="0 0 20 16" className="pixel-render" style={{ shapeRendering: "crispEdges" }}>
                    <rect x="2" y="6" width="16" height="10" rx="2" fill="#8B5E3C" />
                    <rect x="4" y="4" width="12" height="4" rx="1" fill="#6B3A1F" />
                  </svg>
                  {/* Ant silhouette in some seats */}
                  {(i === 2 || i === 5 || i === 6) && (
                    <svg width="8" height="8" viewBox="0 0 8 8" className="absolute -top-2 left-1.5 pixel-render" style={{ shapeRendering: "crispEdges" }}>
                      <circle cx="4" cy="3" r="2.5" fill="#1A0F0A" />
                      <rect x="2" y="5" width="4" height="3" fill="#1A0F0A" />
                    </svg>
                  )}
                  {/* Popcorn ant */}
                  {i === 3 && (
                    <svg width="12" height="12" viewBox="0 0 12 12" className="absolute -top-3 left-1 pixel-render" style={{ shapeRendering: "crispEdges", animation: "popcorn-bounce 2s ease-in-out infinite" }}>
                      <circle cx="6" cy="4" r="2.5" fill="#1A0F0A" />
                      <rect x="3" y="6" width="5" height="3" fill="#1A0F0A" />
                      <rect x="9" y="2" width="3" height="4" fill="#DAA520" opacity="0.8" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            {/* Content type "posters" */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {CONTENT_TYPES.map((ct) => (
                <div
                  key={ct.id}
                  className="bg-earth-deep/60 border-2 border-earth-mid/50 p-4 relative"
                >
                  {/* Film strip holes on sides */}
                  <div className="absolute top-0 left-0 w-2 h-full flex flex-col justify-evenly">
                    {[1, 2, 3, 4].map((h) => (
                      <div key={h} className="w-2 h-2 bg-earth-deep" />
                    ))}
                  </div>
                  <div className="pl-3">
                    <div className="font-[family-name:var(--font-pixel)] text-[7px] text-sunset mb-2">
                      {ct.badge}
                    </div>
                    <h4 className="font-[family-name:var(--font-pixel)] text-[9px] text-text-warm mb-2">
                      {ct.title}
                    </h4>
                    <p className="font-[family-name:var(--font-silk)] text-xs text-text-dim leading-relaxed">
                      {ct.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Talks section — speaker podium */}
            <div className="bg-earth-deep/40 border-2 border-earth-mid/30 p-5 text-center relative">
              {/* Podium */}
              <div className="flex justify-center mb-3">
                <svg width="48" height="40" viewBox="0 0 48 40" className="pixel-render" style={{ shapeRendering: "crispEdges" }}>
                  {/* Podium */}
                  <rect x="14" y="20" width="20" height="16" fill="#8B6914" />
                  <rect x="12" y="18" width="24" height="4" fill="#A0734A" />
                  <rect x="10" y="36" width="28" height="4" fill="#6B4F10" />
                  {/* Ant speaker */}
                  <circle cx="24" cy="10" r="5" fill="#8B5E3C" />
                  <rect x="20" y="14" width="8" height="6" fill="#8B5E3C" />
                  {/* Eyes */}
                  <rect x="22" y="8" width="2" height="2" fill="#F5E6D3" />
                  <rect x="26" y="8" width="2" height="2" fill="#F5E6D3" />
                  {/* Megaphone */}
                  <rect x="32" y="12" width="8" height="4" fill="#DAA520" />
                  <rect x="28" y="14" width="4" height="2" fill="#DAA520" />
                </svg>
              </div>

              <h3 className="font-[family-name:var(--font-pixel)] text-[10px] text-text-warm mb-3">
                Talks & Speaking
              </h3>
              <p className="font-[family-name:var(--font-silk)] text-xs text-text-dim leading-relaxed mb-3 max-w-2xl mx-auto">
                {TALKS_DESCRIPTION}
              </p>
              <p className="font-[family-name:var(--font-silk)] text-[10px] text-text-dim">
                Invite us to speak —{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-brand-green hover:text-brand-green/80"
                >
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { VISION } from "@/lib/constants";

export default function VisionRoom() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Room frame */}
        <div className="room-frame bg-earth-brown/40 p-6 sm:p-10 relative overflow-hidden">
          {/* Torch glows */}
          <div className="absolute -left-4 top-1/2 w-16 h-16 rounded-full bg-amber-glow/20 torch-glow" />
          <div className="absolute -right-4 top-1/2 w-16 h-16 rounded-full bg-amber-glow/20 torch-glow" style={{ animationDelay: "0.8s" }} />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-render shrink-0" style={{ shapeRendering: "crispEdges" }}>
                <rect x="2" y="4" width="28" height="24" fill="#DAA520" opacity="0.3" />
                <rect x="4" y="6" width="24" height="20" fill="#8B6914" opacity="0.4" />
                <line x1="8" y1="10" x2="24" y2="10" stroke="#F5E6D3" strokeWidth="1" opacity="0.4" />
                <line x1="8" y1="16" x2="20" y2="16" stroke="#F5E6D3" strokeWidth="1" opacity="0.4" />
                <line x1="8" y1="22" x2="22" y2="22" stroke="#F5E6D3" strokeWidth="1" opacity="0.4" />
                <circle cx="14" cy="13" r="2" fill="#FF9E6D" />
                <circle cx="22" cy="19" r="2" fill="#4CAF50" />
              </svg>
              <h2 className="font-[family-name:var(--font-pixel)] text-lg sm:text-2xl text-amber-glow">
                Why This Exists
              </h2>
            </div>

            {/* The Problem */}
            <div className="mb-10">
              <h3 className="font-[family-name:var(--font-pixel)] text-base sm:text-lg text-sunset mb-4">
                The Problem
              </h3>
              {VISION.problem.map((p, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg text-text-dim leading-relaxed mb-3 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* The Vision — stacked rows */}
            <h3 className="font-[family-name:var(--font-pixel)] text-base sm:text-lg text-brand-green mb-6">
              The Vision
            </h3>
            <div className="space-y-6">
              {VISION.vision.map((item, i) => (
                <div
                  key={i}
                  className="bg-earth-deep/50 border-2 border-earth-mid/30 p-5 sm:p-6"
                >
                  <h4 className="font-[family-name:var(--font-pixel)] text-sm sm:text-base text-text-warm mb-2">
                    {item.title}
                  </h4>
                  <p className="text-base sm:text-lg text-text-dim leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

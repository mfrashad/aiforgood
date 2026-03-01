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
              {/* Map icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-render shrink-0" style={{ shapeRendering: "crispEdges" }}>
                <rect x="2" y="4" width="28" height="24" fill="#DAA520" opacity="0.3" />
                <rect x="4" y="6" width="24" height="20" fill="#8B6914" opacity="0.4" />
                {/* Map lines */}
                <line x1="8" y1="10" x2="24" y2="10" stroke="#F5E6D3" strokeWidth="1" opacity="0.4" />
                <line x1="8" y1="16" x2="20" y2="16" stroke="#F5E6D3" strokeWidth="1" opacity="0.4" />
                <line x1="8" y1="22" x2="22" y2="22" stroke="#F5E6D3" strokeWidth="1" opacity="0.4" />
                {/* Pin markers */}
                <circle cx="14" cy="13" r="2" fill="#FF9E6D" />
                <circle cx="22" cy="19" r="2" fill="#4CAF50" />
              </svg>
              <h2 className="font-[family-name:var(--font-pixel)] text-sm sm:text-base text-amber-glow">
                Why This Exists
              </h2>
            </div>

            {/* Pixel map of Southeast Asia */}
            <div className="flex justify-center mb-8">
              <svg width="240" height="120" viewBox="0 0 240 120" className="pixel-render opacity-40" style={{ shapeRendering: "crispEdges" }}>
                {/* Simplified SE Asia landmasses */}
                {/* Thailand/Indochina */}
                <rect x="60" y="10" width="20" height="50" fill="#6B8E23" />
                <rect x="70" y="30" width="15" height="20" fill="#6B8E23" />
                {/* Malaysia peninsula */}
                <rect x="80" y="50" width="10" height="30" fill="#4CAF50" />
                {/* Borneo */}
                <rect x="110" y="50" width="30" height="25" fill="#6B8E23" />
                {/* Sumatra */}
                <rect x="60" y="60" width="15" height="40" fill="#6B8E23" />
                {/* Java */}
                <rect x="85" y="90" width="35" height="8" fill="#6B8E23" />
                {/* Philippines */}
                <rect x="140" y="15" width="8" height="15" fill="#6B8E23" />
                <rect x="145" y="30" width="10" height="20" fill="#6B8E23" />
                {/* Pin on Malaysia */}
                <circle cx="85" cy="60" r="4" fill="#FF9E6D" />
                <rect x="84" y="54" width="2" height="6" fill="#FF9E6D" />
                {/* Pin on another location */}
                <circle cx="125" cy="58" r="3" fill="#DAA520" />
              </svg>
            </div>

            {/* Two-column: Problem & Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* The Problem — as a scroll/inscription */}
              <div className="bg-earth-deep/50 border-2 border-earth-mid/30 p-5">
                <h3 className="font-[family-name:var(--font-pixel)] text-[10px] text-sunset mb-3">
                  The Problem
                </h3>
                {VISION.problem.map((p, i) => (
                  <p
                    key={i}
                    className="font-[family-name:var(--font-silk)] text-xs text-text-dim leading-relaxed mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* The Vision — as a scroll/inscription */}
              <div className="bg-earth-deep/50 border-2 border-earth-mid/30 p-5">
                <h3 className="font-[family-name:var(--font-pixel)] text-[10px] text-brand-green mb-3">
                  The Vision
                </h3>
                {VISION.vision.map((p, i) => (
                  <p
                    key={i}
                    className="font-[family-name:var(--font-silk)] text-xs text-text-dim leading-relaxed mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

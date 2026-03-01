export default function GroundTransition() {
  return (
    <div className="relative w-full" style={{ height: 160 }}>
      {/* Grass to soil gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #8B7355 0%, #5C3A1E 15%, #3D2817 40%, #2A1A10 70%, #1A0F0A 100%)",
        }}
      />

      {/* Soil cross-section details */}
      <svg
        className="absolute inset-0 w-full h-full pixel-render"
        viewBox="0 0 800 160"
        preserveAspectRatio="none"
        style={{ shapeRendering: "crispEdges" }}
      >
        {/* Rocks / pebbles */}
        <rect x="100" y="70" width="12" height="8" rx="2" fill="#5C3A1E" opacity="0.5" />
        <rect x="300" y="90" width="16" height="10" rx="3" fill="#4A2E15" opacity="0.5" />
        <rect x="550" y="80" width="10" height="6" rx="2" fill="#5C3A1E" opacity="0.4" />
        <rect x="700" y="100" width="14" height="8" rx="2" fill="#4A2E15" opacity="0.5" />
        <rect x="150" y="110" width="8" height="6" rx="1" fill="#5C3A1E" opacity="0.3" />

        {/* Small tunnel entrances / ant paths */}
        <circle cx="250" cy="100" r="4" fill="#1A0F0A" opacity="0.6" />
        <circle cx="580" cy="110" r="3" fill="#1A0F0A" opacity="0.5" />

        {/* Worm / grub */}
        <rect x="400" y="105" width="8" height="3" rx="1" fill="#DAA520" opacity="0.3" />

        {/* Soil layers texture */}
        <line x1="0" y1="40" x2="800" y2="42" stroke="#5C3A1E" strokeWidth="1" opacity="0.3" />
        <line x1="0" y1="80" x2="800" y2="78" stroke="#3D2817" strokeWidth="1" opacity="0.2" />
        <line x1="0" y1="120" x2="800" y2="122" stroke="#2A1A10" strokeWidth="1" opacity="0.2" />
      </svg>

      {/* Small ants entering tunnels */}
      <div className="absolute" style={{ left: "31%", top: "60%", opacity: 0.6 }}>
        <svg width="12" height="9" viewBox="0 0 32 24" className="pixel-render" style={{ shapeRendering: "crispEdges" }}>
          <rect x="10" y="8" width="12" height="8" fill="#8B5E3C" />
          <rect x="22" y="6" width="8" height="8" fill="#6B3A1F" />
          <rect x="2" y="6" width="10" height="10" fill="#8B5E3C" />
        </svg>
      </div>
      <div className="absolute" style={{ left: "72%", top: "65%", opacity: 0.5, transform: "scaleX(-1)" }}>
        <svg width="10" height="7" viewBox="0 0 32 24" className="pixel-render" style={{ shapeRendering: "crispEdges" }}>
          <rect x="10" y="8" width="12" height="8" fill="#8B5E3C" />
          <rect x="22" y="6" width="8" height="8" fill="#6B3A1F" />
          <rect x="2" y="6" width="10" height="10" fill="#8B5E3C" />
        </svg>
      </div>
    </div>
  );
}

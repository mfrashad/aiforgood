"use client";

import AntWalkingGroup from "./AntWalkingGroup";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FF8C5A 0%, #FFB088 25%, #FFD4A8 45%, #FFECCC 60%, #E8F0E0 75%, #6B8E23 85%, #4A6B18 95%, #3D5A14 100%)",
        }}
      />

      {/* Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cloud 1 */}
        <svg
          className="absolute pixel-render"
          style={{ top: "8%", left: "10%", opacity: 0.7 }}
          width="120"
          height="40"
          viewBox="0 0 30 10"
        >
          <rect x="4" y="4" width="22" height="6" fill="#FFF5EB" />
          <rect x="6" y="2" width="8" height="2" fill="#FFF5EB" />
          <rect x="16" y="2" width="6" height="2" fill="#FFF5EB" />
          <rect x="8" y="0" width="4" height="2" fill="#FFF5EB" />
        </svg>

        {/* Cloud 2 */}
        <svg
          className="absolute pixel-render"
          style={{ top: "12%", right: "15%", opacity: 0.5 }}
          width="100"
          height="36"
          viewBox="0 0 25 9"
        >
          <rect x="2" y="4" width="20" height="5" fill="#FFF5EB" />
          <rect x="4" y="2" width="6" height="2" fill="#FFF5EB" />
          <rect x="14" y="2" width="4" height="2" fill="#FFF5EB" />
        </svg>

        {/* Cloud 3 */}
        <svg
          className="absolute pixel-render"
          style={{ top: "18%", left: "55%", opacity: 0.4 }}
          width="80"
          height="28"
          viewBox="0 0 20 7"
        >
          <rect x="2" y="3" width="16" height="4" fill="#FFF5EB" />
          <rect x="4" y="1" width="8" height="2" fill="#FFF5EB" />
        </svg>
      </div>

      {/* KLCC Skyline — pixel art silhouettes */}
      <div className="absolute bottom-[25%] left-0 w-full pointer-events-none">
        <svg
          className="w-full pixel-render"
          viewBox="0 0 800 200"
          preserveAspectRatio="xMidYMax meet"
          style={{ shapeRendering: "crispEdges" }}
        >
          {/* KL Tower */}
          <rect x="180" y="40" width="8" height="120" fill="#8B6914" opacity="0.6" />
          <rect x="174" y="30" width="20" height="16" fill="#8B6914" opacity="0.6" />
          <rect x="178" y="10" width="12" height="24" fill="#8B6914" opacity="0.6" />
          <rect x="182" y="0" width="4" height="14" fill="#8B6914" opacity="0.6" />

          {/* Twin Tower Left */}
          <rect x="340" y="20" width="30" height="140" fill="#A0734A" opacity="0.5" />
          <rect x="336" y="16" width="8" height="8" fill="#A0734A" opacity="0.5" />
          <rect x="366" y="16" width="8" height="8" fill="#A0734A" opacity="0.5" />
          <rect x="338" y="0" width="4" height="20" fill="#A0734A" opacity="0.5" />

          {/* Twin Tower Right */}
          <rect x="380" y="20" width="30" height="140" fill="#A0734A" opacity="0.5" />
          <rect x="376" y="16" width="8" height="8" fill="#A0734A" opacity="0.5" />
          <rect x="406" y="16" width="8" height="8" fill="#A0734A" opacity="0.5" />
          <rect x="408" y="0" width="4" height="20" fill="#A0734A" opacity="0.5" />

          {/* Sky bridge between towers */}
          <rect x="370" y="60" width="10" height="8" fill="#A0734A" opacity="0.5" />

          {/* Other buildings */}
          <rect x="100" y="100" width="24" height="60" fill="#6B4F10" opacity="0.4" />
          <rect x="130" y="80" width="20" height="80" fill="#6B4F10" opacity="0.35" />
          <rect x="460" y="90" width="28" height="70" fill="#6B4F10" opacity="0.4" />
          <rect x="500" y="70" width="22" height="90" fill="#6B4F10" opacity="0.35" />
          <rect x="540" y="110" width="18" height="50" fill="#6B4F10" opacity="0.3" />
          <rect x="260" y="100" width="20" height="60" fill="#6B4F10" opacity="0.35" />
          <rect x="600" y="95" width="26" height="65" fill="#6B4F10" opacity="0.3" />
          <rect x="640" y="120" width="16" height="40" fill="#6B4F10" opacity="0.25" />

          {/* Tropical trees */}
          {/* Tree 1 */}
          <rect x="70" y="130" width="6" height="30" fill="#5C3A1E" opacity="0.6" />
          <rect x="58" y="110" width="30" height="24" fill="#4A7A1A" opacity="0.6" rx="4" />
          <rect x="62" y="100" width="22" height="14" fill="#5B8E1F" opacity="0.6" rx="4" />

          {/* Tree 2 */}
          <rect x="680" y="125" width="6" height="35" fill="#5C3A1E" opacity="0.6" />
          <rect x="666" y="105" width="34" height="24" fill="#4A7A1A" opacity="0.6" rx="4" />
          <rect x="672" y="95" width="22" height="14" fill="#5B8E1F" opacity="0.6" rx="4" />

          {/* Palm tree */}
          <rect x="740" y="120" width="4" height="40" fill="#5C3A1E" opacity="0.5" />
          <rect x="728" y="108" width="28" height="16" fill="#6B8E23" opacity="0.5" rx="6" />
        </svg>
      </div>

      {/* Ground / Grass layer */}
      <div className="absolute bottom-[12%] left-0 w-full">
        <svg
          className="w-full pixel-render"
          viewBox="0 0 800 60"
          preserveAspectRatio="xMidYMax slice"
          style={{ shapeRendering: "crispEdges" }}
        >
          {/* Grass tufts */}
          {Array.from({ length: 40 }).map((_, i) => (
            <rect
              key={i}
              x={i * 20 + Math.sin(i) * 5}
              y={6 + Math.sin(i * 0.7) * 4}
              width={4}
              height={8 + (i % 3) * 4}
              fill={i % 3 === 0 ? "#7BA428" : i % 3 === 1 ? "#6B8E23" : "#5A7A1E"}
              opacity={0.8}
            />
          ))}
          {/* Small flowers */}
          <rect x="120" y="10" width="4" height="4" fill="#FF9E6D" opacity="0.7" />
          <rect x="350" y="8" width="4" height="4" fill="#FFD4A8" opacity="0.7" />
          <rect x="580" y="12" width="4" height="4" fill="#FF7B9C" opacity="0.7" />
        </svg>
      </div>

      {/* Ant mound (center) */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 pointer-events-none">
        <svg
          width="200"
          height="80"
          viewBox="0 0 200 80"
          className="pixel-render"
          style={{ shapeRendering: "crispEdges" }}
        >
          {/* Mound shape */}
          <ellipse cx="100" cy="60" rx="90" ry="30" fill="#5C3A1E" />
          <ellipse cx="100" cy="58" rx="80" ry="25" fill="#6B4F10" />
          <ellipse cx="100" cy="56" rx="60" ry="18" fill="#8B6914" />
          {/* Tunnel entrance (dark hole) */}
          <ellipse cx="100" cy="60" rx="18" ry="14" fill="#1A0F0A" />
          <ellipse cx="100" cy="58" rx="14" ry="10" fill="#0D0705" />
          {/* Dirt specs */}
          <rect x="40" y="50" width="3" height="3" fill="#3D2817" />
          <rect x="150" y="52" width="3" height="3" fill="#3D2817" />
          <rect x="80" y="42" width="2" height="2" fill="#3D2817" />
          <rect x="120" y="44" width="2" height="2" fill="#3D2817" />
        </svg>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Badge */}
        <div className="mb-6 font-[family-name:var(--font-pixel)] text-[8px] sm:text-[9px] text-earth-deep bg-sky-warm/80 px-4 py-2 tracking-wider">
          OPEN SOURCE &middot; COMMUNITY &middot; MALAYSIA
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-pixel)] text-2xl sm:text-4xl md:text-5xl text-earth-deep leading-tight mb-4 drop-shadow-sm">
          AI for Good
        </h1>

        {/* Subtitle */}
        <p className="font-[family-name:var(--font-silk)] text-sm sm:text-base text-earth-brown max-w-lg mb-8">
          Building AI for Social Impact
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-20">
          <a href="#join" className="pixel-btn">
            Become a Volunteer
          </a>
          <a
            href="#projects"
            className="font-[family-name:var(--font-pixel)] text-[10px] px-6 py-3 border-2 border-earth-brown text-earth-brown hover:bg-earth-brown/10 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Walking ants along the ground */}
      <div className="absolute bottom-[14%] left-0 w-full z-10">
        <AntWalkingGroup />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center scroll-indicator">
        <p className="font-[family-name:var(--font-pixel)] text-[8px] text-earth-deep/70 mb-2">
          Enter the Colony
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="mx-auto pixel-render"
          style={{ shapeRendering: "crispEdges" }}
        >
          <rect x="11" y="2" width="2" height="14" fill="#3D2817" />
          <rect x="7" y="12" width="2" height="2" fill="#3D2817" />
          <rect x="9" y="14" width="2" height="2" fill="#3D2817" />
          <rect x="13" y="14" width="2" height="2" fill="#3D2817" />
          <rect x="15" y="12" width="2" height="2" fill="#3D2817" />
          <rect x="11" y="16" width="2" height="2" fill="#3D2817" />
        </svg>
      </div>
    </section>
  );
}

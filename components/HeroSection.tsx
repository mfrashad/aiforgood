"use client";

import AntWalkingGroup from "./AntWalkingGroup";
import BabelTower from "./BabelTower";
import WorkerAnts from "./WorkerAnts";
import ResourcePile from "./ResourcePile";
import { TowerProvider } from "@/contexts/TowerContext";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #7B2D8E 0%, #C2185B 12%, #FF6B6B 25%, #FF8C5A 38%, #FFB088 50%, #FFD4A8 62%, #FFECCC 72%, #E8DFC8 82%, #8B7355 92%, #5C3A1E 100%)",
        }}
      />

      {/* Dithering overlay — subtle pixel art texture */}
      <div
        className="absolute inset-0 pointer-events-none pixel-render"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Crect width='1' height='1' fill='%23000'/%3E%3Crect x='1' y='1' width='1' height='1' fill='%23000'/%3E%3C/svg%3E")`,
          backgroundSize: "4px 4px",
          opacity: 0.04,
        }}
      />

      {/* Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cloud 1 */}
        <svg
          className="absolute pixel-render cloud-drift-1"
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
          className="absolute pixel-render cloud-drift-2"
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
          className="absolute pixel-render cloud-drift-3"
          style={{ top: "18%", left: "55%", opacity: 0.4 }}
          width="80"
          height="28"
          viewBox="0 0 20 7"
        >
          <rect x="2" y="3" width="16" height="4" fill="#FFF5EB" />
          <rect x="4" y="1" width="8" height="2" fill="#FFF5EB" />
        </svg>
      </div>

      {/* KLCC Skyline — pixel art Malaysia */}
      <div
        className="absolute bottom-[18%] left-0 w-full pointer-events-none pixel-render"
        style={{
          height: "100vh",
          backgroundImage: "url(/sprites/malaysia-skyline-new.jpg)",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom center",
          backgroundSize: "auto 100%",
          opacity: 0.7,
        }}
        role="img"
        aria-label="Kuala Lumpur skyline"
      />


      {/* Babel Tower with worker ants (center) */}
      <TowerProvider>
        <div
          className="absolute bottom-[5%] left-1/2 -translate-x-1/2"
          style={{ width: 500, height: 220 }}
        >
          {/* Resource piles — left side */}
          <div className="absolute" style={{ left: 15, bottom: 10 }}>
            <ResourcePile />
          </div>
          <div className="absolute" style={{ left: 60, bottom: 15 }}>
            <ResourcePile />
          </div>
          {/* Resource piles — right side */}
          <div className="absolute" style={{ left: 410, bottom: 10 }}>
            <ResourcePile />
          </div>
          <div className="absolute" style={{ left: 450, bottom: 15 }}>
            <ResourcePile />
          </div>

          <BabelTower />
          <WorkerAnts />
        </div>
      </TowerProvider>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pointer-events-none">
        {/* Badge */}
        <div className="mb-6 font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] text-earth-deep bg-sky-warm/90 px-4 py-2 tracking-wider backdrop-blur-sm">
          OPEN SOURCE &middot; COMMUNITY &middot; MALAYSIA
        </div>

        {/* Title */}
        <h1
          className="font-[family-name:var(--font-pixel)] text-2xl sm:text-4xl md:text-5xl text-white leading-tight mb-4"
          style={{ textShadow: "3px 3px 0 #1A0F0A, -1px -1px 0 #1A0F0A, 1px -1px 0 #1A0F0A, -1px 1px 0 #1A0F0A, 0 0 20px rgba(0,0,0,0.8)" }}
        >
          AI for Good
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg text-white/90 max-w-lg mb-8 font-medium"
          style={{ textShadow: "2px 2px 0 #1A0F0A, 0 0 15px rgba(0,0,0,0.7)" }}
        >
          Building AI for Social Impact
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-20 pointer-events-auto">
          <a href="#join" className="pixel-btn">
            Become a Volunteer
          </a>
          <a
            href="#projects"
            className="font-[family-name:var(--font-pixel)] text-[10px] px-6 py-3 border-2 border-white/80 text-white hover:bg-white/10 transition-colors"
            style={{ textShadow: "1px 1px 0 #1A0F0A" }}
          >
            View Projects
          </a>
        </div>
      </div>


      {/* Walking ants along the ground */}
      <div className="absolute bottom-[3%] left-0 w-full z-10">
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

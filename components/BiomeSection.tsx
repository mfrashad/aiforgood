interface BiomeSectionProps {
  children: React.ReactNode;
  bgImage: string;
  /** Dominant color of this biome (used for ambient glow) */
  glowColor: string;
  /** Background tint that blends with the biome image */
  tintColor: string;
  /** Color to transition FROM at the top */
  transitionFrom: string;
  /** Color to transition TO at the bottom (next biome's tint) */
  transitionTo: string;
  /** Background image opacity */
  bgOpacity?: number;
  /** CSS class for biome color variables (e.g. "biome-swamp") */
  biomeClass?: string;
}

export default function BiomeSection({
  children,
  bgImage,
  glowColor,
  tintColor,
  transitionFrom,
  transitionTo,
  bgOpacity = 0.25,
  biomeClass = "",
}: BiomeSectionProps) {
  return (
    <div className={`relative overflow-hidden underground-theme ${biomeClass}`}>
      {/* Base tint */}
      <div
        className="absolute inset-0"
        style={{ background: tintColor }}
      />

      {/* Biome background image */}
      <div
        className="absolute inset-0 pixel-render"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: bgOpacity,
        }}
      />

      {/* Top transition gradient — fade from previous biome */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{
          height: "200px",
          background: `linear-gradient(180deg, ${transitionFrom} 0%, transparent 100%)`,
        }}
      />

      {/* Bottom transition gradient — fade to next biome */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: "200px",
          background: `linear-gradient(0deg, ${transitionTo} 0%, transparent 100%)`,
        }}
      />

      {/* Ambient center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "80%",
          height: "60%",
          background: `radial-gradient(ellipse, ${glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Cave wall shadows */}
      <div
        className="absolute inset-y-0 left-0 w-12 md:w-24 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, ${tintColor} 0%, transparent 100%)`,
          opacity: 0.8,
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-12 md:w-24 pointer-events-none"
        style={{
          background: `linear-gradient(270deg, ${tintColor} 0%, transparent 100%)`,
          opacity: 0.8,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

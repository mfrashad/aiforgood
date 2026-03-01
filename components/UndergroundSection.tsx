interface UndergroundSectionProps {
  children: React.ReactNode;
}

export default function UndergroundSection({ children }: UndergroundSectionProps) {
  return (
    <div className="relative bg-earth-deep">
      {/* Tunnel background texture */}
      <div className="absolute inset-0 tunnel-bg soil-texture opacity-50 pointer-events-none" />

      {/* Tunnel side walls */}
      <div className="absolute inset-y-0 left-0 w-8 md:w-16 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #3D2817 0%, transparent 100%)",
          opacity: 0.4,
        }}
      />
      <div className="absolute inset-y-0 right-0 w-8 md:w-16 pointer-events-none"
        style={{
          background: "linear-gradient(270deg, #3D2817 0%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

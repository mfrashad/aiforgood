interface UndergroundSectionProps {
  children: React.ReactNode;
}

export default function UndergroundSection({ children }: UndergroundSectionProps) {
  return (
    <div
      className="relative overflow-hidden underground-theme"
      style={{
        background:
          "linear-gradient(180deg, #0D0A1A 0%, #12082A 8%, #0F0D22 20%, #0D0A1A 40%, #0A0818 55%, #0D0A1A 70%, #12082A 85%, #0D0A1A 100%)",
      }}
    >
      {/* Cave ceiling image at top */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none pixel-render"
        style={{
          height: "400px",
          backgroundImage: "url(/sprites/cave-ceiling.jpg)",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "top center",
          backgroundSize: "auto 100%",
          opacity: 0.5,
          maskImage: "linear-gradient(180deg, black 0%, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg, black 0%, black 50%, transparent 100%)",
        }}
      />

      {/* Soil-to-cave transition at top */}
      <div
        className="absolute top-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #5C3A1E 0%, #3D2B5C 15%, transparent 100%)",
        }}
      />

      {/* Cave background image — tiled vertically along the sides */}
      <div
        className="absolute inset-0 pointer-events-none pixel-render"
        style={{
          backgroundImage: "url(/sprites/cave-bg-main.jpg)",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center",
          backgroundSize: "100% auto",
          opacity: 0.15,
        }}
      />

      {/* Tunnel background texture */}
      <div className="absolute inset-0 tunnel-bg soil-texture opacity-20 pointer-events-none" />

      {/* Crystal glow spots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute" style={{ top: "12%", left: "6%", width: 8, height: 8, background: "#2DD4BF", borderRadius: "50%", boxShadow: "0 0 20px 8px rgba(45, 212, 191, 0.15)", opacity: 0.6 }} />
        <div className="absolute" style={{ top: "30%", right: "8%", width: 6, height: 6, background: "#14B8A6", borderRadius: "50%", boxShadow: "0 0 16px 6px rgba(20, 184, 166, 0.12)", opacity: 0.5 }} />
        <div className="absolute" style={{ top: "50%", left: "4%", width: 7, height: 7, background: "#2DD4BF", borderRadius: "50%", boxShadow: "0 0 18px 7px rgba(45, 212, 191, 0.12)", opacity: 0.5 }} />
        <div className="absolute" style={{ top: "70%", right: "5%", width: 8, height: 8, background: "#14B8A6", borderRadius: "50%", boxShadow: "0 0 22px 8px rgba(20, 184, 166, 0.15)", opacity: 0.6 }} />
        <div className="absolute" style={{ top: "88%", left: "9%", width: 5, height: 5, background: "#2DD4BF", borderRadius: "50%", boxShadow: "0 0 14px 5px rgba(45, 212, 191, 0.1)", opacity: 0.4 }} />

        {/* Purple crystal spots */}
        <div className="absolute" style={{ top: "20%", left: "92%", width: 6, height: 6, background: "#8B5CF6", borderRadius: "50%", boxShadow: "0 0 16px 6px rgba(139, 92, 246, 0.12)", opacity: 0.5 }} />
        <div className="absolute" style={{ top: "42%", right: "92%", width: 5, height: 5, background: "#7C3AED", borderRadius: "50%", boxShadow: "0 0 14px 5px rgba(124, 58, 237, 0.1)", opacity: 0.4 }} />
        <div className="absolute" style={{ top: "65%", left: "94%", width: 7, height: 7, background: "#8B5CF6", borderRadius: "50%", boxShadow: "0 0 18px 7px rgba(139, 92, 246, 0.12)", opacity: 0.5 }} />
      </div>

      {/* Ambient glow zones */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(45, 212, 191, 0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(139, 92, 246, 0.03) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "65%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "65%",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(45, 212, 191, 0.035) 0%, transparent 70%)",
        }}
      />

      {/* Cave wall shadows */}
      <div
        className="absolute inset-y-0 left-0 w-16 md:w-28 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #0D0A1A 0%, transparent 100%)",
          opacity: 0.7,
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-16 md:w-28 pointer-events-none"
        style={{
          background: "linear-gradient(270deg, #0D0A1A 0%, transparent 100%)",
          opacity: 0.7,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

import Image from "next/image";

export default function CommunityRoom() {
  return (
    <section id="community" className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Room frame */}
        <div className="room-frame bg-earth-brown/40 p-6 sm:p-10 relative overflow-hidden">
          {/* Torch glow left */}
          <div className="absolute -left-4 top-1/4 w-16 h-16 rounded-full bg-amber-glow/30 torch-glow" />
          {/* Torch glow right */}
          <div className="absolute -right-4 top-1/3 w-16 h-16 rounded-full bg-amber-glow/30 torch-glow" style={{ animationDelay: "0.5s" }} />

          {/* Wooden supports */}
          <div className="absolute top-0 left-6 w-3 h-full bg-earth-mid/50" />
          <div className="absolute top-0 right-6 w-3 h-full bg-earth-mid/50" />
          <div className="absolute top-4 left-0 w-full h-3 bg-earth-mid/40" />

          {/* Content */}
          <div className="relative z-10">
            {/* Header with badge */}
            <div className="flex items-center gap-3 mb-6">
              {/* Pixel workshop icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-render shrink-0" style={{ shapeRendering: "crispEdges" }}>
                <rect x="4" y="4" width="24" height="24" rx="2" fill="#5C3A1E" />
                <rect x="8" y="8" width="16" height="16" fill="#8B6914" />
                <rect x="12" y="12" width="8" height="2" fill="#F5E6D3" />
                <rect x="12" y="16" width="6" height="2" fill="#F5E6D3" />
                <rect x="12" y="20" width="4" height="2" fill="#F5E6D3" />
              </svg>
              <div>
                <h2 className="font-[family-name:var(--font-pixel)] text-lg sm:text-2xl text-amber-glow">
                  Community
                </h2>
                <span className="font-[family-name:var(--font-pixel)] text-[9px] text-amber-glow/70 bg-amber-glow/10 px-2 py-0.5 inline-block mt-1">
                  COMING SOON
                </span>
              </div>
            </div>

            {/* Room illustration */}
            <div className="flex justify-center mb-6">
              <Image
                src="/sprites/community-room.png"
                alt="Ant workshop community room"
                width={700}
                height={394}
                className="pixel-render rounded max-w-full"
              />
            </div>

            <p className="text-base sm:text-lg text-text-warm leading-relaxed mb-4">
              Biweekly sessions connecting builders to NGOs and social impact
              orgs. Part workshop, part co-working, part open hangout. We form
              teams, match real needs to builders, and ship projects that matter.
            </p>

            <a
              href="#join"
              className="inline-block font-[family-name:var(--font-pixel)] text-xs sm:text-sm text-brand-green hover:text-brand-green/80 transition-colors"
            >
              Join as Volunteer Committee →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import AntWalkingGroup from "./AntWalkingGroup";

interface TunnelConnectorProps {
  showAnts?: boolean;
}

const TUNNEL_ANTS = [
  { id: 1, direction: "right" as const, duration: 20, delay: 0, y: 4, size: 18 },
  { id: 2, direction: "left" as const, duration: 24, delay: 6, y: 10, size: 16 },
  { id: 3, direction: "right" as const, duration: 18, delay: 12, y: 2, size: 20 },
];

export default function TunnelConnector({ showAnts = true }: TunnelConnectorProps) {
  return (
    <div className="relative py-4 overflow-hidden">
      {/* Cave tunnel background image */}
      <div
        className="absolute inset-0 pixel-render"
        style={{
          backgroundImage: "url(/sprites/cave-tunnel.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.3,
        }}
      />

      {/* Dark overlay to blend with surroundings */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 20%, #0D0A1A 80%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative px-6">
        {/* Horizontal tunnel line */}
        <div className="h-[2px] bg-earth-mid/30 mx-12" />

        {/* Teal crystal glow at center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-6 h-6 rounded-full torch-glow"
            style={{ background: "rgba(45, 212, 191, 0.2)" }}
          />
        </div>

        {/* Walking ants in tunnel */}
        {showAnts && (
          <div className="mt-2">
            <AntWalkingGroup ants={TUNNEL_ANTS} />
          </div>
        )}
      </div>
    </div>
  );
}

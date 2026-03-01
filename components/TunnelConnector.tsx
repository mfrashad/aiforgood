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
    <div className="relative py-8 px-6 overflow-hidden">
      {/* Tunnel passage */}
      <div className="max-w-4xl mx-auto relative">
        {/* Horizontal tunnel line */}
        <div className="h-[2px] bg-earth-mid/30 mx-12" />

        {/* Small torch at center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 rounded-full bg-amber-glow/15 torch-glow" />
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

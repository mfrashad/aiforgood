"use client";

import { useState, useCallback } from "react";
import PixelAnt from "./PixelAnt";

interface WalkingAntConfig {
  id: number;
  direction: "left" | "right";
  duration: number;
  delay: number;
  y: number;
  size: number;
}

const DEFAULT_ANTS: WalkingAntConfig[] = [
  { id: 1, direction: "right", duration: 18, delay: 0, y: 0, size: 28 },
  { id: 2, direction: "left", duration: 22, delay: 3, y: 8, size: 32 },
  { id: 3, direction: "right", duration: 15, delay: 7, y: 4, size: 24 },
  { id: 4, direction: "right", duration: 25, delay: 1, y: 12, size: 30 },
  { id: 5, direction: "left", duration: 20, delay: 5, y: 2, size: 26 },
  { id: 6, direction: "right", duration: 17, delay: 10, y: 6, size: 28 },
];

interface AntWalkingGroupProps {
  ants?: WalkingAntConfig[];
  className?: string;
}

function WalkingAntWrapper({ ant }: { ant: WalkingAntConfig }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverChange = useCallback((hovered: boolean) => {
    setIsHovered(hovered);
  }, []);

  return (
    <div
      className="absolute walking-ant"
      style={{
        top: ant.y,
        animation: `${ant.direction === "right" ? "ant-walk-right" : "ant-walk-left"} ${ant.duration}s linear ${ant.delay}s infinite`,
        animationPlayState: isHovered ? "paused" : "running",
      }}
    >
      <PixelAnt
        size={ant.size}
        direction={ant.direction}
        onHoverChange={handleHoverChange}
      />
    </div>
  );
}

export default function AntWalkingGroup({
  ants = DEFAULT_ANTS,
  className = "",
}: AntWalkingGroupProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ height: 48 }}>
      {ants.map((ant) => (
        <WalkingAntWrapper key={ant.id} ant={ant} />
      ))}
    </div>
  );
}

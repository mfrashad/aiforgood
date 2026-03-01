"use client";

import { useState, useCallback } from "react";
import PixelAnt from "./PixelAnt";

interface WorkerAntConfig {
  id: number;
  direction: "left" | "right";
  duration: number;
  delay: number;
  carryingResource: boolean;
  resourceColor: string;
  pathIndex: number;
}

const WORKER_ANTS: WorkerAntConfig[] = [
  { id: 1, direction: "right", duration: 14, delay: 0, carryingResource: true, resourceColor: "#4CAF50", pathIndex: 0 },
  { id: 2, direction: "left", duration: 16, delay: 2, carryingResource: false, resourceColor: "", pathIndex: 1 },
  { id: 3, direction: "right", duration: 12, delay: 5, carryingResource: true, resourceColor: "#DAA520", pathIndex: 2 },
  { id: 4, direction: "left", duration: 18, delay: 1, carryingResource: false, resourceColor: "", pathIndex: 3 },
  { id: 5, direction: "right", duration: 10, delay: 4, carryingResource: true, resourceColor: "#8B6914", pathIndex: 4 },
  { id: 6, direction: "left", duration: 15, delay: 7, carryingResource: false, resourceColor: "", pathIndex: 5 },
];

function WorkerAnt({ config }: { config: WorkerAntConfig }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverChange = useCallback((hovered: boolean) => {
    setIsHovered(hovered);
  }, []);

  return (
    <div
      className={`worker-ant worker-ant-path-${config.pathIndex} absolute`}
      style={{
        animationDuration: `${config.duration}s`,
        animationDelay: `${config.delay}s`,
        animationPlayState: isHovered ? "paused" : "running",
      }}
    >
      <div className="relative">
        <PixelAnt
          size={22}
          direction={config.direction}
          onHoverChange={handleHoverChange}
        />
        {config.carryingResource && (
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 pixel-render"
            style={{
              width: 8,
              height: 6,
              backgroundColor: config.resourceColor,
              boxShadow: `inset 0 0 0 1px rgba(0,0,0,0.3)`,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function WorkerAnts() {
  return (
    <div className="absolute inset-0 pointer-events-auto">
      {WORKER_ANTS.map((ant) => (
        <WorkerAnt key={ant.id} config={ant} />
      ))}
    </div>
  );
}

"use client";

import BuilderWorkerAnt from "./BuilderWorkerAnt";
import { TOWER_BASE_Y } from "@/lib/towerConfig";

// Spread ants across the wider scene (0–500)
const WORKER_CONFIGS = [
  { startX: 50, startY: TOWER_BASE_Y - 20, delay: 0 },
  { startX: 440, startY: TOWER_BASE_Y - 15, delay: 1500 },
  { startX: 200, startY: TOWER_BASE_Y - 20, delay: 3000 },
  { startX: 300, startY: TOWER_BASE_Y - 18, delay: 4500 },
  { startX: 100, startY: TOWER_BASE_Y - 22, delay: 6000 },
  { startX: 400, startY: TOWER_BASE_Y - 16, delay: 7500 },
];

export default function WorkerAnts() {
  return (
    <div className="absolute inset-0 pointer-events-auto overflow-visible">
      {WORKER_CONFIGS.map((config, i) => (
        <BuilderWorkerAnt
          key={i}
          startX={config.startX}
          startY={config.startY}
          delay={config.delay}
        />
      ))}
    </div>
  );
}

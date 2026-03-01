"use client";

import { BLOCK_COLORS } from "@/lib/towerConfig";

const BW = 16;
const BH = 12;

function PileBrick({ x, y, colorIdx }: { x: number; y: number; colorIdx: number }) {
  const color = BLOCK_COLORS[colorIdx];
  return (
    <>
      <rect x={x} y={y} width={BW} height={BH} fill={color} />
      {/* Top highlight */}
      <rect x={x + 1} y={y + 1} width={BW - 2} height={2} fill="#FFF" opacity="0.2" />
      {/* Left highlight */}
      <rect x={x + 1} y={y + 3} width={1} height={BH - 4} fill="#FFF" opacity="0.1" />
      {/* Bottom shadow */}
      <rect x={x + 1} y={y + BH - 3} width={BW - 2} height={2} fill="#000" opacity="0.25" />
      {/* Right shadow */}
      <rect x={x + BW - 2} y={y + 3} width={1} height={BH - 4} fill="#000" opacity="0.15" />
      {/* Specular dot */}
      <rect x={x + 2} y={y + 2} width={2} height={1} fill="#FFF" opacity="0.15" />
      {/* Outline */}
      <rect x={x} y={y} width={BW} height={BH} fill="none" stroke="#2A1508" strokeWidth="1" />
    </>
  );
}

export default function ResourcePile() {
  return (
    <svg
      width="60"
      height="50"
      viewBox="0 0 60 50"
      className="pixel-render"
      style={{ shapeRendering: "crispEdges" }}
    >
      {/* Bottom row */}
      <PileBrick x={5} y={35} colorIdx={0} />
      <PileBrick x={21} y={35} colorIdx={2} />
      <PileBrick x={37} y={35} colorIdx={5} />
      {/* Middle row */}
      <PileBrick x={10} y={23} colorIdx={3} />
      <PileBrick x={26} y={23} colorIdx={1} />
      {/* Top brick */}
      <PileBrick x={17} y={11} colorIdx={4} />
    </svg>
  );
}

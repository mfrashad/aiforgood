"use client";

import { motion } from "framer-motion";
import { useTower } from "@/contexts/TowerContext";
import {
  LAYERS,
  BLOCK_WIDTH,
  BLOCK_HEIGHT,
  SCENE_WIDTH,
  SCENE_HEIGHT,
  TOWER_BASE_Y,
  getSlotCoords,
} from "@/lib/towerConfig";

function slotKey(layer: number, slot: number): string {
  return `${layer}-${slot}`;
}

/** Pixel-art brick with beveled edges, mortar line, and specular highlight */
function PixelBrick({ x, y, color }: { x: number; y: number; color: string }) {
  const w = BLOCK_WIDTH;
  const h = BLOCK_HEIGHT;
  return (
    <>
      {/* Base fill */}
      <rect x={x} y={y} width={w} height={h} fill={color} />
      {/* Top highlight */}
      <rect x={x + 1} y={y + 1} width={w - 2} height={2} fill="#FFF" opacity="0.22" />
      {/* Left highlight */}
      <rect x={x + 1} y={y + 3} width={2} height={h - 5} fill="#FFF" opacity="0.12" />
      {/* Bottom shadow */}
      <rect x={x + 1} y={y + h - 3} width={w - 2} height={2} fill="#000" opacity="0.3" />
      {/* Right shadow */}
      <rect x={x + w - 3} y={y + 3} width={2} height={h - 5} fill="#000" opacity="0.18" />
      {/* Horizontal mortar line */}
      <rect x={x + 3} y={y + Math.floor(h / 2)} width={w - 6} height={1} fill="#000" opacity="0.12" />
      {/* Specular dot */}
      <rect x={x + 3} y={y + 3} width={2} height={2} fill="#FFF" opacity="0.18" />
      {/* Outline */}
      <rect x={x} y={y} width={w} height={h} fill="none" stroke="#2A1508" strokeWidth="1" />
    </>
  );
}

export default function BabelTower() {
  const { blocks } = useTower();

  const filledSet = new Set(blocks.map((b) => slotKey(b.layer, b.slot)));
  const blockColorMap = new Map(
    blocks.map((b) => [slotKey(b.layer, b.slot), b.color])
  );

  const bottomLayer = LAYERS[0];
  const towerLeft = bottomLayer.xOffset;
  const towerRight = bottomLayer.xOffset + bottomLayer.slotCount * BLOCK_WIDTH;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${SCENE_WIDTH} ${SCENE_HEIGHT}`}
      className="pixel-render"
      style={{ shapeRendering: "crispEdges" }}
    >
      {/* Tower layers */}
      {LAYERS.map((layer) => (
        <g key={layer.index}>
          {Array.from({ length: layer.slotCount }).map((_, si) => {
            const coords = getSlotCoords(layer.index, si);
            const key = slotKey(layer.index, si);
            const isFilled = filledSet.has(key);

            if (isFilled) {
              const color = blockColorMap.get(key) || "#8B6914";
              return (
                <motion.g
                  key={key}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                  style={{
                    transformOrigin: `${coords.x + BLOCK_WIDTH / 2}px ${coords.y + BLOCK_HEIGHT / 2}px`,
                  }}
                >
                  <PixelBrick x={coords.x} y={coords.y} color={color} />
                </motion.g>
              );
            }

            {/* Empty slot — faint fill, no dashed outlines */}
            return (
              <rect
                key={key}
                x={coords.x}
                y={coords.y}
                width={BLOCK_WIDTH}
                height={BLOCK_HEIGHT}
                fill="#3D2817"
                opacity="0.08"
              />
            );
          })}
        </g>
      ))}

      {/* Scaffolding — left side (pixel-art rects) */}
      <rect x={towerLeft - 8} y={TOWER_BASE_Y - 160} width={3} height={160} fill="#8B6914" opacity="0.7" />
      <rect x={towerLeft - 8} y={TOWER_BASE_Y - 160} width={1} height={160} fill="#FFF" opacity="0.08" />
      <rect x={towerLeft - 3} y={TOWER_BASE_Y - 160} width={3} height={160} fill="#7A5C12" opacity="0.6" />
      {[0, 40, 80, 120, 160].map((offset) => (
        <rect
          key={`lh-${offset}`}
          x={towerLeft - 10}
          y={TOWER_BASE_Y - offset - 2}
          width={12}
          height={3}
          fill="#8B6914"
          opacity="0.5"
        />
      ))}

      {/* Scaffolding — right side */}
      <rect x={towerRight + 2} y={TOWER_BASE_Y - 160} width={3} height={160} fill="#7A5C12" opacity="0.6" />
      <rect x={towerRight + 7} y={TOWER_BASE_Y - 160} width={3} height={160} fill="#8B6914" opacity="0.7" />
      <rect x={towerRight + 9} y={TOWER_BASE_Y - 160} width={1} height={160} fill="#000" opacity="0.08" />
      {[0, 40, 80, 120, 160].map((offset) => (
        <rect
          key={`rh-${offset}`}
          x={towerRight}
          y={TOWER_BASE_Y - offset - 2}
          width={12}
          height={3}
          fill="#8B6914"
          opacity="0.5"
        />
      ))}

      {/* Top platform */}
      {(() => {
        const topLayer = LAYERS[LAYERS.length - 1];
        const topY = topLayer.y;
        const pw = topLayer.slotCount * BLOCK_WIDTH + 16;
        return (
          <g>
            <rect x={topLayer.xOffset - 8} y={topY - 5} width={pw} height={3} fill="#8B6914" opacity="0.6" />
            <rect x={topLayer.xOffset - 5} y={topY - 5} width={3} height={BLOCK_HEIGHT + 5} fill="#8B6914" opacity="0.5" />
            <rect
              x={topLayer.xOffset + topLayer.slotCount * BLOCK_WIDTH + 2}
              y={topY - 5}
              width={3}
              height={BLOCK_HEIGHT + 5}
              fill="#8B6914"
              opacity="0.5"
            />
          </g>
        );
      })()}

      {/* Torch at peak */}
      {(() => {
        const topLayer = LAYERS[LAYERS.length - 1];
        const torchX = topLayer.xOffset + (topLayer.slotCount * BLOCK_WIDTH) / 2;
        const torchY = topLayer.y - 12;
        return (
          <g>
            <rect x={torchX - 2} y={torchY} width={4} height={10} fill="#5C3A1E" />
            <rect x={torchX - 2} y={torchY} width={1} height={10} fill="#FFF" opacity="0.1" />
            <g className="torch-flame">
              <rect x={torchX - 4} y={torchY - 8} width={8} height={8} fill="#FF6B00" opacity="0.9" />
              <rect x={torchX - 2} y={torchY - 13} width={4} height={5} fill="#FFD700" opacity="0.8" />
              <rect x={torchX - 1} y={torchY - 16} width={2} height={3} fill="#FFEC8B" opacity="0.7" />
            </g>
          </g>
        );
      })()}

      {/* Ground line */}
      <rect x="0" y={TOWER_BASE_Y} width={SCENE_WIDTH} height="3" fill="#3D2817" opacity="0.5" />
    </svg>
  );
}

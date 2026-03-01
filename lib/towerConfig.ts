// Tower geometry configuration for the Babel Tower

export const BLOCK_COLORS = [
  "#8B6914",
  "#7A5C12",
  "#5C3A1E",
  "#DAA520",
  "#6B8E23",
  "#A0734A",
] as const;

export const BLOCK_WIDTH = 18;
export const BLOCK_HEIGHT = 20;

// Full scene dimensions (tower centered within this)
export const SCENE_WIDTH = 500;
export const SCENE_HEIGHT = 220;
export const TOWER_BASE_Y = 200;
export const GROUND_Y = TOWER_BASE_Y;

// How many bottom layers start pre-filled
export const INITIAL_FILLED_LAYERS = 3;

// 6 layers from bottom (0) to top (5)
export interface LayerConfig {
  index: number;
  slotCount: number;
  y: number;
  xOffset: number; // left edge offset for centering within scene
}

function buildLayers(): LayerConfig[] {
  const slotCounts = [10, 8, 7, 5, 3, 2];
  const layers: LayerConfig[] = [];

  for (let i = 0; i < slotCounts.length; i++) {
    const count = slotCounts[i];
    const layerWidth = count * BLOCK_WIDTH;
    // Center tower blocks within the full scene width
    const xOffset = (SCENE_WIDTH - layerWidth) / 2;
    const y = TOWER_BASE_Y - (i + 1) * BLOCK_HEIGHT;

    layers.push({
      index: i,
      slotCount: count,
      y,
      xOffset,
    });
  }

  return layers;
}

export const LAYERS = buildLayers();

export const TOTAL_FILLABLE_SLOTS = LAYERS.reduce(
  (sum, layer) => sum + layer.slotCount,
  0
);

export function getSlotCoords(
  layerIndex: number,
  slotIndex: number
): { x: number; y: number } {
  const layer = LAYERS[layerIndex];
  return {
    x: layer.xOffset + slotIndex * BLOCK_WIDTH,
    y: layer.y,
  };
}

// Multiple resource pile positions — spread far from the tower
export const RESOURCE_PILES = [
  { x: 35, y: TOWER_BASE_Y - 25 },
  { x: 75, y: TOWER_BASE_Y - 20 },
  { x: 430, y: TOWER_BASE_Y - 25 },
  { x: 465, y: TOWER_BASE_Y - 20 },
];

// Legacy single pile (used as default)
export const RESOURCE_PILE = RESOURCE_PILES[0];

export function getRandomPile(): { x: number; y: number } {
  return RESOURCE_PILES[Math.floor(Math.random() * RESOURCE_PILES.length)];
}

export function getRandomBlockColor(): string {
  return BLOCK_COLORS[Math.floor(Math.random() * BLOCK_COLORS.length)];
}

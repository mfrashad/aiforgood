"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import {
  LAYERS,
  TOTAL_FILLABLE_SLOTS,
  INITIAL_FILLED_LAYERS,
  BLOCK_COLORS,
  getRandomBlockColor,
} from "@/lib/towerConfig";

export interface Block {
  layer: number;
  slot: number;
  color: string;
}

interface TowerContextValue {
  blocks: Block[];
  filledSlots: number;
  totalSlots: number;
  isTowerComplete: boolean;
  getNextAvailableSlot: () => { layer: number; slot: number } | null;
  addBlock: (layer: number, slot: number, color: string) => void;
  releaseSlot: (layer: number, slot: number) => void;
}

const TowerContext = createContext<TowerContextValue | null>(null);

// O(1) lookup key
function slotKey(layer: number, slot: number): string {
  return `${layer}-${slot}`;
}

function buildInitialBlocks(): { blocks: Block[]; filled: Set<string> } {
  const blocks: Block[] = [];
  const filled = new Set<string>();
  let colorIdx = 0;

  for (let li = 0; li < INITIAL_FILLED_LAYERS && li < LAYERS.length; li++) {
    const layer = LAYERS[li];
    for (let si = 0; si < layer.slotCount; si++) {
      // Deterministic color cycling — avoids hydration mismatch from Math.random()
      const color = BLOCK_COLORS[colorIdx % BLOCK_COLORS.length];
      colorIdx++;
      blocks.push({ layer: li, slot: si, color });
      filled.add(slotKey(li, si));
    }
  }

  return { blocks, filled };
}

const initial = buildInitialBlocks();

export function TowerProvider({ children }: { children: ReactNode }) {
  const [blocks, setBlocks] = useState<Block[]>(initial.blocks);
  const [filledSet, setFilledSet] = useState<Set<string>>(initial.filled);
  // Reservation ref: slots claimed by ants in-flight (prevents multiple ants targeting the same slot)
  const reservedRef = useRef<Set<string>>(new Set());

  const filledSlots = blocks.length;
  const totalSlots = TOTAL_FILLABLE_SLOTS;
  const isTowerComplete = filledSlots >= totalSlots;

  const getNextAvailableSlot = useCallback((): {
    layer: number;
    slot: number;
  } | null => {
    // Fill bottom-up, left-to-right within each layer
    // Skip slots that are filled OR reserved by another ant
    for (let li = 0; li < LAYERS.length; li++) {
      const layer = LAYERS[li];
      for (let si = 0; si < layer.slotCount; si++) {
        const key = slotKey(li, si);
        if (!filledSet.has(key) && !reservedRef.current.has(key)) {
          reservedRef.current.add(key);
          return { layer: li, slot: si };
        }
      }
    }
    return null;
  }, [filledSet]);

  const addBlock = useCallback(
    (layer: number, slot: number, color: string) => {
      const key = slotKey(layer, slot);
      // Release reservation
      reservedRef.current.delete(key);

      setFilledSet((prev) => {
        if (prev.has(key)) return prev;
        const next = new Set(prev);
        next.add(key);
        return next;
      });
      setBlocks((prev) => {
        // Guard against duplicates
        if (prev.some((b) => b.layer === layer && b.slot === slot)) return prev;
        return [...prev, { layer, slot, color }];
      });
    },
    []
  );

  const releaseSlot = useCallback((layer: number, slot: number) => {
    reservedRef.current.delete(slotKey(layer, slot));
  }, []);

  const value = useMemo(
    () => ({
      blocks,
      filledSlots,
      totalSlots,
      isTowerComplete,
      getNextAvailableSlot,
      addBlock,
      releaseSlot,
    }),
    [blocks, filledSlots, totalSlots, isTowerComplete, getNextAvailableSlot, addBlock, releaseSlot]
  );

  return (
    <TowerContext.Provider value={value}>{children}</TowerContext.Provider>
  );
}

export function useTower(): TowerContextValue {
  const ctx = useContext(TowerContext);
  if (!ctx) throw new Error("useTower must be used within TowerProvider");
  return ctx;
}

export { getRandomBlockColor };

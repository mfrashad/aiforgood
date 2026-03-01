"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { GROUND_Y, getRandomPile, getSlotCoords, getRandomBlockColor } from "@/lib/towerConfig";
import { useTower } from "@/contexts/TowerContext";

export type AntState =
  | "IDLE"
  | "WALKING_TO_PILE"
  | "PICKING_UP"
  | "WALKING_TO_TOWER"
  | "PLACING_BLOCK"
  | "PATROL"
  | "DRAGGED"
  | "FALLING";

interface AntPosition {
  x: number;
  y: number;
}

interface UseAntStateMachineOptions {
  startX: number;
  startY: number;
  delay?: number; // stagger delay in ms
}

interface AntStateMachineResult {
  state: AntState;
  position: AntPosition;
  targetPosition: AntPosition;
  carrying: boolean;
  brickColor: string;
  direction: "left" | "right";
  onDragStart: () => void;
  onDragEnd: (dx: number, dy: number) => void;
}

export function useAntStateMachine({
  startX,
  startY,
  delay = 0,
}: UseAntStateMachineOptions): AntStateMachineResult {
  const { getNextAvailableSlot, addBlock, releaseSlot, isTowerComplete } = useTower();
  const [state, setState] = useState<AntState>("IDLE");
  const [position, setPosition] = useState<AntPosition>({ x: startX, y: startY });
  const [targetPosition, setTargetPosition] = useState<AntPosition>({ x: startX, y: startY });
  const [carrying, setCarrying] = useState(false);
  const [brickColor, setBrickColor] = useState("#8B6914");
  const [direction, setDirection] = useState<"left" | "right">("right");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevStateRef = useRef<AntState>("IDLE");
  const patrolDir = useRef<1 | -1>(1);

  // Target slot for current delivery
  const targetSlotRef = useRef<{ layer: number; slot: number } | null>(null);
  // Which pile the ant is walking to this trip
  const currentPileRef = useRef<{ x: number; y: number } | null>(null);

  // Track whether initial delay has elapsed
  const initialDelayDone = useRef(false);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // State machine transitions
  useEffect(() => {
    if (state === "DRAGGED") return;

    clearTimer();

    switch (state) {
      case "FALLING":
        // Fall to ground level, then resume
        // BuilderWorkerAnt computes the fall target visually (position.x, GROUND_Y-20)
        // We just need to wait for the spring animation, then sync position and go IDLE
        setTargetPosition({ x: position.x, y: GROUND_Y - 20 });
        timerRef.current = setTimeout(() => {
          setPosition((prev) => ({ x: prev.x, y: GROUND_Y - 20 }));
          setState("IDLE");
        }, 800);
        break;

      case "IDLE":
        if (isTowerComplete) {
          setState("PATROL");
          return;
        }
        {
          // First time: use stagger delay. After that: short pause.
          const waitTime = initialDelayDone.current ? 500 : delay + 500;
          initialDelayDone.current = true;

          timerRef.current = setTimeout(() => {
            // Pick a random resource pile each trip
            const pile = getRandomPile();
            currentPileRef.current = pile;
            const pileTarget = { x: pile.x, y: pile.y };
            setTargetPosition(pileTarget);
            setDirection(pileTarget.x < position.x ? "left" : "right");
            setState("WALKING_TO_PILE");
          }, waitTime);
        }
        break;

      case "WALKING_TO_PILE":
        {
          const pile = currentPileRef.current!;
          const dist = Math.hypot(
            pile.x - position.x,
            pile.y - position.y
          );
          // Slow walk — ~20ms per pixel so ants are visible carrying
          const duration = Math.max(3000, dist * 20);
          timerRef.current = setTimeout(() => {
            setPosition({ x: pile.x, y: pile.y });
            setState("PICKING_UP");
          }, duration);
        }
        break;

      case "PICKING_UP":
        timerRef.current = setTimeout(() => {
          const color = getRandomBlockColor();
          setBrickColor(color);
          setCarrying(true);

          // Find next slot (reserves it so other ants skip it)
          const slot = getNextAvailableSlot();
          if (!slot) {
            setCarrying(false);
            setState("PATROL");
            return;
          }
          targetSlotRef.current = slot;
          const coords = getSlotCoords(slot.layer, slot.slot);
          const towerTarget = { x: coords.x, y: coords.y };
          setTargetPosition(towerTarget);
          setDirection(towerTarget.x > position.x ? "right" : "left");
          setState("WALKING_TO_TOWER");
        }, 800);
        break;

      case "WALKING_TO_TOWER":
        {
          const slot = targetSlotRef.current;
          if (!slot) {
            setState("IDLE");
            return;
          }
          const coords = getSlotCoords(slot.layer, slot.slot);
          const dist = Math.hypot(
            coords.x - position.x,
            coords.y - position.y
          );
          // Slow walk carrying block
          const duration = Math.max(3000, dist * 20);
          timerRef.current = setTimeout(() => {
            setPosition({ x: coords.x, y: coords.y });
            setState("PLACING_BLOCK");
          }, duration);
        }
        break;

      case "PLACING_BLOCK":
        timerRef.current = setTimeout(() => {
          const slot = targetSlotRef.current;
          if (slot) {
            addBlock(slot.layer, slot.slot, brickColor);
          }
          setCarrying(false);
          targetSlotRef.current = null;
          setState("IDLE");
        }, 600);
        break;

      case "PATROL":
        {
          const patrolRange = 60;
          const newX = position.x + patrolDir.current * patrolRange;
          setTargetPosition({ x: newX, y: position.y });
          setDirection(patrolDir.current > 0 ? "right" : "left");
          patrolDir.current = (patrolDir.current * -1) as 1 | -1;
          timerRef.current = setTimeout(() => {
            setPosition({ x: newX, y: position.y });
            if (isTowerComplete) {
              setState("PATROL");
            } else {
              setState("IDLE");
            }
          }, 3000);
        }
        break;
    }

    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, isTowerComplete]);

  const onDragStart = useCallback(() => {
    clearTimer();
    prevStateRef.current = state;
    setState("DRAGGED");
  }, [state, clearTimer]);

  const onDragEnd = useCallback(
    (dropX: number, dropY: number) => {
      // Set position to the absolute drop location
      setPosition({ x: dropX, y: dropY });
      if (targetSlotRef.current) {
        releaseSlot(targetSlotRef.current.layer, targetSlotRef.current.slot);
      }
      setCarrying(false);
      targetSlotRef.current = null;
      setState("FALLING");
    },
    [releaseSlot]
  );

  return {
    state,
    position,
    targetPosition,
    carrying,
    brickColor,
    direction,
    onDragStart,
    onDragEnd,
  };
}

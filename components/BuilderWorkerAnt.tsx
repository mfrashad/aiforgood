"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";
import PixelAnt from "./PixelAnt";
import { useAntStateMachine } from "@/hooks/useAntStateMachine";
import { GROUND_Y } from "@/lib/towerConfig";

interface BuilderWorkerAntProps {
  startX: number;
  startY: number;
  delay?: number;
}

export default function BuilderWorkerAnt({
  startX,
  startY,
  delay = 0,
}: BuilderWorkerAntProps) {
  const {
    state,
    position,
    targetPosition,
    carrying,
    brickColor,
    direction,
    onDragStart,
    onDragEnd,
  } = useAntStateMachine({ startX, startY, delay });

  const x = useMotionValue(startX);
  const y = useMotionValue(startY);
  const rafRef = useRef(0);
  const elRef = useRef<HTMLDivElement>(null);

  const isWalking =
    state === "WALKING_TO_PILE" ||
    state === "WALKING_TO_TOWER" ||
    state === "PATROL";
  const isDragged = state === "DRAGGED";
  const isFalling = state === "FALLING";

  const targetX = isFalling
    ? position.x
    : isWalking
      ? targetPosition.x
      : position.x;

  const targetY = isFalling
    ? GROUND_Y - 20
    : isWalking
      ? targetPosition.y
      : position.y;

  // Animate motion values via rAF
  useEffect(() => {
    if (isDragged) return;

    cancelAnimationFrame(rafRef.current);

    const sx = x.get();
    const sy = y.get();
    const dx = targetX - sx;
    const dy = targetY - sy;
    const dist = Math.hypot(dx, dy);

    if (dist < 0.5) {
      x.set(targetX);
      y.set(targetY);
      return;
    }

    const duration = isFalling
      ? 600
      : isWalking
        ? Math.max(3000, dist * 20)
        : 300;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      let t = Math.min(elapsed / duration, 1);

      if (isFalling) {
        t = 1 - Math.pow(1 - t, 3);
      }

      x.set(sx + dx * t);
      y.set(sy + dy * t);

      if (elapsed < duration) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [targetX, targetY, isDragged, isFalling, isWalking, x, y]);

  // Custom pointer-based drag — bypasses framer-motion's drag entirely
  // to avoid parent-transform offset bugs and whileDrag position resets.
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      cancelAnimationFrame(rafRef.current);

      const startPointerX = e.clientX;
      const startPointerY = e.clientY;
      const startValX = x.get();
      const startValY = y.get();

      onDragStart();

      const el = elRef.current;
      if (el) el.setPointerCapture(e.pointerId);

      const onMove = (ev: PointerEvent) => {
        x.set(startValX + ev.clientX - startPointerX);
        y.set(startValY + ev.clientY - startPointerY);
      };

      const onUp = () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        onDragEnd(x.get(), y.get());
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    },
    [x, y, onDragStart, onDragEnd]
  );

  return (
    <motion.div
      ref={elRef}
      onPointerDown={handlePointerDown}
      style={{
        x,
        y,
        position: "absolute",
        cursor: isDragged ? "grabbing" : "grab",
        touchAction: "none",
        zIndex: isDragged ? 50 : isFalling ? 40 : undefined,
        scale: isDragged ? 1.15 : 1,
      }}
    >
      <PixelAnt
        size={22}
        direction={direction}
        showBrick={carrying}
        brickColor={brickColor}
      />
    </motion.div>
  );
}

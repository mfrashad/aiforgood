"use client";

import { useRef, useCallback, type ReactNode, type CSSProperties } from "react";

interface DraggableAntProps {
  children: ReactNode;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  className?: string;
  style?: CSSProperties;
}

export default function DraggableAnt({
  children,
  onDragStart,
  onDragEnd,
  className = "",
  style,
}: DraggableAntProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Split style: position props go on outer div, animation props go on inner div
  const { top, left, right, bottom, ...innerStyle } = style || {};
  const outerPositionStyle: CSSProperties = {};
  if (top !== undefined) outerPositionStyle.top = top;
  if (left !== undefined) outerPositionStyle.left = left;
  if (right !== undefined) outerPositionStyle.right = right;
  if (bottom !== undefined) outerPositionStyle.bottom = bottom;

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;

      const startPointerX = e.clientX;
      const startPointerY = e.clientY;

      // Pause CSS animation at current frame (preserves visual position)
      inner.style.animationPlayState = "paused";

      // Visual feedback
      outer.style.transform = "scale(1.15)";
      outer.style.zIndex = "50";
      outer.classList.add("ant-dragging");

      outer.setPointerCapture(e.pointerId);
      onDragStart?.();

      const onMove = (ev: PointerEvent) => {
        const dx = ev.clientX - startPointerX;
        const dy = ev.clientY - startPointerY;
        outer.style.transform = `translate(${dx}px, ${dy}px) scale(1.15)`;
      };

      const onUp = () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);

        // Fall animation: animate outer transform back to origin
        outer.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
        outer.style.transform = "scale(1)";

        let cleaned = false;
        const cleanup = () => {
          if (cleaned) return;
          cleaned = true;
          outer.removeEventListener("transitionend", cleanup);
          outer.style.transition = "";
          outer.style.transform = "";
          outer.style.zIndex = "";
          outer.classList.remove("ant-dragging");
          // Remove DOM override — let React's style prop take over again
          inner.style.animationPlayState = "";
          onDragEnd?.();
        };

        outer.addEventListener("transitionend", cleanup);
        // Fallback in case transitionend doesn't fire
        setTimeout(cleanup, 600);
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    },
    [onDragStart, onDragEnd]
  );

  return (
    <div
      ref={outerRef}
      onPointerDown={handlePointerDown}
      className={className}
      style={{ ...outerPositionStyle, cursor: "grab", touchAction: "none" }}
    >
      <div ref={innerRef} style={innerStyle}>
        {children}
      </div>
    </div>
  );
}

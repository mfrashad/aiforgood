"use client";

import { useState, useCallback, forwardRef } from "react";

interface PixelAntProps {
  size?: number;
  direction?: "left" | "right";
  className?: string;
  onHoverChange?: (hovered: boolean) => void;
  showBrick?: boolean;
  brickColor?: string;
}

const PixelAnt = forwardRef<HTMLDivElement, PixelAntProps>(function PixelAnt(
  {
    size = 32,
    direction = "right",
    className = "",
    onHoverChange,
    showBrick = false,
    brickColor = "#8B6914",
  },
  ref
) {
  const [isWaving, setIsWaving] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleClick = useCallback(() => {
    if (isWaving) return;
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  }, [isWaving]);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
    onHoverChange?.(true);
  }, [onHoverChange]);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
    onHoverChange?.(false);
  }, [onHoverChange]);

  const flip = direction === "left" ? "scaleX(-1)" : "";

  const walkingClass = isWaving
    ? "paused ant-walking"
    : isPaused
      ? "ant-paused ant-walking"
      : "ant-walking";

  return (
    <div
      ref={ref}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`cursor-pointer select-none ${walkingClass} ${className}`}
      style={{
        width: size,
        height: size * 0.75,
        transform: flip,
      }}
      title="Click me!"
    >
      <svg
        width={size}
        height={size * 0.75}
        viewBox="0 0 32 24"
        className="pixel-render"
        style={{ shapeRendering: "crispEdges" }}
      >
        {/* Brick on back */}
        {showBrick && (
          <rect
            x="8"
            y="2"
            width="10"
            height="6"
            fill={brickColor}
            stroke="#3D2817"
            strokeWidth="0.5"
            className="brick-pickup"
          />
        )}
        {/* Body */}
        <rect x="10" y="8" width="12" height="8" fill="#8B5E3C" />
        {/* Head */}
        <rect x="22" y="6" width="8" height="8" fill="#6B3A1F" />
        {/* Eye */}
        <rect x="26" y="8" width="2" height="2" fill="#F5E6D3" />
        {/* Abdomen */}
        <rect x="2" y="6" width="10" height="10" rx="2" fill="#8B5E3C" />
        <rect x="4" y="8" width="6" height="6" fill="#A0734A" />
        {/* Antennae */}
        <line
          x1="26"
          y1="6"
          x2="28"
          y2="2"
          stroke="#6B3A1F"
          strokeWidth="1.5"
          style={{
            transformOrigin: "26px 6px",
            animation: isWaving
              ? "antenna-wiggle 0.3s ease-in-out infinite"
              : "none",
          }}
        />
        <line
          x1="28"
          y1="6"
          x2="30"
          y2="1"
          stroke="#6B3A1F"
          strokeWidth="1.5"
          style={{
            transformOrigin: "28px 6px",
            animation: isWaving
              ? "antenna-wiggle 0.3s ease-in-out 0.1s infinite"
              : "none",
          }}
        />
        {/* Legs - front pair */}
        <line
          x1="20"
          y1="16"
          x2="24"
          y2="22"
          stroke="#6B3A1F"
          strokeWidth="1.5"
          style={{
            transformOrigin: "20px 16px",
            animation: "ant-legs 0.3s ease-in-out infinite",
          }}
        />
        <line
          x1="18"
          y1="16"
          x2="22"
          y2="22"
          stroke="#6B3A1F"
          strokeWidth="1.5"
          style={{
            transformOrigin: "18px 16px",
            animation: "ant-legs 0.3s ease-in-out 0.15s infinite",
          }}
        />
        {/* Legs - middle pair */}
        <line
          x1="14"
          y1="16"
          x2="14"
          y2="22"
          stroke="#6B3A1F"
          strokeWidth="1.5"
          style={{
            transformOrigin: "14px 16px",
            animation: "ant-legs 0.3s ease-in-out 0.05s infinite",
          }}
        />
        <line
          x1="12"
          y1="16"
          x2="12"
          y2="22"
          stroke="#6B3A1F"
          strokeWidth="1.5"
          style={{
            transformOrigin: "12px 16px",
            animation: "ant-legs 0.3s ease-in-out 0.2s infinite",
          }}
        />
        {/* Legs - back pair */}
        <line
          x1="8"
          y1="16"
          x2="4"
          y2="22"
          stroke="#6B3A1F"
          strokeWidth="1.5"
          style={{
            transformOrigin: "8px 16px",
            animation: "ant-legs 0.3s ease-in-out 0.1s infinite",
          }}
        />
        <line
          x1="6"
          y1="16"
          x2="2"
          y2="22"
          stroke="#6B3A1F"
          strokeWidth="1.5"
          style={{
            transformOrigin: "6px 16px",
            animation: "ant-legs 0.3s ease-in-out 0.25s infinite",
          }}
        />
        {/* Mandibles */}
        <rect x="29" y="12" width="3" height="2" fill="#6B3A1F" />
      </svg>
    </div>
  );
});

export default PixelAnt;

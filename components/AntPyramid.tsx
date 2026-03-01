"use client";

export default function AntPyramid() {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      className="pixel-render"
      style={{ shapeRendering: "crispEdges" }}
    >
      {/* Layer 6 (base) - widest */}
      <rect x="30" y="170" width="240" height="20" fill="#5C3A1E" />
      <rect x="32" y="172" width="236" height="16" fill="#6B4F10" />
      {/* Block highlights */}
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={`b6-${i}`}
          x={34 + i * 20}
          y="172"
          width="18"
          height="16"
          fill={i % 2 === 0 ? "#8B6914" : "#7A5C12"}
          stroke="#5C3A1E"
          strokeWidth="1"
        />
      ))}

      {/* Layer 5 */}
      <rect x="55" y="148" width="190" height="22" fill="#5C3A1E" />
      <rect x="57" y="150" width="186" height="18" fill="#6B4F10" />
      {Array.from({ length: 9 }).map((_, i) => (
        <rect
          key={`b5-${i}`}
          x={59 + i * 20}
          y="150"
          width="18"
          height="18"
          fill={i % 2 === 0 ? "#8B6914" : "#7A5C12"}
          stroke="#5C3A1E"
          strokeWidth="1"
        />
      ))}

      {/* Layer 4 */}
      <rect x="75" y="126" width="150" height="22" fill="#5C3A1E" />
      <rect x="77" y="128" width="146" height="18" fill="#6B4F10" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect
          key={`b4-${i}`}
          x={79 + i * 20}
          y="128"
          width="18"
          height="18"
          fill={i % 2 === 0 ? "#DAA520" : "#8B6914"}
          stroke="#5C3A1E"
          strokeWidth="1"
        />
      ))}

      {/* Layer 3 */}
      <rect x="95" y="104" width="110" height="22" fill="#5C3A1E" />
      <rect x="97" y="106" width="106" height="18" fill="#6B4F10" />
      {Array.from({ length: 5 }).map((_, i) => (
        <rect
          key={`b3-${i}`}
          x={99 + i * 20}
          y="106"
          width="18"
          height="18"
          fill={i % 2 === 0 ? "#DAA520" : "#8B6914"}
          stroke="#5C3A1E"
          strokeWidth="1"
        />
      ))}

      {/* Layer 2 */}
      <rect x="115" y="82" width="70" height="22" fill="#5C3A1E" />
      <rect x="117" y="84" width="66" height="18" fill="#6B4F10" />
      {Array.from({ length: 3 }).map((_, i) => (
        <rect
          key={`b2-${i}`}
          x={119 + i * 22}
          y="84"
          width="20"
          height="18"
          fill={i % 2 === 0 ? "#DAA520" : "#8B6914"}
          stroke="#5C3A1E"
          strokeWidth="1"
        />
      ))}

      {/* Layer 1 (top) - narrowest */}
      <rect x="132" y="60" width="36" height="22" fill="#5C3A1E" />
      <rect x="134" y="62" width="32" height="18" fill="#DAA520" />
      <rect x="134" y="62" width="15" height="18" fill="#8B6914" stroke="#5C3A1E" strokeWidth="1" />
      <rect x="149" y="62" width="17" height="18" fill="#DAA520" stroke="#5C3A1E" strokeWidth="1" />

      {/* Torch/flame at the peak */}
      <rect x="147" y="50" width="6" height="10" fill="#5C3A1E" />
      <g className="torch-flame">
        <rect x="145" y="40" width="10" height="10" fill="#FF6B00" opacity="0.9" />
        <rect x="147" y="36" width="6" height="6" fill="#FFD700" opacity="0.8" />
        <rect x="148" y="33" width="4" height="4" fill="#FFEC8B" opacity="0.7" />
      </g>

      {/* Resource blocks being placed */}
      {/* Green resource on layer 3 */}
      <rect x="185" y="100" width="8" height="8" fill="#4CAF50" opacity="0.85" />
      <rect x="186" y="101" width="6" height="6" fill="#66BB6A" opacity="0.85" />

      {/* Amber resource on layer 5 */}
      <rect x="220" y="146" width="8" height="8" fill="#DAA520" opacity="0.85" />
      <rect x="221" y="147" width="6" height="6" fill="#FFD700" opacity="0.85" />

      {/* Green resource near layer 2 */}
      <rect x="110" y="80" width="7" height="7" fill="#4CAF50" opacity="0.8" />
      <rect x="111" y="81" width="5" height="5" fill="#66BB6A" opacity="0.8" />

      {/* Scaffolding - left side */}
      <line x1="42" y1="170" x2="42" y2="130" stroke="#8B6914" strokeWidth="2" opacity="0.6" />
      <line x1="48" y1="170" x2="48" y2="130" stroke="#8B6914" strokeWidth="2" opacity="0.6" />
      <line x1="40" y1="140" x2="50" y2="140" stroke="#8B6914" strokeWidth="1.5" opacity="0.6" />
      <line x1="40" y1="155" x2="50" y2="155" stroke="#8B6914" strokeWidth="1.5" opacity="0.6" />
      {/* Diagonal brace */}
      <line x1="42" y1="170" x2="48" y2="140" stroke="#8B6914" strokeWidth="1" opacity="0.4" />

      {/* Scaffolding - right side */}
      <line x1="252" y1="170" x2="252" y2="130" stroke="#8B6914" strokeWidth="2" opacity="0.6" />
      <line x1="258" y1="170" x2="258" y2="130" stroke="#8B6914" strokeWidth="2" opacity="0.6" />
      <line x1="250" y1="140" x2="260" y2="140" stroke="#8B6914" strokeWidth="1.5" opacity="0.6" />
      <line x1="250" y1="155" x2="260" y2="155" stroke="#8B6914" strokeWidth="1.5" opacity="0.6" />
      <line x1="252" y1="170" x2="258" y2="140" stroke="#8B6914" strokeWidth="1" opacity="0.4" />

      {/* Small scaffolding at top */}
      <line x1="125" y1="82" x2="125" y2="62" stroke="#8B6914" strokeWidth="1.5" opacity="0.5" />
      <line x1="175" y1="82" x2="175" y2="62" stroke="#8B6914" strokeWidth="1.5" opacity="0.5" />
      <line x1="123" y1="72" x2="177" y2="72" stroke="#8B6914" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

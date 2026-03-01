export default function PixelLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className="pixel-render"
      style={{ shapeRendering: "crispEdges" }}
    >
      {/* Ant head */}
      <rect x="12" y="4" width="8" height="8" fill="#8B5E3C" />
      {/* Eyes */}
      <rect x="14" y="6" width="2" height="2" fill="#F5E6D3" />
      <rect x="18" y="6" width="2" height="2" fill="#F5E6D3" />
      {/* Antennae */}
      <rect x="10" y="2" width="2" height="4" fill="#6B3A1F" />
      <rect x="20" y="2" width="2" height="4" fill="#6B3A1F" />
      <rect x="8" y="0" width="2" height="2" fill="#6B3A1F" />
      <rect x="22" y="0" width="2" height="2" fill="#6B3A1F" />
      {/* Body */}
      <rect x="10" y="12" width="12" height="8" fill="#8B5E3C" />
      <rect x="12" y="14" width="8" height="4" fill="#A0734A" />
      {/* Abdomen */}
      <rect x="8" y="20" width="16" height="8" rx="2" fill="#8B5E3C" />
      <rect x="10" y="22" width="12" height="4" fill="#A0734A" />
      {/* Legs */}
      <rect x="6" y="14" width="4" height="2" fill="#6B3A1F" />
      <rect x="22" y="14" width="4" height="2" fill="#6B3A1F" />
      <rect x="4" y="18" width="6" height="2" fill="#6B3A1F" />
      <rect x="22" y="18" width="6" height="2" fill="#6B3A1F" />
      <rect x="6" y="22" width="4" height="2" fill="#6B3A1F" />
      <rect x="22" y="22" width="4" height="2" fill="#6B3A1F" />
      {/* Smile */}
      <rect x="14" y="10" width="4" height="1" fill="#6B3A1F" />
    </svg>
  );
}

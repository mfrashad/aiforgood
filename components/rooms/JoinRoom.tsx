"use client";

import { useState } from "react";
import { ROLES, SITE } from "@/lib/constants";

// Pixel art ant characters for each role
function BuilderAnt() {
  return (
    <svg width="64" height="80" viewBox="0 0 64 80" className="pixel-render" style={{ shapeRendering: "crispEdges" }}>
      {/* Hard hat */}
      <rect x="18" y="4" width="28" height="8" fill="#DAA520" />
      <rect x="22" y="0" width="20" height="6" fill="#DAA520" />
      <rect x="20" y="8" width="4" height="2" fill="#8B6914" />
      {/* Head */}
      <rect x="20" y="12" width="24" height="16" fill="#8B5E3C" />
      {/* Eyes */}
      <rect x="26" y="16" width="4" height="4" fill="#F5E6D3" />
      <rect x="34" y="16" width="4" height="4" fill="#F5E6D3" />
      <rect x="28" y="18" width="2" height="2" fill="#1A0F0A" />
      <rect x="36" y="18" width="2" height="2" fill="#1A0F0A" />
      {/* Body */}
      <rect x="18" y="28" width="28" height="20" fill="#8B5E3C" />
      <rect x="22" y="30" width="20" height="14" fill="#A0734A" />
      {/* Wrench in hand */}
      <rect x="46" y="32" width="12" height="4" fill="#C0C0C0" />
      <rect x="54" y="28" width="6" height="12" fill="#C0C0C0" />
      <rect x="56" y="30" width="4" height="8" fill="#8B5E3C" />
      {/* Legs */}
      <rect x="20" y="48" width="8" height="16" fill="#6B3A1F" />
      <rect x="36" y="48" width="8" height="16" fill="#6B3A1F" />
      {/* Feet */}
      <rect x="18" y="62" width="12" height="4" fill="#5C3A1E" />
      <rect x="34" y="62" width="12" height="4" fill="#5C3A1E" />
      {/* Code on tiny screen (chest) */}
      <rect x="26" y="34" width="12" height="8" fill="#1A0F0A" />
      <rect x="28" y="36" width="4" height="1" fill="#4CAF50" />
      <rect x="28" y="38" width="6" height="1" fill="#4CAF50" />
      <rect x="28" y="40" width="3" height="1" fill="#DAA520" />
    </svg>
  );
}

function AdvocateAnt() {
  return (
    <svg width="64" height="80" viewBox="0 0 64 80" className="pixel-render" style={{ shapeRendering: "crispEdges" }}>
      {/* Antennae */}
      <rect x="24" y="0" width="2" height="8" fill="#6B3A1F" />
      <rect x="38" y="0" width="2" height="8" fill="#6B3A1F" />
      <rect x="22" y="0" width="2" height="2" fill="#6B3A1F" />
      <rect x="40" y="0" width="2" height="2" fill="#6B3A1F" />
      {/* Head */}
      <rect x="20" y="8" width="24" height="16" fill="#8B5E3C" />
      {/* Eyes */}
      <rect x="26" y="12" width="4" height="4" fill="#F5E6D3" />
      <rect x="34" y="12" width="4" height="4" fill="#F5E6D3" />
      <rect x="28" y="14" width="2" height="2" fill="#1A0F0A" />
      <rect x="36" y="14" width="2" height="2" fill="#1A0F0A" />
      {/* Smile */}
      <rect x="28" y="20" width="8" height="2" fill="#6B3A1F" />
      {/* Body */}
      <rect x="18" y="24" width="28" height="20" fill="#8B5E3C" />
      <rect x="22" y="26" width="20" height="14" fill="#A0734A" />
      {/* Megaphone */}
      <rect x="46" y="24" width="4" height="4" fill="#FF9E6D" />
      <rect x="50" y="22" width="8" height="8" fill="#FF9E6D" />
      <rect x="58" y="20" width="4" height="12" fill="#FF9E6D" />
      {/* Speech bubble */}
      <rect x="48" y="8" width="16" height="10" rx="2" fill="#F5E6D3" />
      <rect x="50" y="10" width="4" height="2" fill="#1A0F0A" />
      <rect x="56" y="10" width="4" height="2" fill="#1A0F0A" />
      <rect x="50" y="14" width="8" height="2" fill="#1A0F0A" />
      <rect x="48" y="18" width="4" height="4" fill="#F5E6D3" />
      {/* Notepad in other hand */}
      <rect x="2" y="28" width="14" height="18" fill="#F5E6D3" />
      <rect x="4" y="30" width="8" height="1" fill="#1A0F0A" />
      <rect x="4" y="33" width="6" height="1" fill="#1A0F0A" />
      <rect x="4" y="36" width="8" height="1" fill="#1A0F0A" />
      <rect x="4" y="39" width="5" height="1" fill="#1A0F0A" />
      {/* Legs */}
      <rect x="20" y="44" width="8" height="16" fill="#6B3A1F" />
      <rect x="36" y="44" width="8" height="16" fill="#6B3A1F" />
      {/* Feet */}
      <rect x="18" y="58" width="12" height="4" fill="#5C3A1E" />
      <rect x="34" y="58" width="12" height="4" fill="#5C3A1E" />
    </svg>
  );
}

function OrganizerAnt() {
  return (
    <svg width="64" height="80" viewBox="0 0 64 80" className="pixel-render" style={{ shapeRendering: "crispEdges" }}>
      {/* Headset */}
      <rect x="16" y="6" width="2" height="16" fill="#C0C0C0" />
      <rect x="46" y="6" width="2" height="16" fill="#C0C0C0" />
      <rect x="16" y="4" width="32" height="4" fill="#C0C0C0" />
      <rect x="12" y="18" width="8" height="6" fill="#666" />
      {/* Antennae poking through headset */}
      <rect x="24" y="0" width="2" height="6" fill="#6B3A1F" />
      <rect x="38" y="0" width="2" height="6" fill="#6B3A1F" />
      {/* Head */}
      <rect x="20" y="8" width="24" height="16" fill="#8B5E3C" />
      {/* Eyes */}
      <rect x="26" y="12" width="4" height="4" fill="#F5E6D3" />
      <rect x="34" y="12" width="4" height="4" fill="#F5E6D3" />
      <rect x="28" y="14" width="2" height="2" fill="#1A0F0A" />
      <rect x="36" y="14" width="2" height="2" fill="#1A0F0A" />
      {/* Body */}
      <rect x="18" y="24" width="28" height="20" fill="#8B5E3C" />
      <rect x="22" y="26" width="20" height="14" fill="#A0734A" />
      {/* Clipboard */}
      <rect x="46" y="26" width="14" height="18" fill="#8B6914" />
      <rect x="48" y="24" width="10" height="4" fill="#6B4F10" />
      <rect x="48" y="30" width="8" height="1" fill="#F5E6D3" />
      <rect x="48" y="33" width="6" height="1" fill="#F5E6D3" />
      <rect x="48" y="36" width="8" height="1" fill="#F5E6D3" />
      <rect x="48" y="39" width="4" height="1" fill="#4CAF50" />
      {/* Check marks */}
      <rect x="49" y="30" width="1" height="1" fill="#4CAF50" />
      <rect x="49" y="33" width="1" height="1" fill="#4CAF50" />
      <rect x="49" y="36" width="1" height="1" fill="#DAA520" />
      {/* Calendar on chest */}
      <rect x="26" y="30" width="12" height="10" fill="#F5E6D3" />
      <rect x="26" y="30" width="12" height="3" fill="#FF9E6D" />
      <rect x="28" y="34" width="2" height="2" fill="#1A0F0A" />
      <rect x="32" y="34" width="2" height="2" fill="#1A0F0A" />
      <rect x="28" y="37" width="2" height="2" fill="#1A0F0A" />
      <rect x="32" y="37" width="2" height="2" fill="#4CAF50" />
      {/* Legs */}
      <rect x="20" y="44" width="8" height="16" fill="#6B3A1F" />
      <rect x="36" y="44" width="8" height="16" fill="#6B3A1F" />
      {/* Feet */}
      <rect x="18" y="58" width="12" height="4" fill="#5C3A1E" />
      <rect x="34" y="58" width="12" height="4" fill="#5C3A1E" />
    </svg>
  );
}

const ANT_COMPONENTS = [BuilderAnt, AdvocateAnt, OrganizerAnt];

export default function JoinRoom() {
  const [activeRole, setActiveRole] = useState<number | null>(null);

  return (
    <section id="join" className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Room frame */}
        <div className="room-frame bg-earth-brown/40 p-6 sm:p-10 relative overflow-hidden">
          {/* Torch glows */}
          <div className="absolute -left-4 top-1/3 w-20 h-20 rounded-full bg-amber-glow/25 torch-glow" />
          <div className="absolute -right-4 top-1/3 w-20 h-20 rounded-full bg-amber-glow/25 torch-glow" style={{ animationDelay: "0.5s" }} />

          <div className="relative z-10">
            {/* Header */}
            <h2 className="font-[family-name:var(--font-pixel)] text-base sm:text-lg text-amber-glow text-center mb-3">
              Join the Movement
            </h2>
            <p className="font-[family-name:var(--font-silk)] text-sm text-text-dim text-center mb-10 max-w-lg mx-auto">
              We&apos;re looking for builders, designers, writers, and anyone who
              wants to use their skills for social good.
            </p>

            {/* Three ant characters on pedestals */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {ROLES.map((role, i) => {
                const AntComponent = ANT_COMPONENTS[i];
                return (
                  <div key={role.id} className="text-center relative">
                    {/* Speech bubble (shown on click) */}
                    {activeRole === i && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full bg-text-warm text-earth-deep p-3 max-w-[200px] z-20 border-2 border-earth-brown">
                        <p className="font-[family-name:var(--font-silk)] text-[11px] leading-relaxed">
                          {role.description}
                        </p>
                        {/* Speech bubble tail */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-text-warm" />
                        </div>
                      </div>
                    )}

                    {/* Ant on pedestal */}
                    <button
                      onClick={() =>
                        setActiveRole(activeRole === i ? null : i)
                      }
                      className="mx-auto mb-3 cursor-pointer hover:scale-105 transition-transform focus:outline-none"
                    >
                      <AntComponent />
                    </button>

                    {/* Pedestal */}
                    <div className="mx-auto w-20 h-4 bg-earth-mid rounded-t" />
                    <div className="mx-auto w-24 h-3 bg-earth-brown" />

                    <h4 className="font-[family-name:var(--font-pixel)] text-[9px] text-text-warm mt-3">
                      {role.title}
                    </h4>
                    <p className="font-[family-name:var(--font-silk)] text-[10px] text-text-dim mt-1 sm:hidden">
                      {role.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Notice board with CTA */}
            <div className="bg-earth-deep/50 border-2 border-earth-mid/40 p-6 text-center max-w-md mx-auto">
              {/* Notice board nails */}
              <div className="flex justify-between mb-4">
                <div className="w-3 h-3 rounded-full bg-earth-mid" />
                <div className="w-3 h-3 rounded-full bg-earth-mid" />
              </div>

              <a
                href={SITE.volunteerForm}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn text-[10px]! inline-block mb-4"
              >
                Volunteer / Join Committee →
              </a>

              {/* Mailbox */}
              <div className="flex items-center justify-center gap-2 mt-3">
                <svg width="16" height="16" viewBox="0 0 16 16" className="pixel-render" style={{ shapeRendering: "crispEdges" }}>
                  <rect x="1" y="4" width="14" height="10" fill="#8B6914" />
                  <rect x="3" y="6" width="10" height="6" fill="#6B4F10" />
                  <rect x="1" y="4" width="7" height="5" fill="#A0734A" />
                  <rect x="8" y="4" width="7" height="5" fill="#A0734A" />
                </svg>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-[family-name:var(--font-silk)] text-[11px] text-brand-green hover:text-brand-green/80"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

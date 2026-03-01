"use client";

import { useState } from "react";
import Image from "next/image";
import { ROLES, SITE } from "@/lib/constants";

const ANT_IMAGES = [
  "/sprites/ant-builder.png",
  "/sprites/ant-advocate.png",
  "/sprites/ant-organizer.png",
];

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
            <h2 className="font-[family-name:var(--font-pixel)] text-lg sm:text-2xl text-amber-glow text-center mb-3">
              Join the Movement
            </h2>
            <p className="text-base sm:text-lg text-text-dim text-center mb-10 max-w-lg mx-auto">
              We&apos;re looking for builders, designers, writers, and anyone who
              wants to use their skills for social good.
            </p>

            {/* Three ant characters on pedestals */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {ROLES.map((role, i) => {
                return (
                  <div key={role.id} className="text-center relative">
                    {/* Speech bubble (shown on click) */}
                    {activeRole === i && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full bg-text-warm text-earth-deep p-3 max-w-[200px] z-20 border-2 border-earth-brown">
                        <p className="text-[11px] leading-relaxed">
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
                      className="mx-auto mb-3 cursor-pointer hover:scale-105 transition-transform focus:outline-none relative"
                    >
                      {/* Glow backdrop for contrast */}
                      <div className="absolute inset-0 bg-amber-glow/10 rounded-full blur-xl" />
                      <div className="relative w-[128px] h-[128px] flex items-end justify-center">
                        <Image
                          src={ANT_IMAGES[i]}
                          alt={role.title}
                          width={128}
                          height={128}
                          className="pixel-render object-contain max-h-[128px] w-auto"
                        />
                      </div>
                    </button>

                    {/* Pedestal */}
                    <div className="mx-auto w-20 h-4 bg-earth-mid rounded-t" />
                    <div className="mx-auto w-24 h-3 bg-earth-brown" />

                    <h4 className="font-[family-name:var(--font-pixel)] text-[11px] sm:text-xs text-text-warm mt-3">
                      {role.title}
                    </h4>
                    <p className="text-xs text-text-dim mt-1 sm:hidden">
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
                  className="text-xs sm:text-sm text-brand-green hover:text-brand-green/80"
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

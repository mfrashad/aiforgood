"use client";

import { useState } from "react";
import PixelLogo from "./PixelLogo";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-earth-deep/90 backdrop-blur-sm border-b-2 border-earth-brown">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <PixelLogo size={28} />
          <span className="font-[family-name:var(--font-pixel)] text-[10px] text-text-warm leading-tight">
            AI for Good
          </span>
          <span className="text-[8px] font-bold text-brand-green bg-brand-green/15 px-2 py-0.5 font-[family-name:var(--font-pixel)]">
            .MY
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-dim hover:text-text-warm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#join"
          className="hidden md:block pixel-btn text-[8px]! py-2! px-4!"
        >
          Join Us
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-text-warm transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-warm transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-warm transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-earth-deep border-t-2 border-earth-brown px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-text-dim hover:text-text-warm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setMobileOpen(false)}
            className="block pixel-btn text-[8px] text-center mt-2"
          >
            Join Us
          </a>
        </div>
      )}
    </nav>
  );
}

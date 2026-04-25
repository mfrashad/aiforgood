"use client";

import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span
            className="text-xl tracking-tight text-text-primary"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 700 }}
          >
            AI for Good
          </span>
          <span className="text-xs font-semibold text-clay bg-clay/15 px-2 py-0.5 rounded-full">
            .MY
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="btn-pill btn-pill-outline text-sm py-2 px-5"
          >
            Contact
          </a>
          <a
            href="/volunteer"
            className="btn-pill btn-pill-filled text-sm py-2 px-5"
          >
            Volunteer
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`mailto:${SITE.email}`}
              onClick={() => setMobileOpen(false)}
              className="btn-pill btn-pill-outline text-center"
            >
              Contact
            </a>
            <a
              href="/volunteer"
              onClick={() => setMobileOpen(false)}
              className="btn-pill btn-pill-filled text-center"
            >
              Volunteer
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

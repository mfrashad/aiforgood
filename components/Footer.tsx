import PixelLogo from "./PixelLogo";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-earth-deep border-t-4 border-earth-brown overflow-hidden">
      {/* Stalactites */}
      <div className="absolute top-0 left-0 w-full flex justify-around pointer-events-none">
        {[20, 40, 15, 55, 30, 45, 25, 35, 50, 60, 18, 42].map((h, i) => (
          <div
            key={i}
            className="stalactite"
            style={{
              width: 8 + (i % 3) * 4,
              height: h,
              opacity: 0.4 + (i % 3) * 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Logo + description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <PixelLogo size={24} />
              <span className="font-[family-name:var(--font-pixel)] text-[9px] text-text-warm">
                AI for Good
              </span>
            </div>
            <p className="text-xs text-text-dim leading-relaxed max-w-sm">
              Open-source AI projects, community, and advocacy for social impact
              in Southeast Asia and beyond. Built by the community, for the
              community.
            </p>
          </div>

          {/* Initiatives */}
          <div>
            <h4 className="font-[family-name:var(--font-pixel)] text-[8px] text-text-dim uppercase tracking-widest mb-4">
              Initiatives
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="#community"
                className="text-sm text-text-dim hover:text-text-warm transition-colors"
              >
                Community
              </a>
              <a
                href="#advocacy"
                className="text-sm text-text-dim hover:text-text-warm transition-colors"
              >
                Advocacy
              </a>
              <a
                href="#projects"
                className="text-sm text-text-dim hover:text-text-warm transition-colors"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-[family-name:var(--font-pixel)] text-[8px] text-text-dim uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-dim hover:text-text-warm transition-colors"
              >
                GitHub
              </a>
              <a
                href={SITE.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-dim hover:text-text-warm transition-colors"
              >
                X / Twitter
              </a>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-dim hover:text-text-warm transition-colors"
              >
                TikTok
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm text-text-dim hover:text-text-warm transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar — stone tablet style */}
        <div className="border-t-2 border-earth-brown pt-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-[10px] text-text-dim">
            &copy; 2026 AI for Good Malaysia. Open source under MIT License.
          </p>
          <p className="text-[10px] text-text-dim">
            A community initiative from Southeast Asia.
          </p>
        </div>
      </div>
    </footer>
  );
}

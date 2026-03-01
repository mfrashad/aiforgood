import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section className="relative py-8 px-6 bg-earth-brown/30">
      {/* Wooden sign background */}
      <div className="max-w-4xl mx-auto wooden-sign rounded px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-[family-name:var(--font-pixel)] text-lg sm:text-xl text-amber-glow">
                {stat.value}
              </div>
              <div className="font-[family-name:var(--font-silk)] text-[10px] sm:text-xs text-text-warm/70 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

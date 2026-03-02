import Image from "next/image";
import { VISION } from "@/lib/constants";

export default function VisionSection() {
  return (
    <section id="vision" className="section-padding bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-section text-text-primary mb-12">
          Why This Exists
        </h2>

        {/* The Problem */}
        <div className="mb-14">
          <h3
            className="text-xl text-clay mb-5"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
          >
            The Problem
          </h3>
          {VISION.problem.map((p, i) => (
            <p
              key={i}
              className="text-xl text-text-primary leading-relaxed mb-4 last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>

        {/* The Vision */}
        <h3
          className="text-xl text-olive mb-6"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
        >
          The Vision
        </h3>
        <div className="grid sm:grid-cols-3 gap-5">
          {VISION.vision.map((item, i) => (
            <div key={i} className="card-flat overflow-hidden">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4
                  className="text-lg text-text-primary mb-2"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                >
                  {item.title}
                </h4>
                <p className="text-base text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

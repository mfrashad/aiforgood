export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/sprites/hero-illustration.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-bg/70" />

      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,20,19,0.3) 0%, rgba(20,20,19,0.1) 40%, rgba(20,20,19,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-text-secondary bg-surface/60 backdrop-blur-sm px-5 py-2 rounded-full border border-border">
          OPEN SOURCE &middot; COMMUNITY &middot; MALAYSIA
        </div>

        {/* Title */}
        <h1
          className="heading-display text-5xl sm:text-7xl md:text-8xl text-text-primary mb-6"
        >
          AI for Good
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-4 leading-relaxed">
          A community of AI builders using AI for social good
        </p>
        <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Shipping open-source tools, helping NGOs, and educating communities
          in Southeast Asia and beyond.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/volunteer" className="btn-pill btn-pill-clay text-base px-8 py-3">
            Become a Volunteer
          </a>
          <a
            href="#projects"
            className="btn-pill btn-pill-outline text-base px-8 py-3"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-text-tertiary"
        >
          <path d="M7 10l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}

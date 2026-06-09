import Image from "next/image";
import { FEATURED_PROJECTS, SITE } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-medium text-olive bg-olive/15 px-3 py-1 rounded-full inline-block mb-4">
            ACTIVE
          </span>
          <h2 className="heading-section text-text-primary mb-3">
            Research &amp; Experiments
          </h2>
          <p className="text-lg text-text-secondary">
            Visualizing AI issues with open data
          </p>
        </div>

        {/* Featured projects */}
        {FEATURED_PROJECTS.map((project) => (
          <div key={project.title} className="card-flat overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <span className="text-xs font-medium text-olive bg-olive/15 px-3 py-1 rounded-full inline-block mb-4">
                  FEATURED
                </span>
                <h3
                  className="text-2xl text-text-primary mb-3"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                >
                  {project.title}
                </h3>
                <p className="text-[15px] text-text-secondary leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-surface-raised text-text-secondary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-clay text-sm py-2 px-5"
                  >
                    Live Demo &rarr;
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-outline text-sm py-2 px-5"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 relative min-h-[240px]">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Submit / Shared Resources */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="card-flat border border-border border-dashed p-8 text-center">
            <div className="text-3xl text-text-tertiary mb-3">+</div>
            <h4
              className="text-base text-text-primary mb-2"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
            >
              Your Experiment Here
            </h4>
            <p className="text-sm text-text-secondary mb-4">
              Have a small open data project that makes an AI issue tangible? We want to feature it.
            </p>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-clay hover:text-clay-hover transition-colors"
            >
              Submit a Project &rarr;
            </a>
          </div>

          <div className="card-flat border border-border border-dashed p-8 text-center">
            <div className="text-3xl text-text-tertiary mb-3">+</div>
            <h4
              className="text-base text-text-primary mb-2"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
            >
              Shared Datasets
            </h4>
            <p className="text-sm text-text-secondary mb-4">
              Reusable open datasets and APIs from our research experiments.
              Coming soon.
            </p>
            <span className="text-sm text-text-tertiary">In Progress</span>
          </div>
        </div>
      </div>
    </section>
  );
}

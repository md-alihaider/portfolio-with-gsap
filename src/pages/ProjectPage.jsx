import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "../data/data";

gsap.registerPlugin(ScrollTrigger);
const ProjectPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Section header
      gsap.from(".projects-header > *", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 80%",
          once: true,
        },
      });

      // Each project
      gsap.utils.toArray(".project-item").forEach((project) => {
        const image = project.querySelector(".project-image");
        const info = project.querySelector(".project-info");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            once: true,
          },
        });

        tl.from(image, {
          opacity: 0,
          scale: 0.96,
          duration: 0.8,
          ease: "power3.out",
        }).from(
          info,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        );
      });
    },
    {
      scope: container,
    },
  );
  return (
    <section
      ref={container}
      id="projects"
      className="relative rounded-b-[3rem] bg-(--bg-primary) px-6 py-32 text-(--text-primary) md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="projects-header mb-24 max-w-4xl">
          <span className="text-sm tracking-[0.2em] text-(--accent-cyan)">
            {projectsData.sectionLabel}
          </span>

          <h2 className="mt-5 text-5xl font-medium tracking-tight md:text-7xl lg:text-8xl">
            {projectsData.heading}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-(--text-secondary) md:text-lg">
            {projectsData.description}
          </p>
        </div>

        {/* Projects */}
        <div>
          {projectsData.projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.id}
                className="project-item border-t border-(--border) py-16 md:py-24"
              >
                <div
                  className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                    isReversed ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div className="project-image group relative">
                    <div className="relative overflow-hidden rounded-3xl bg-(--bg-secondary)">
                      {/* Project Image */}
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />

                      {/* Project Number */}
                      <span className="absolute right-5 top-5 text-xs tracking-[0.2em] text-(--text-secondary)">
                        {project.number} /
                      </span>

                      {/* View Button */}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-5 right-5 flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                        aria-label={`View ${project.title} live`}
                      >
                        <ExternalLink size={17} />
                      </a>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="project-info max-w-lg">
                    <span className="text-xs tracking-[0.2em] text-(--text-muted)">
                      {project.featured
                        ? `${project.number} / FEATURED`
                        : project.number}
                    </span>

                    <h3 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-(--text-muted) md:text-base">
                      {project.subtitle}
                    </p>

                    <p className="mt-4 text-base leading-relaxed text-(--text-secondary) md:text-lg">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <p className="mt-6 text-sm text-(--text-muted)">
                      {project.technologies.join(" · ")}
                    </p>

                    {/* Links */}
                    <div className="mt-8 flex items-center gap-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-sm text-(--text-secondary) transition-colors duration-300 hover:text-(--text-primary)"
                      >
                        <FaGithub
                          size={17}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                        GitHub
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-sm text-(--text-secondary) transition-colors duration-300 hover:text-(--accent-cyan)"
                      >
                        <ExternalLink
                          size={16}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-full bg-linear-to-b from-(--bg-primary) to-transparent" />
    </section>
  );
};

export default ProjectPage;
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MoveDown, MoveRight } from "lucide-react";
import { useRef } from "react";

const HomePage = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".availability", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-line", {
        y: 70,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.18,
      });

      gsap.from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(".hero-buttons", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.from(".hero-meta", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.to(".scroll-arrow", {
        y: 6,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      const cta = document.querySelector(".hero-cta");

      const handleEnter = () => {
        gsap.to(".cta-arrow", {
          x: 5,
          duration: 0.6,
          ease: "power2.inOut",
        });
      };

      const handleLeave = () => {
        gsap.to(".cta-arrow", {
          x: 0,
          duration: 0.6,
          ease: "power2.inOut",
        });
      };

      cta.addEventListener("mouseenter", handleEnter);
      cta.addEventListener("mouseleave", handleLeave);
    },
    { scope: container },
  );
  return (
    <main>
      <section
        ref={container}
        id="home"
        className="
          relative
          min-h-svh
          overflow-hidden
          px-6
          pt-32
          pb-8
        "
      >
        <div
          className="
            mx-auto
            flex
            min-h-[calc(100svh-10rem)]
            max-w-7xl
            flex-col
            justify-between
          "
        >
          {/* Hero Content */}
          <div className="flex flex-col">
            {/* Availability */}
            <div className="mb-8 flex items-center gap-2 availability">
              <span className="h-2 w-2 rounded-full bg-green-400" />

              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-(--text-secondary)
                "
              >
                Available for work
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-6xl
                font-bold
                uppercase
                tracking-[-0.06em]
                leading-[0.85]
                text-(--text-primary)
              "
              style={{
                fontSize: "clamp(3.8rem, 9vw, 9rem)",
              }}
            >
              <span className="hero-line block">I Build</span>

              <span className="hero-line block">Digital</span>

              <span className="hero-line block">
                Experiences<span className="text-(--accent-orange)">.</span>
              </span>
            </h1>

            {/* Description + CTA */}
            <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <p
                className="
                hero-description
                  max-w-lg
                  text-base
                  leading-relaxed
                  text-(--text-secondary)
                  md:text-lg
                "
              >
                Full-stack developer crafting modern, interactive web
                experiences with clean design and thoughtful interactions.
              </p>

              {/* Buttons */}
              <div className="hero-buttons flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="
                    hero-cta
                    rounded-full
                    bg-(--text-primary)
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-(--bg-primary)
                    transition-transform
                    duration-300
                    hover:scale-105
                    flex items-center gap-3 justify-center
                    
                  "
                >
                  View My Work{" "}
                  <span className="cta-arrow">
                    <MoveRight size={16} />
                  </span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn"
                >
                  <span className="resume-btn-text">Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Metadata */}
          <div
            className="
            hero-meta
              mt-16
              flex
              items-end
              justify-between
              border-t
              border-(--border)
              pt-5
            "
          >
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-(--text-muted)
              "
            >
              India · 2026
            </span>

            <a
              href="#about"
              className="
              hero-scroll 
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-(--text-muted)
                transition-colors
                duration-300
                hover:text-(--text-primary)
                flex items-center justify-center gap-4
              "
            >
              <span>Scroll to explore</span>

              <span className="scroll-arrow">
                <MoveDown size={18} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

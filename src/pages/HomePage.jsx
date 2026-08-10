import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HomePage = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".availability", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay:0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-line", {
        y: 70,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.18,
      });
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
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="
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
                  "
                >
                  View My Work →
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-white/5
                    px-6
                    py-3.5
                    text-sm
                    font-medium
                    text-(--text-primary)
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-white/40
                    hover:bg-white/10
                  "
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Metadata */}
          <div
            className="
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
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-(--text-muted)
                transition-colors
                duration-300
                hover:text-(--text-primary)
              "
            >
              Scroll to explore ↓
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

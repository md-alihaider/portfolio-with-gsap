import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MoveDown, MoveRight } from "lucide-react";
import { useRef } from "react";

import { heroData, personalInfo } from "../data/data";

const HomePage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const root = container.current;

      if (!root) return;

      const availability = root.querySelector(".availability");
      const heroLines = root.querySelectorAll(".hero-line");
      const description = root.querySelector(".hero-description");
      const buttons = root.querySelector(".hero-buttons");
      const meta = root.querySelector(".hero-meta");
      const scrollArrow = root.querySelector(".scroll-arrow");
      const cta = root.querySelector(".hero-cta");
      const ctaArrow = root.querySelector(".cta-arrow");

      /*
       * --------------------------------
       * Initial Hero State
       * --------------------------------
       *
       * Hide everything immediately while
       * the loading screen is visible.
       */
      gsap.set(availability, {
        y: 25,
        opacity: 0,
      });

      gsap.set(heroLines, {
        y: 50,
        opacity: 0,
      });

      gsap.set(description, {
        y: 25,
        opacity: 0,
      });

      gsap.set(buttons, {
        y: 25,
        opacity: 0,
      });

      gsap.set(meta, {
        opacity: 0,
      });

      /*
       * --------------------------------
       * Hero Entrance Animation
       * --------------------------------
       */
      const playHeroAnimation = () => {
        const tl = gsap.timeline();

        // Availability
        tl.to(availability, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        })

          // Heading
          .to(
            heroLines,
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.45",
          )

          // Description + buttons together
          .to(
            [description, buttons],
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.05,
            },
            "-=0.55",
          )

          // Bottom metadata
          .to(
            meta,
            {
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.35",
          );
      };

      /*
       * --------------------------------
       * Loader → Hero
       * --------------------------------
       */
      const handleLoaderComplete = () => {
        playHeroAnimation();
      };

      window.addEventListener(
        "loaderComplete",
        handleLoaderComplete,
      );

      /*
       * --------------------------------
       * Scroll Arrow
       * --------------------------------
       */
      if (scrollArrow) {
        gsap.to(scrollArrow, {
          y: 6,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }

      /*
       * --------------------------------
       * CTA Hover
       * --------------------------------
       */
      const handleEnter = () => {
        if (!ctaArrow) return;

        gsap.to(ctaArrow, {
          x: 5,
          duration: 0.6,
          ease: "power2.inOut",
        });
      };

      const handleLeave = () => {
        if (!ctaArrow) return;

        gsap.to(ctaArrow, {
          x: 0,
          duration: 0.6,
          ease: "power2.inOut",
        });
      };

      if (cta) {
        cta.addEventListener("mouseenter", handleEnter);
        cta.addEventListener("mouseleave", handleLeave);
      }

      /*
       * --------------------------------
       * Cleanup
       * --------------------------------
       */
      return () => {
        window.removeEventListener(
          "loaderComplete",
          handleLoaderComplete,
        );

        if (cta) {
          cta.removeEventListener("mouseenter", handleEnter);
          cta.removeEventListener("mouseleave", handleLeave);
        }
      };
    },
    {
      scope: container,
    }
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
            <div className="availability mb-8 flex items-center gap-2">
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
                {personalInfo.availability}
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
              <span className="hero-line block">
                {heroData.heading.line1}
              </span>

              <span className="hero-line block">
                {heroData.heading.line2}
              </span>

              <span className="hero-line block">
                {heroData.heading.line3}
                <span className="text-(--accent-orange)">.</span>
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
                {heroData.description}
              </p>

              {/* Buttons */}
              <div className="hero-buttons flex flex-wrap gap-3">
                <a
                  href={heroData.primaryCta.href}
                  className="
                    hero-cta
                    flex
                    items-center
                    justify-center
                    gap-3
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
                  {heroData.primaryCta.label}

                  <span className="cta-arrow">
                    <MoveRight size={16} />
                  </span>
                </a>

                <a
                  href={heroData.resumeCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn"
                >
                  <span className="resume-btn-text">
                    {heroData.resumeCta.label}
                  </span>
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
              {heroData.location}
            </span>

            <a
              href={heroData.scroll.href}
              className="
                hero-scroll
                flex
                items-center
                justify-center
                gap-4
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
              <span>{heroData.scroll.label}</span>

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
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { footerData } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".footer-label", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(
          ".footer-heading",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".footer-links",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".footer-divider",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .from(
          ".footer-bottom",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3",
        );
    },
    {
      scope: container,
    },
  );

  return (
    <footer
      ref={container}
      className="rounded-t-[3rem] bg-(--bg-secondary) px-6 py-16 text-(--text-primary) md:px-10 md:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Footer Label */}
        <span className="footer-label text-sm tracking-[0.2em] text-(--accent-cyan)">
          {footerData.sectionLabel}
        </span>

        {/* Main Content */}
        <div className="mt-10 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10 lg:mt-12">
          {/* Closing Statement */}
          <div>
            <h2 className="footer-heading max-w-xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-tighter">
              {footerData.heading.line1}
              <br />
              {footerData.heading.line2}
            </h2>
          </div>

          {/* Navigation */}
          <div className="footer-links md:pt-2">
            <span className="text-sm font-medium tracking-[0.18em] text-(--text-primary)">
              NAVIGATION
            </span>

            <nav className="mt-6 flex flex-col items-start gap-4">
              {footerData.navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base text-(--text-secondary) transition-colors duration-300 hover:text-(--accent-cyan)"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="footer-links md:pt-2">
            <span className="text-sm font-medium tracking-[0.18em] text-(--text-primary)">
              CONNECT
            </span>

            <nav className="mt-6 flex flex-col items-start gap-4">
              {footerData.connect.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-base text-(--text-secondary) transition-colors duration-300 hover:text-(--accent-cyan)"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider mt-14 h-px w-full bg-(--border) md:mt-20" />

        {/* Bottom Row */}
        <div className="footer-bottom mt-5 flex flex-col gap-5 text-sm md:flex-row md:items-end md:justify-between">
          {/* Identity */}
          <div className="flex items-end gap-6">
            <span className="text-2xl font-medium tracking-tight text-(--text-primary)">
              {footerData.identity.initials}
            </span>

            <div>
              <p className="text-base text-(--text-secondary)">
                {footerData.identity.name}
              </p>

              <p className="mt-1 text-sm text-(--text-muted)">
                {footerData.identity.copyright}
              </p>
            </div>
          </div>

          {/* Built With */}
          <p className="text-sm text-(--text-secondary)">
            {footerData.builtWith}
          </p>

          {/* Back To Top */}
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-3 text-sm tracking-[0.15em] text-(--text-secondary) transition-colors duration-300 hover:text-(--accent-cyan)"
          >
            <span>{footerData.backToTop}</span>

            <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

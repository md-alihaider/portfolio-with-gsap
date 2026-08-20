import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { contactData } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          once: true,
        },
      });

      // Section label
      tl.from(".contact-label", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })

        // Main heading
        .from(
          ".contact-heading",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2",
        )

        // Divider
        .from(
          ".contact-divider",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.25",
        )

        // Bottom content
        .from(
          ".contact-content",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35",
        );
    },
    {
      scope: container,
    },
  );

  return (
    <section
      ref={container}
      id="contact"
      className="bg-transparent px-6 py-40 text-(--text-primary) md:px-10 md:py-52 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <span className="contact-label inline-block text-sm tracking-[0.2em] text-(--accent-cyan)">
          {contactData.sectionLabel}
        </span>

        {/* Main Heading */}
        <div className="mt-8 max-w-6xl">
          <h2 className="contact-heading text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.9] tracking-tighter">
            Let's build
            <br />
            something great
            <span className="text-(--accent-orange)">.</span>
          </h2>
        </div>

        {/* Contact Details */}
        <div className="mt-24 md:mt-32">
          {/* Divider */}
          <div className="contact-divider h-px w-full bg-(--border)" />

          <div className="contact-content grid gap-12 pt-8 md:grid-cols-2 md:items-end">
            {/* Message + Email */}
            <div>
              <p className="max-w-md text-lg leading-relaxed text-(--text-secondary) md:text-xl">
                {contactData.message.title}
                <br />
                {contactData.message.subtitle}
              </p>

              <a
                href={contactData.email.href}
                className="mt-8 inline-block text-base text-(--text-primary) underline decoration-(--border) underline-offset-8 transition-colors duration-300 hover:text-(--accent-cyan)"
              >
                {contactData.email.value}
              </a>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
              {/* Email */}
              <a
                href={contactData.email.href}
                className="group flex items-center gap-2 text-sm tracking-[0.15em] text-(--text-secondary) transition-colors duration-300 hover:text-(--text-primary)"
              >
                <span>{contactData.email.label}</span>

                <span className="text-(--accent-orange) transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              {/* Other Links */}
              {contactData.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2 text-sm tracking-[0.15em] text-(--text-secondary) transition-colors duration-300 hover:text-(--text-primary)"
                >
                  <span>{link.label}</span>

                  <span className="text-(--accent-orange) transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { aboutData } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

const AboutMePage = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".about-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about-header",
          start: "top 85%",
          once: true,
        },
      });
      gsap.from(".about-heading-line", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,

        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 80%",
          once: true,
        },
      });
      gsap.from(".about-photo", {
        opacity: 0,
        scale: 0.94,
        y: 40,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about-photo",
          start: "top 85%",
          once: true,
        },
      });
      gsap.from(".about-intro", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 85%",
          once: true,
        },
      });
      gsap.from(".about-info-card", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about-info-card",
          start: "top 85%",
          once: true,
        },
      });
      gsap.from(".about-tech-item", {
        x: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about-technologies",
          start: "top 85%",
          once: true,
        },
      });
      gsap.from(".about-building", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about-building",
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: container },
  );
  return (
    <section
      ref={container}
      id="about"
      className="
        relative
        min-h-svh
        overflow-hidden
        px-6
        py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* ========================================
            SECTION HEADER
        ======================================== */}

        <div className="about-header mb-14 flex items-center gap-3">
          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-(--accent-cyan)
            "
          >
            {aboutData.sectionNumber}
          </span>

          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-(--text-muted)
            "
          >
            {aboutData.sectionTitle}
          </span>
        </div>

        {/* ========================================
            BENTO GRID
        ======================================== */}

        <div className="grid gap-4 lg:grid-cols-12">
          {/* ======================================
              LARGE STATEMENT
          ====================================== */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/2
              p-7
              md:p-10
              lg:col-span-8
              lg:min-h-125
            "
          >
            <div className="flex h-full flex-col justify-between">
              {/* Small Label */}

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-(--text-muted)
                "
              >
                A little about me
              </span>

              {/* Main Statement */}

              <h2
                className="
                about-heading
                max-w-4xl
                text-5xl
                font-bold
                uppercase
                leading-[0.88]
                tracking-[-0.06em]
                text-(--text-primary)
                sm:text-6xl
                md:text-7xl
                lg:text-[5.5rem]
                xl:text-[6rem]
               "
              >
                <span className="about-heading-line block">
                  {aboutData.statement.line1}
                </span>

                <span className="about-heading-line block">
                  {aboutData.statement.line2}
                </span>

                <span className="about-heading-line block">
                  {aboutData.statement.line3}{" "}
                  <span className="text-(--accent-orange)">
                    {aboutData.statement.highlight}
                  </span>
                </span>
              </h2>
            </div>
          </div>

          {/* ======================================
              RIGHT COLUMN
          ====================================== */}

          <div className="grid gap-4 lg:col-span-4">
            {/* ====================================
                PHOTO CARD
            ==================================== */}

            <div
              className="
                about-photo
                group
                relative
                min-h-70
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-(--bg-secondary)
              "
            >
              {/* Image */}

              <img
                src={aboutData.photo.src}
                alt={aboutData.photo.alt}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                  grayscale
                  opacity-85
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-105
                  group-hover:grayscale-0
                "
              />

              {/* Dark overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-(--bg-primary)
                  via-(--bg-primary)/20
                  to-transparent
                "
              />

              {/* Subtle color glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-br
                  from-(--accent-blue)/10
                  via-transparent
                  to-(--accent-violet)/10
                "
              />

              {/* Photo information */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  z-10
                  flex
                  items-end
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-sm
                      font-medium
                      text-(--text-primary)
                    "
                  >
                    {aboutData.photo.name}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                      text-(--text-secondary)
                    "
                  >
                    {aboutData.photo.role}
                  </p>
                </div>

                <span
                  className="
                    text-xs
                    text-(--text-secondary)
                  "
                >
                  {aboutData.photo.number}
                </span>
              </div>
            </div>

            {/* ====================================
                SHORT INTRO
            ==================================== */}

            <div
              className="
                about-intro
                flex
                min-h-50
                flex-col
                justify-between
                rounded-3xl
                border
                border-white/10
                bg-white/2
                p-6
              "
            >
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-(--text-muted)
                "
              >
                {aboutData.intro.label}
              </span>

              <p
                className="
                  max-w-md
                  text-base
                  leading-relaxed
                  text-(--text-secondary)
                  md:text-lg
                "
              >
                {aboutData.intro.text}
              </p>
            </div>
          </div>

          {/* ======================================
              EDUCATION
          ====================================== */}

          <div
            className="
              about-info-card
              about-technologies
              rounded-3xl
              border
              border-white/10
              bg-white/2
              p-6
              md:p-8
              lg:col-span-4
            "
          >
            <div className="flex h-full flex-col justify-between">
              {/* Header */}

              <div className="flex items-center justify-between">
                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-(--text-muted)
                  "
                >
                  {aboutData.education.label}
                </span>

                <span
                  className="
                    text-xs
                    text-(--accent-cyan)
                  "
                >
                  {aboutData.education.number}
                </span>
              </div>

              {/* Education Information */}

              <div className="mt-12">
                <p
                  className="
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-(--text-primary)
                  "
                >
                  {aboutData.education.degree}
                </p>

                <p
                  className="
                    mt-2
                    max-w-55
                    text-sm
                    leading-relaxed
                    text-(--text-secondary)
                  "
                >
                  {aboutData.education.institution}
                </p>

                <p
                  className="
                    mt-4
                    text-xs
                    text-(--text-muted)
                  "
                >
                  {aboutData.education.duration}
                </p>

                {/* Bottom Information */}

                <div
                  className="
                    mt-6
                    flex
                    items-end
                    justify-between
                    border-t
                    border-white/10
                    pt-4
                  "
                >
                  <span
                    className="
                      text-xs
                      text-(--text-muted)
                    "
                  >
                    {aboutData.education.type}
                  </span>

                  <span
                    className="
                      text-lg
                      font-medium
                      text-(--text-primary)
                    "
                  >
                    {aboutData.education.score}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================
              CURRENTLY EXPLORING
          ====================================== */}

          <div
            className="
            about-info-card
              rounded-3xl
              border
              border-white/10
              bg-white/2
              p-6
              md:p-8
              lg:col-span-8
            "
          >
            {/* Header */}

            <div className="flex items-center justify-between">
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-(--text-muted)
                "
              >
                {aboutData.technologies.label}
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-(--text-muted)
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-green-400
                  "
                />
                {aboutData.technologies.status}
              </span>
            </div>

            {/* Technology List */}

            <div className="mt-8 grid sm:grid-cols-2">
              {aboutData.technologies.items.map((technology, index) => (
                <div
                  key={technology}
                  className="
                    about-tech-item
                    group
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/10
                    py-4
                  "
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="
                        text-[10px]
                        text-(--text-muted)
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        text-lg
                        text-(--text-primary)
                        transition-colors
                        duration-300
                        group-hover:text-(--accent-cyan)
                      "
                    >
                      {technology}
                    </span>
                  </div>

                  <span
                    className="
                      text-(--text-muted)
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ======================================
              CURRENTLY BUILDING
          ====================================== */}

          <div
            className="
              about-building
              flex
              flex-col
              gap-6
              rounded-3xl
              border
              border-white/10
              bg-(--bg-secondary)
              p-6
              md:flex-row
              md:items-center
              md:justify-between
              md:p-8
              lg:col-span-12
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-(--text-muted)
                "
              >
                {aboutData.building.label}
              </p>

              <p
                className="
                  mt-3
                  text-2xl
                  font-medium
                  tracking-tight
                  text-(--text-primary)
                  md:text-3xl
                "
              >
                {aboutData.building.title}
              </p>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-xs
                uppercase
                tracking-[0.15em]
                text-(--text-muted)
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-green-400
                "
              />
              {aboutData.building.status}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;

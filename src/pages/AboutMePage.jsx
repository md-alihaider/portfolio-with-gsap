import aboutImage from "../assets/Aboutme.jpg";

const AboutMePage = () => {
  const technologies = ["React", "Node.js", "GSAP", "TypeScript"];

  return (
    <section
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

        <div className="mb-14 flex items-center gap-3">
          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-(--accent-cyan)
            "
          >
            01
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
            About
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
              bg-white/[0.02]
              p-7
              md:p-10
              lg:col-span-8
              lg:min-h-[500px]
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
                Curious by
                <span className="block">default.</span>
                <span className="block">
                  Builder by{" "}
                  <span className="text-(--accent-orange)">choice.</span>
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
                group
                relative
                min-h-[280px]
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-(--bg-secondary)
              "
            >
              {/* Image */}

              <img
                src={aboutImage}
                alt="Ali Haider"
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
                  bg-gradient-to-t
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
                  bg-gradient-to-br
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
                    Ali Haider
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
                    Developer / Builder
                  </p>
                </div>

                <span
                  className="
                    text-xs
                    text-(--text-secondary)
                  "
                >
                  01
                </span>
              </div>
            </div>

            {/* ====================================
                SHORT INTRO
            ==================================== */}

            <div
              className="
                flex
                min-h-[200px]
                flex-col
                justify-between
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
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
                Who I am
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
                I'm Ali, a full-stack developer focused on creating modern,
                interactive digital experiences with clean design and thoughtful
                interactions.
              </p>
            </div>
          </div>

          {/* ======================================
              EDUCATION
          ====================================== */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
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
                  Education
                </span>

                <span
                  className="
                    text-xs
                    text-(--accent-cyan)
                  "
                >
                  01
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
                  BCA
                </p>

                <p
                  className="
                    mt-2
                    max-w-[220px]
                    text-sm
                    leading-relaxed
                    text-(--text-secondary)
                  "
                >
                  University Department
                  <br />
                  of Bio-Informatics
                </p>

                <p
                  className="
                    mt-4
                    text-xs
                    text-(--text-muted)
                  "
                >
                  2021 — 2024
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
                    Bachelor's Degree
                  </span>

                  <span
                    className="
                      text-lg
                      font-medium
                      text-(--text-primary)
                    "
                  >
                    70.5%
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
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
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
                Currently Exploring
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
                Learning
              </span>
            </div>

            {/* Technology List */}

            <div className="mt-8 grid sm:grid-cols-2">
              {technologies.map((technology, index) => (
                <div
                  key={technology}
                  className="
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
                Currently Building
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
                Full-stack digital experiences.
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
              Open to opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;

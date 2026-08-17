import { skillsData } from "../data/data";
import { useState } from "react";
import { Boxes, Database } from "lucide-react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGsap,
  SiVite,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiReacthookform,
  SiReactquery,
  SiShadcnui,
  SiBootstrap,
  SiNpm,
  SiVercel,
  SiAxios,
  SiFramer,
  SiRender,
  SiGithubpages,
  SiLucide,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const SkillCard = ({ skill, skillIcons }) => {
  const [isActive, setIsActive] = useState(false);

  const Icon = skillIcons[skill.icon];

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive((prev) => !prev)}
      className="group flex cursor-pointer items-center gap-3 rounded-full border bg-(--bg-secondary) px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        borderColor: isActive ? `${skill.color}66` : "var(--border)",
      }}
    >
      {/* Logo */}
      <span
        className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white"
        style={{
          perspective: "500px",
        }}
      >
        <span
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: isActive ? "rotateY(180deg)" : "rotateY(0deg)",
            backfaceVisibility: "hidden",
            transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {Icon && (
            <Icon className="text-[20px]" style={{ color: "#000000" }} />
          )}
        </span>

        {/* Colored back */}
        <span
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: isActive ? "rotateY(0deg)" : "rotateY(-180deg)",
            backfaceVisibility: "hidden",
            transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {Icon && (
            <Icon className="text-[20px]" style={{ color: skill.color }} />
          )}
        </span>
      </span>

      {/* Skill Name */}
      <span
        className="text-sm font-medium transition-colors duration-300"
        style={{
          color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
        }}
      >
        {skill.name}
      </span>
    </div>
  );
};
const SkillPage = () => {
  const skillIcons = {
    html: FaHtml5,
    css: FaCss3Alt,
    javascript: SiJavascript,
    typescript: SiTypescript,
    react: FaReact,
    tailwind: SiTailwindcss,
    gsap: SiGsap,
    framer: SiFramer,
    vite: SiVite,
    redux: SiRedux,
    "react-hook-form": SiReacthookform,
    tanstack: SiReactquery,
    shadcn: SiShadcnui,
    bootstrap: SiBootstrap,

    node: FaNodeJs,
    express: SiExpress,
    mongodb: SiMongodb,
    python: FaPython,

    git: FaGitAlt,
    github: FaGithub,
    vscode: VscVscode,
    npm: SiNpm,
    vercel: SiVercel,
    render: SiRender,
    "github-pages": SiGithubpages,
    lucide: SiLucide,
    axios: SiAxios,
    "react-icons": Boxes,
    dummyjson: Database,
  };
  return (
    <section
      id="skills"
      className="rounded-t-[3rem] bg-(--bg-secondary) px-6 py-24 text-(--text-primary) md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm tracking-[0.2em] text-(--accent-cyan)">
            {skillsData.sectionLabel}
          </span>

          <div className="mt-5 max-w-3xl">
            <h2 className="text-4xl font-medium tracking-tight md:text-6xl lg:text-7xl">
              {skillsData.heading}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-(--text-secondary) md:text-lg">
              {skillsData.description}
            </p>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skillsData.categories.map((category) => (
            <div key={category.id}>
              {/* Category Header */}
              <div className="mb-6 flex items-end justify-between border-b border-(--border) pb-4">
                <div>
                  <span className="text-xs tracking-[0.2em] text-(--text-muted)">
                    {category.number}
                  </span>

                  <h3 className="mt-2 text-2xl font-medium uppercase tracking-wide md:text-3xl">
                    {category.title}
                  </h3>
                </div>

                <p className="hidden max-w-sm text-right text-sm leading-relaxed text-(--text-muted) md:block">
                  {category.description}
                </p>
              </div>

              {/* Technology Pills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    skillIcons={skillIcons}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillPage;

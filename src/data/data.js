// src/data/data.js
import { Home, UserRound, Code2, FolderOpen, Mail } from "lucide-react";
export const personalInfo = {
  name: "Ali Haider",
  role: "Full-Stack Developer",
  location: "India",
  availability: "Available for work",
  email: "alihaiderbgp85@gmail.com",
};

export const navigation = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "About",
    href: "#about",
    icon: UserRound,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Code2,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FolderOpen,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
    contact: true,
  },
];

export const heroData = {
  heading: {
    line1: "I Build",
    line2: "Digital",
    line3: "Experiences",
  },

  description:
    "Full-stack developer crafting modern, interactive web experiences with clean design and thoughtful interactions.",

  primaryCta: {
    label: "View My Work",
    href: "#projects",
  },

  resumeCta: {
    label: "Download Resume",
    href: "/resume.pdf",
  },

  location: "India · 2026",

  scroll: {
    label: "Scroll to explore",
    href: "#about",
  },
};
// src/data/data.js

import aboutImage from "../assets/Aboutme.jpg";

export const aboutData = {
  sectionNumber: "01",
  sectionTitle: "About",

  label: "A little about me",

  statement: {
    line1: "Curious by",
    line2: "default.",
    line3: "Builder by",
    highlight: "choice.",
  },

  photo: {
    src: aboutImage,
    alt: "Ali Haider",
    name: "Ali Haider",
    role: "Developer / Builder",
    number: "01",
  },

  intro: {
    label: "Who I am",
    text: "I'm Ali, a full-stack developer focused on creating modern, interactive digital experiences with clean design and thoughtful interactions.",
  },

  education: {
    label: "Education",
    number: "01",
    degree: "BCA",
    institution: "Tilka Manjhi Bhagalpur University",
    duration: "2021 — 2024",
    type: "Bachelor's Degree",
    score: "70.5%",
  },

  technologies: {
    label: "Currently Exploring",
    status: "Learning",

    items: ["React", "Node.js", "GSAP", "TypeScript"],
  },

  building: {
    label: "Currently Building",
    title: "Full-stack digital experiences.",
    status: "Open to opportunities",
  },
};

export const skillsData = {
  sectionLabel: "03 / SKILLS",

  heading: "Technologies I work with.",

  description:
    "A practical stack I use to build responsive interfaces, smooth interactions, and modern web applications.",

  categories: [
    {
      id: "frontend",
      number: "01",
      title: "Frontend",
      description: "Building responsive and interactive digital experiences.",

      skills: [
        {
          name: "HTML",
          icon: "html",
          color: "#E34F26",
          type: "core",
        },
        {
          name: "CSS",
          icon: "css",
          color: "#1572B6",
          type: "core",
        },
        {
          name: "JavaScript",
          icon: "javascript",
          color: "#F7DF1E",
          type: "core",
        },
        {
          name: "TypeScript",
          icon: "typescript",
          color: "#3178C6",
          type: "core",
        },
        {
          name: "React",
          icon: "react",
          color: "#61DAFB",
          type: "core",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwind",
          color: "#06B6D4",
          type: "core",
        },
        {
          name: "GSAP",
          icon: "gsap",
          color: "#88CE02",
          type: "core",
        },
        {
          name: "Framer Motion",
          icon: "framer",
          color: "#0055FF",
          type: "supporting",
        },
        {
          name: "Vite",
          icon: "vite",
          color: "#646CFF",
          type: "supporting",
        },
        {
          name: "Redux",
          icon: "redux",
          color: "#764ABC",
          type: "supporting",
        },
        {
          name: "Redux Toolkit",
          icon: "redux",
          color: "#764ABC",
          type: "supporting",
        },
        {
          name: "React Hook Form",
          icon: "react-hook-form",
          color: "#EC5990",
          type: "supporting",
        },
        {
          name: "TanStack Query",
          icon: "tanstack",
          color: "#FF4154",
          type: "supporting",
        },
        {
          name: "shadcn/ui",
          icon: "shadcn",
          color: "#000000",
          type: "supporting",
        },
        {
          name: "Bootstrap",
          icon: "bootstrap",
          color: "#7952B3",
          type: "supporting",
        },
      ],
    },

    {
      id: "backend",
      number: "02",
      title: "Backend",
      description:
        "Working with server-side technologies and application data.",

      skills: [
        {
          name: "Node.js",
          icon: "node",
          color: "#339933",
          type: "core",
        },
        {
          name: "Express.js",
          icon: "express",
          color: "#000000",
          type: "core",
        },
        {
          name: "MongoDB",
          icon: "mongodb",
          color: "#47A248",
          type: "core",
        },
        {
          name: "Python",
          icon: "python",
          color: "#3776AB",
          type: "supporting",
        },
      ],
    },

    {
      id: "tools",
      number: "03",
      title: "Tools",
      description: "Tools and libraries that support my development workflow.",

      skills: [
        {
          name: "Git",
          icon: "git",
          color: "#F05032",
          type: "core",
        },
        {
          name: "GitHub",
          icon: "github",
          color: "#181717",
          type: "core",
        },
        {
          name: "VS Code",
          icon: "vscode",
          color: "#007ACC",
          type: "core",
        },
        {
          name: "npm",
          icon: "npm",
          color: "#CB3837",
          type: "core",
        },
        {
          name: "Vercel",
          icon: "vercel",
          color: "#000000",
          type: "core",
        },
        {
          name: "Render",
          icon: "render",
          color: "#46E3B7",
          type: "supporting",
        },
        {
          name: "GitHub Pages",
          icon: "github-pages",
          color: "#222222",
          type: "supporting",
        },
        {
          name: "Lucide React",
          icon: "lucide",
          color: "#F8FAFC",
          type: "supporting",
        },
        {
          name: "React Icons",
          icon: "react-icons",
          color: "#61DAFB",
          type: "supporting",
        },
        {
          name: "Axios",
          icon: "axios",
          color: "#5A29E4",
          type: "supporting",
        },
        {
          name: "DummyJSON",
          icon: "dummyjson",
          color: "#F59E0B",
          type: "supporting",
        },
      ],
    },
  ],
};
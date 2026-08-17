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

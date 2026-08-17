import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutMePage from "../pages/AboutMePage";
import SkillPage from "../pages/SkillPage";

gsap.registerPlugin(ScrollTrigger);

const AboutSkillsTransition = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const about = container.current.querySelector("#about");
      const skills = container.current.querySelector("#skills");

      if (!about || !skills) return;

      gsap.set(skills, {
        y: () => window.innerHeight,
      });

      gsap.to(skills, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: about,
          start: "bottom 110%",
          end: () => `+=${window.innerHeight}`,
          pin: about,
          pinSpacing: false,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    {
      scope: container,
    },
  );

  return (
    <div ref={container} className="relative">
      <AboutMePage />
      <SkillPage />
    </div>
  );
};

export default AboutSkillsTransition;

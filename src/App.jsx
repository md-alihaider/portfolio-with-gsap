import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Home/Navbar";
import HomePage from "./pages/HomePage";
import AboutSkillsTransition from "./components/AboutSkillsTransition";
import ProjectPage from "./pages/ProjectPage";
import LoadingScreen from "./components/LoadingScreen";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const link = event.target.closest('a[href^="#"]');

      if (!link) return;

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: -20,
        },
        ease: "power3.inOut",
      });
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Background */}
      <AuroraBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HomePage />

        <AboutSkillsTransition />

        <ProjectPage />

        <ContactPage />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Home/Navbar";
import HomePage from "./pages/HomePage";
import AboutSkillsTransition from "./components/AboutSkillsTransition";

const App = () => {
  return (
    <div className="relative min-h-screen text-white">
      <AuroraBackground />

      <Navbar />

      <main>
        <HomePage />
        <AboutSkillsTransition />
        {/* <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default App;

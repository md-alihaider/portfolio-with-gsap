import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Home/Navbar";
import HomePage from "./pages/HomePage";
import AboutSkillsTransition from "./components/AboutSkillsTransition";
import ProjectPage from "./pages/ProjectPage";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  return (
    <div className="relative min-h-screen text-white">
      <LoadingScreen/>
      <AuroraBackground />
      <Navbar />

      <main>
        <HomePage />
        <AboutSkillsTransition />
        <ProjectPage/>
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

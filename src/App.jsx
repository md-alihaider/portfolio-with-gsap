import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Home/Navbar";
import AboutMePage from "./pages/AboutMePage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="relative min-h-screen text-white">
      <AuroraBackground/>

      <Navbar />

      <main>
        <HomePage />
        <AboutMePage/>
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

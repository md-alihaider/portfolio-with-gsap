import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Home/Navbar";

const App = () => {
  return (
    <div className="relative min-h-screen text-white">
      <AuroraBackground/>

      <Navbar />

      <main>
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

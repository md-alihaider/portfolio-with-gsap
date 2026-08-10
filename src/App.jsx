import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Home/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="relative min-h-screen text-white">
      <AuroraBackground/>

      <Navbar />

      <main>
        <HomePage/>
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

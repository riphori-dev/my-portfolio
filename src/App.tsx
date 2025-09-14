// App.tsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
//import FreelanceBanner from "./components/FreelanceBanner";

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero isLoaded={isLoaded} />
        {/*<FreelanceBanner />*/}
        <TechStack />
        <Projects />
        <Skills />
        <About />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

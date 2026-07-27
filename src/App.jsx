
import { useEffect, useState } from "react";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const amount = Math.min(window.scrollY / 100, 18);
      setBlur(amount);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="siteBackground"
        style={{ filter: `blur(${blur}px)` }}
      ></div>

      <div className="siteOverlay"></div>

      <div className="siteContent">
        <Navbar />
        
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* FIRST PAGE */}
      <Hero />

      {/* SECOND PAGE ONWARDS */}
      <main className="premiumSections">
        <div className="premiumGrid"></div>

        <div className="aurora aurora1"></div>
        <div className="aurora aurora2"></div>
        <div className="aurora aurora3"></div>

        <div className="sectionsContent">
          <About />
          <Education />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
         
        </div>
      </main>
    </div>
  );
}

export default App;
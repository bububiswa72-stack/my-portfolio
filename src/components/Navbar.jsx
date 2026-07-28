import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* PREMIUM LOGO */}
      <a href="#home" className="brand" aria-label="Biswajit Nayak Home">
        <div className="brandMark">
          <span className="brandB">B</span>
          <span className="brandN">N</span>
          <span className="brandDot"></span>
        </div>

        <div className="brandText">
          <span>BISWAJIT</span>
          <small>AI • DEVELOPER</small>
        </div>
      </a>

      {/* NAVIGATION */}
      <div className="navLinks">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certifications</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* RESUME */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resumeBtn"
      >
        <span>Resume</span>
        <span className="resumeArrow">↗</span>
      </a>

    </nav>
  );
}

export default Navbar;
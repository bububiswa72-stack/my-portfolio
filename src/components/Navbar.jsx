import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        BN<span>.</span>
      </div>

      <div className="navLinks">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        
      </div>

      <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="resumeBtn"
>
  Resume
</a>
    </nav>
  );
}

export default Navbar;
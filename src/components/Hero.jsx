import "./Hero.css";

function Hero() {
  return (
    <section
      className="heroSection"
      id="home"
      style={{ backgroundImage: 'url("/profile.jpg")' }}
    >
      <div className="heroOverlay"></div>
      <div className="heroGlow heroGlowOne"></div>
      <div className="heroGlow heroGlowTwo"></div>

      <div className="heroContainer">
        <div className="heroContent">

          <div className="heroEyebrow">
            <span className="heroEyebrowDot"></span>
            MCA • AI & MACHINE LEARNING
          </div>

          <p className="heroHello">Hello, I'm</p>

          <h1 className="heroName">
            Biswajit <span>Nayak</span>
          </h1>

          <div className="heroRole">
            <span className="roleLine"></span>
            <h2>AI & Machine Learning Engineer</h2>
          </div>

          <p className="heroDescription">
            I build intelligent, practical and modern digital solutions
            using Machine Learning, Python and web technologies.
          </p>

          {/* MAIN BUTTONS */}
          <div className="heroActions">
            <a href="#contact" className="heroPrimaryBtn">
              <span>Hire Me</span>
              <span className="btnArrow">↗</span>
            </a>

            <a
              href="/resume.pdf"
              download="Biswajit_Nayak_Resume.pdf"
              className="heroSecondaryBtn"
            >
              <span>Download Resume</span>
              <span className="downloadArrow">↓</span>
            </a>
          </div>

          {/* BIGGER AVAILABILITY CARD */}
          <div className="heroAvailability">
            
            <div className="availabilityIcon">
              <span className="availabilityDot"></span>
            </div>

            <div className="availabilityText">
              <strong>Available for opportunities</strong>
              <small>Internships • Projects • Collaboration</small>
            </div>
          </div>
          <div className="heroCredibility">
<div className="credibilityItem">
    <strong>MCA</strong>
    <span>AI & ML</span>
  </div>

  <div className="credibilityDivider"></div>

  <div className="credibilityItem">
    <strong>Python</strong>
    <span>Development</span>
  </div>

  <div className="credibilityDivider"></div>

  <div className="credibilityItem">
    <strong>Machine Learning</strong>
    <span>Projects</span>
  </div>

  <div className="credibilityDivider"></div>

  <div className="credibilityItem">
    <strong>Full Stack</strong>
    <span>Applications</span>
  </div>
</div>
          {/* ICON ONLY SOCIAL BUTTONS */}
          <div className="heroSocials">

            {/* GitHub */}
            <a
              href="https://github.com/bububiswa72-stack"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.14v3.06c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/biswajit-nayak-b48ab83b6"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M5.34 3.5A2.34 2.34 0 1 1 .66 3.5a2.34 2.34 0 0 1 4.68 0ZM1.06 7h4.56v14.64H1.06V7Zm7.3 0h4.37v2h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8h-4.55v-7.09c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.75v7.21H8.36V7Z"
                />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:bububiswa72@gmail.com"
              className="socialIcon"
              aria-label="Email"
              title="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.5 5.5h17v13h-17zM4 6l8 6 8-6"
                />
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* TECHNOLOGIES */}
      <div className="heroTechStrip">
        <span>PYTHON</span>
        <i></i>
        <span>MACHINE LEARNING</span>
        <i></i>
        <span>REACT</span>
        <i></i>
        <span>JAVA</span>
      </div>

      {/* SCROLL */}
      <a
        href="#about"
        className="heroScroll"
        aria-label="Scroll to about section"
      >
        <span className="heroMouse">
          <span className="heroMouseWheel"></span>
        </span>
        <small>SCROLL</small>
      </a>

    </section>
  );
}

export default Hero;
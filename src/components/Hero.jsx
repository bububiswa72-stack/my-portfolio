import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
        <div className="heroBackground"></div>


      <div className="heroContent">
        <p className="hello">
          Hello, I'm
        </p>

        <h1>
          Biswajit <span>Nayak</span>
        </h1>

        <h2>
          AI & Machine Learning Engineer
        </h2>

        <p className="description">
          I build intelligent, practical and modern digital solutions
          using Machine Learning, Python and web technologies.
        </p>

        <div className="heroButtons">
          <a href="#contact" className="primaryBtn">
            Hire Me
          </a>

          <a href="/resume.pdf" download className="secondaryBtn">
            Download Resume
          </a>
        </div>

        <div className="socialText">
          <span>Available for internships & opportunities</span>
        </div>
      </div>

      <div className="scrollIndicator">
        <span></span>
      </div>

    </section>
  );
}

export default Hero;

import "./About.css";
import Lanyard from "./Lanyard";
function About() {
  return (
    <section className="about" id="about">
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

      <div className="aboutContent">

        <p className="aboutLabel">GET TO KNOW ME</p>

        <h2>
          About <span>Me</span>
        </h2>

        <p className="aboutText">
          I'm an MCA student specializing in Artificial Intelligence
          and Machine Learning. I enjoy building intelligent and
          practical applications using Machine Learning, Python and
          modern web technologies.
        </p>

        <p className="aboutText">
          My goal is to combine AI and software development to build
          useful, modern and user-friendly digital solutions.
        </p>

        <div className="aboutCards">
          <div className="aboutCard">
            <h3>MCA</h3>
            <p>AI & Machine Learning</p>
          </div>

          <div className="aboutCard">
            <h3>Developer</h3>
            <p>Full Stack Development</p>
          </div>

          <div className="aboutCard">
            <h3>AIML</h3>
            <p>Machine Learning & Python</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
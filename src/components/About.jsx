import "./About.css";
import Lanyard from "./Lanyard";

function About() {
  return (
    <section className="about" id="about">
      {/* Decorative background */}
      <div className="aboutGrid"></div>
      <div className="aboutGlow aboutGlowOne"></div>
      <div className="aboutGlow aboutGlowTwo"></div>

      <div className="aboutWrapper">

        {/* =========================
            LEFT — 3D LANYARD
        ========================= */}

        <div className="aboutVisual">

          <div className="lanyardStage">
            <div className="lanyardGlow"></div>

            <Lanyard
              position={[0, 0, 20]}
              gravity={[0, -40, 0]}
              frontimage="/idcard.jpeg"
              backimage="/idback.png"
              imagefit="cover"
            />
          </div>

          <div className="visualBottom">
            <span className="visualLine"></span>
            DRAG THE CARD
            <span className="visualLine"></span>
          </div>

        </div>

        {/* =========================
            RIGHT — CONTENT
        ========================= */}

        <div className="aboutContent">

          <div className="aboutTop">

            <p className="aboutLabel">
              <span className="labelLine"></span>
              GET TO KNOW ME
            </p>

            <div className="availabilityBadge">
              <span className="availabilityDot"></span>
              OPEN TO OPPORTUNITIES
            </div>

          </div>

          <h2>
            Building ideas into
            <span> intelligent experiences.</span>
          </h2>

          <p className="aboutLead">
            I'm an MCA student specializing in
            <strong> Artificial Intelligence & Machine Learning</strong>,
            focused on creating intelligent, practical and modern
            digital products.
          </p>

          <p className="aboutText">
            I combine machine learning with software development
            to build applications that are functional, user-friendly
            and designed to solve real-world problems.
          </p>

          {/* =========================
              QUICK INFO
          ========================= */}

          <div className="aboutInfo">

            <div className="infoItem">
              <span className="infoNumber">01</span>

              <div>
                <span className="infoLabel">FOCUS</span>
                <strong>AI & Machine Learning</strong>
              </div>
            </div>

            <div className="infoItem">
              <span className="infoNumber">02</span>

              <div>
                <span className="infoLabel">DEVELOPMENT</span>
                <strong>Full Stack Web</strong>
              </div>
            </div>

            <div className="infoItem">
              <span className="infoNumber">03</span>

              <div>
                <span className="infoLabel">CORE</span>
                <strong>Python & DSA</strong>
              </div>
            </div>

          </div>

          {/* =========================
              TECH STACK
          ========================= */}

          <div className="aboutTech">

            <div className="techHeading">
              <span>TECH STACK</span>
              <span className="techHeadingLine"></span>
            </div>

            <div className="techList">

              <div className="tech">
                <span>PY</span>
                Python
              </div>

              <div className="tech">
                <span>ML</span>
                Machine Learning
              </div>

              <div className="tech">
                <span>JS</span>
                JavaScript
              </div>

              <div className="tech">
                <span>RE</span>
                React
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
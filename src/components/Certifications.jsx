import "./Certifications.css";

const certifications = [
  {
    title: "Machine Learning",
    issuer: "Add Organisation / Platform",
    year: "2026",
    certificate: "#",
  },
  {
    title: "Python Programming",
    issuer: "Add Organisation / Platform",
    year: "2026",
    certificate: "#",
  },
  {
    title: "Java Programming",
    issuer: "Add Organisation / Platform",
    year: "2026",
    certificate: "#",
  },
];

function Certifications() {
  return (
    <section className="certifications">
      <div className="certificationContainer">

        <div className="certificationHeading">
          <span>ACHIEVEMENTS</span>

          <h2>
            Certifications<span>.</span>
          </h2>

          <p>
            Certifications and courses completed as part of
            my learning and professional development.
          </p>
        </div>

        <div className="certificationGrid">
          {certifications.map((cert, index) => (
            <div className="certificationCard" key={index}>

              <div className="certificateIcon">
                ✓
              </div>

              <div className="certificateInfo">
                <span className="certificateYear">
                  {cert.year}
                </span>

                <h3>{cert.title}</h3>

                <p>{cert.issuer}</p>

                <a
                  href={cert.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="viewCertificate"
                >
                  View Certificate →
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;
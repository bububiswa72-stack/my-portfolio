import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      id: "01",
      category: "MACHINE LEARNING",
      title: "Machine Learning",
      organisation: "Organisation / Platform",
      link: "#",
    },
    {
      id: "02",
      category: "PROGRAMMING",
      title: "Python Programming",
      organisation: "Organisation / Platform",
      link: "#",
    },
    {
      id: "03",
      category: "PROGRAMMING",
      title: "Java Programming",
      organisation: "Organisation / Platform",
      link: "#",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="certContainer">

        {/* SECTION HEADER */}
        <div className="certHeader">
          <p className="certLabel">ACHIEVEMENTS</p>

          <h2>
            Certifications<span>.</span>
          </h2>

          <p className="certDescription">
            Certifications and courses completed as part of my learning
            and professional development.
          </p>
        </div>

        {/* CERTIFICATE CARDS */}
        <div className="certGrid">
          {certifications.map((cert) => (
            <article className="certificationCard" key={cert.id}>

              <div className="certNumber">
                {cert.id}
              </div>

              <div className="certIcon">
                <span>✓</span>
              </div>

              <div className="certInfo">
                <p className="certCategory">
                  {cert.category}
                </p>

                <h3>
                  {cert.title}
                </h3>

                <p className="certOrganisation">
                  {cert.organisation}
                </p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="certLink"
              >
                View Certificate
                <span>↗</span>
              </a>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;
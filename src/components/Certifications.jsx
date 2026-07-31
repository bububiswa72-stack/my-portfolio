import "./Certifications.css";
import {
  FaPython,
  FaGoogle,
  FaChartBar,
  FaBrain,
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiGeeksforgeeks, SiTata } from "react-icons/si";

function Certifications() {
  const certificates = [
    {
      id: "01",
      title: "GENAI Powered Data Analytics Job Simulation",
      category: "TATA",
      issuer: "Forage",
      icon: <SiTata />,
      file: "/certificates/TATA.pdf",
    },
    
    {
      id: "02",
      title: "Programming in c",
      category: "GFG",
      issuer: "GeeksforGeeks",
      icon: <SiGeeksforgeeks />,
      file: "/certificates/GFG Certificate.pdf",
    },
    {
      id: "03",
      title: "Innovating with Google Cloud AI",
      category: "CLOUD & AI",
      issuer: "Google Cloud",
      icon: <FaGoogle />,
      file: "/certificates/Innovating with google cloud AI.pdf",
    },
    {
      id: "04",
      title: "Introduction to AI",
      category: "ARTIFICIAL INTELLIGENCE",
      issuer: "AI Certification",
      icon: <FaBrain />,
      file: "/certificates/intro to AI.pdf",
    },
    {
      id: "05",
      title: "Machine Learning with AI Training",
      category: "INTERNSHALA TRAININGS",
      issuer: "AI / ML Training",
      icon: <FaBrain />,
      file: "/certificates/Machine learning with AI Training - Certificate.pdf",
    },
    {
      id: "06",
      title: "Power BI",
      category: "BUSINESS INTELLIGENCE",
      issuer: "Data Visualization",
      icon: <FaChartBar />,
      file: "/certificates/Power BI.pdf",
    },
    {
      id: "07",
      title: "Python for Beginners",
      category: "PROGRAMMING",
      issuer: "Python Certification",
      icon: <FaPython />,
      file: "/certificates/Python for beginners.pdf",
    },
    {
      id: "08",
      title: "Data Analytics",
      category: "DATA & ANALYTICS",
      issuer: "Professional Certification",
      icon: <FaChartBar />,
      file: "/certificates/Data analytics.pdf",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="certificationsContainer">

        {/* HEADING */}
        <div className="certificationsHeader">
          <p className="certificationsLabel">
            <span></span>
            ACHIEVEMENTS
          </p>

          <h2>
            Certifications<span>.</span>
          </h2>

          <p className="certificationsDescription">
            Certifications and credentials earned through continuous
            learning in AI, machine learning, programming, cloud and
            data technologies.
          </p>
        </div>

        {/* CERTIFICATE GRID */}
        <div className="certificateGrid">
          {certificates.map((certificate) => (
            <article
              className="certificateCard"
              key={certificate.id}
            >
              <div className="certificateTop">
                <span className="certificateNumber">
                  / {certificate.id}
                </span>

                <div className="certificateIcon">
                  {certificate.icon}
                </div>
              </div>

              <div className="certificateContent">
                <p className="certificateCategory">
                  {certificate.category}
                </p>

                <h3>{certificate.title}</h3>

                <p className="certificateIssuer">
                  {certificate.issuer}
                </p>
              </div>

              <a
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                className="certificateLink"
              >
                <span>View Credential</span>
                <FaExternalLinkAlt />
              </a>
            </article>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="certificationsBottom">
          <FaCertificate />

          <span>
            08 Professional Credentials
          </span>
        </div>

      </div>
    </section>
  );
}

export default Certifications;
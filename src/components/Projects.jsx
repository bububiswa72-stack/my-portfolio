import "./Projects.css";

const projects = [
  {
    id: "01",
    title: "Grocery Store Management System",
    category: "FULL STACK WEB APPLICATION",

    description:
      "A full-stack grocery store web application with product search, cart, quantity management, user login and database integration.",

    image: "/grocery.png",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
    ],

    // Apna Grocery Store GitHub link yahan paste karna
    github: "",

    // Deploy hone ke baad live link yahan paste karna
    live: "",
  },

  {
    id: "02",
    title: "Credit Card Fraud Detection",
    category: "MACHINE LEARNING • FRAUD DETECTION",

    description:
      "A machine learning system designed to identify fraudulent credit card transactions using data preprocessing, classification and model evaluation.",

    image: "/Creditcard.png",

    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NumPy",
      "Matplotlib",
    ],

    // Apna Credit Card project GitHub link
    github: "",

    // Agar live project nahi hai to empty hi rehne do
    live: "",
  },

  {
    id: "03",
    title: "Personal Portfolio",
    category: "FRONTEND DEVELOPMENT",

    description:
      "A modern responsive developer portfolio showcasing my skills, projects, education and professional profile.",

    image: "/Portfolio.png",

    technologies: [
      "React",
      "CSS",
      "JavaScript",
      "Vite",
    ],

    github:
      "https://github.com/bububiswa72-stack/my-portfolio",

    // Portfolio deploy hone ke baad link paste karna
    live: "",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projectsContainer">

        {/* ================================
            HEADER
        ================================= */}

        <div className="projectsHeader">
          <p className="projectsLabel">
            SELECTED WORK
          </p>

          <h2>
            Featured <span>Projects.</span>
          </h2>

          <p className="projectsIntro">
            A selection of projects built using modern web
            technologies, machine learning and practical
            problem-solving.
          </p>
        </div>

        {/* ================================
            PROJECT GRID
        ================================= */}

        <div className="projectsGrid">
          {projects.map((project) => (
            <article
              className="projectCard"
              key={project.id}
            >

              {/* NUMBER */}

              <div className="projectTop">
                <span className="projectNumber">
                  / {project.id}
                </span>

                <span className="projectType">
                  PROJECT
                </span>
              </div>

              {/* IMAGE */}

              <div className="projectImage">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                />
              </div>

              {/* CONTENT */}

              <div className="projectContent">

                <span className="projectCategory">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p className="projectDescription">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}

                <div className="projectTechnologies">
                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>

                {/* BUTTONS */}

                <div className="projectActions">

                  {/* GITHUB */}

                  <a
                    href={
                      project.github
                        ? project.github
                        : undefined
                    }
                    target={
                      project.github
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      project.github
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`projectGithub ${
                      !project.github
                        ? "projectDisabled"
                        : ""
                    }`}
                    onClick={(e) => {
                      if (!project.github) {
                        e.preventDefault();
                      }
                    }}
                    aria-disabled={!project.github}
                  >
                    <span className="buttonText">
                      GitHub
                    </span>

                    <span className="buttonArrow">
                      ↗
                    </span>
                  </a>

                  {/* LIVE PROJECT */}

                  <a
                    href={
                      project.live
                        ? project.live
                        : undefined
                    }
                    target={
                      project.live
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      project.live
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`projectLive ${
                      !project.live
                        ? "projectDisabled"
                        : ""
                    }`}
                    onClick={(e) => {
                      if (!project.live) {
                        e.preventDefault();
                      }
                    }}
                    aria-disabled={!project.live}
                  >
                    <span className="buttonText">
                      Live Project
                    </span>

                    <span className="buttonArrow">
                      ↗
                    </span>
                  </a>

                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
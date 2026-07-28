import "./Projects.css";

const projects = [
  {
    id: "01",
    title: "Grocery Store Management System",
    category: "FULL STACK WEB APPLICATION",
    description:
      "A full-stack grocery store web application with product search, cart, quantity management, user login and database integration.",
    image: "/grocery.png",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "#",
    live: "#",
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
    "Matplotlib"
  ],

  github: "#",
  live: "#",
},

  {
    id: "03",
    title: "Personal Portfolio",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A modern responsive developer portfolio showcasing my skills, projects, education and professional profile.",
    image: "/Portfolio.png",
    technologies: ["React", "CSS", "JavaScript", "Vite"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projectsContainer">

        {/* HEADING */}
        <div className="projectsHeader">

          <p className="projectsLabel">
            SELECTED WORK
          </p>

          <h2>
            Featured <span>Projects.</span>
          </h2>

          <p className="projectsIntro">
            A selection of projects built using modern web technologies,
            machine learning and practical problem-solving.
          </p>

        </div>

        {/* PROJECT CARDS */}
        <div className="projectsGrid">

          {projects.map((project) => (
            <article
              className="projectCard"
              key={project.id}
            >

              {/* TOP */}
              <div className="projectTop">

                <span className="projectNumber">
                  / {project.id}
                </span>

                <a
                  href={project.live}
                  className="projectArrow"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  ↗
                </a>

              </div>

              {/* IMAGE */}
              <div className="projectImage">

                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                />

                <div className="projectImageOverlay"></div>

                <span className="projectView">
                  VIEW PROJECT ↗
                </span>

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

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

                {/* BUTTONS */}
                <div className="projectActions">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="projectGithub"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="projectLive"
                  >
                    Live Project
                    <span>↗</span>
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
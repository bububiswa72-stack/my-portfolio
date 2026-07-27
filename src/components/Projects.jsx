import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Grocery Store Management System",
    description:
      "A full-stack grocery store web application with product search, cart, quantity management, user login and database integration.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    number: "02",
    title: "Machine Learning Project",
    description:
      "A machine learning application focused on data preprocessing, model training, prediction and performance evaluation.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    github: "#",
    live: "#",
  },
  {
    number: "03",
    title: "Personal Portfolio",
    description:
      "A responsive developer portfolio showcasing my skills, projects, education and professional profile.",
    tech: ["React", "CSS", "JavaScript", "Vite"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projectsContainer">

        <p className="projectsLabel">SELECTED WORK</p>

        <div className="projectsHeading">
          <div>
            <h2>
              Featured <span>Projects</span>
            </h2>

            <p>
              Some of the projects I've built while learning and
              exploring software development and AI.
            </p>
          </div>
        </div>

        <div className="projectsGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.number}>

              <div className="projectTop">
                <span>{project.number}</span>
                <span className="projectArrow">↗</span>
              </div>

              <div className="projectPreview">
                <span>{project.title}</span>
              </div>

              <div className="projectInfo">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="projectTech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="projectButtons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="liveProject"
                  >
                    Live Project ↗
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
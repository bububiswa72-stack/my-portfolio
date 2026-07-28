import "./Skills.css";

import {
  FaPython,
  FaJava,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCode,
  FaBrain,
} from "react-icons/fa";

const skills = [
  {
    number: "01",
    name: "Data Structures & Algorithms",
    category: "Problem Solving",
    icon: <FaCode />,
  },
  {
    number: "02",
    name: "Machine Learning",
    category: "AI / ML",
    icon: <FaBrain />,
  },
  {
    number: "03",
    name: "Python",
    category: "Programming",
    icon: <FaPython />,
  },
  {
    number: "04",
    name: "Java",
    category: "Programming",
    icon: <FaJava />,
  },
  {
    number: "05",
    name: "React",
    category: "Frontend",
    icon: <FaReact />,
  },
  {
    number: "06",
    name: "JavaScript",
    category: "Web Development",
    icon: <FaJs />,
  },
  {
    number: "07",
    name: "HTML & CSS",
    category: "Frontend",
    icon: (
      <div className="doubleIcon">
        <FaHtml5 />
        <FaCss3Alt />
      </div>
    ),
  },
  {
    number: "08",
    name: "MySQL",
    category: "Database",
    icon: <FaDatabase />,
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skillsGlow glowOne"></div>
      <div className="skillsGlow glowTwo"></div>

      <div className="skillsContainer">
        <div className="skillsHeader">
          <p className="skillsLabel">
            <span></span>
            MY EXPERTISE
          </p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p className="skillsDescription">
            Technologies and concepts I use to build modern,
            intelligent and practical applications.
          </p>
        </div>

        <div className="skillsGrid">
          {skills.map((skill) => (
            <article className="skillCard" key={skill.number}>
              <div className="skillGlow"></div>

              <div className="skillCardTop">
                <span className="skillNumber">
                  / {skill.number}
                </span>

                <div className="skillIcon">
                  {skill.icon}
                </div>
              </div>

              <div className="skillInfo">
                <h3>{skill.name}</h3>

                <p>{skill.category}</p>

                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
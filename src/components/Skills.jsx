import "./Skills.css";

import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
} from "react-icons/si";

import { FaCode } from "react-icons/fa6";

const skills = [
  {
    number: "01",
    icon: <FaCode />,
    title: "Data Structures & Algorithms",
    subtitle: "Problem Solving",
    tags: ["Arrays", "Trees", "Graphs"],
  },
  {
    number: "02",
    icon: <span className="mlIcon">AI</span>,
    title: "Machine Learning",
    subtitle: "AI / ML",
    tags: ["Scikit-learn", "Pandas", "NumPy"],
  },
  {
    number: "03",
    icon: <FaPython />,
    title: "Python",
    subtitle: "Programming",
    tags: ["OOP", "Pandas", "NumPy"],
  },
  {
    number: "04",
    icon: <FaJava />,
    title: "Java",
    subtitle: "Programming",
    tags: ["OOP", "Collections", "DSA"],
  },
  {
    number: "05",
    icon: <FaReact />,
    title: "React",
    subtitle: "Frontend",
    tags: ["Components", "Hooks", "Vite"],
  },
  {
    number: "06",
    icon: <SiJavascript />,
    title: "JavaScript",
    subtitle: "Web Development",
    tags: ["ES6+", "DOM", "APIs"],
  },
  {
    number: "07",
    icon: (
      <div className="dualIcon">
        <FaHtml5 />
        <FaCss3Alt />
      </div>
    ),
    title: "HTML & CSS",
    subtitle: "Frontend",
    tags: ["HTML5", "CSS3", "Responsive"],
  },
  {
    number: "08",
    icon: <SiMysql />,
    title: "MySQL",
    subtitle: "Database",
    tags: ["SQL", "CRUD", "Joins"],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skillsContainer">

        <p className="skillsLabel">
          MY EXPERTISE
        </p>

        <h2 className="skillsTitle">
          Skills & <span>Technologies</span>
        </h2>

        <p className="skillsText">
          Technologies and concepts I use to build modern,
          intelligent and practical applications.
        </p>

        <div className="skillsGrid">
          {skills.map((skill) => (
            <div className="skillCard" key={skill.number}>

              <div className="skillTop">
                <span className="skillNumber">
                  / {skill.number}
                </span>

                <div className="skillIcon">
                  {skill.icon}
                </div>
              </div>

              <div className="skillContent">
                <h3>{skill.title}</h3>
                <p>{skill.subtitle}</p>

                <div className="skillTags">
                  {skill.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
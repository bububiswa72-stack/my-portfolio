import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Data Structures & Algorithms", level: "Problem Solving" },
    { name: "Machine Learning", level: "AI / ML" },
    { name: "Python", level: "Programming" },
    { name: "Java", level: "Programming" },
    { name: "React", level: "Frontend" },
    { name: "JavaScript", level: "Web Development" },
    { name: "HTML & CSS", level: "Frontend" },
    { name: "MySQL", level: "Database" },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skillsContainer">

        <p className="sectionLabel">MY EXPERTISE</p>

        <h2>
          Skills & <span>Technologies</span>
        </h2>

        <p className="skillsDescription">
          Technologies and concepts I use to build modern,
          intelligent and practical applications.
        </p>

        <div className="skillsGrid">
          {skills.map((skill, index) => (
            <div className="skillCard" key={skill.name}>

              <div className="skillTop">
                <span className="skillNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="skillArrow">↗</span>
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.level}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
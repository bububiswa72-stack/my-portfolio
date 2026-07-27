import "./Education.css";

const educationData = [
  {
    year: "2025 - Present",
    degree: "Master of Computer Applications (MCA)",
    specialization: "Artificial Intelligence & Machine Learning",
    institute: "Centurion University Of Technology & Management, Bhubaneswar",
    score: "Current CGPA: 8.2",
  },
  {
    year: "Graduated",
    degree: "Bachelor of Science (B.Sc.)",
    specialization: "Undergraduate Degree",
    institute: "Utkal University",
    score: "CGPA: 8.12",
  },
  {
    year: "12th",
    degree: "Higher Secondary Education",
    specialization: "CHSE Odisha",
    institute: "The Guide Residential Higher Secondary School, Kendrapara, Odisha",
    score: "Grade: B2",
  },
  {
    year: "10th",
    degree: "Secondary Education",
    specialization: "BSE Odisha",
    institute: "Kalinga Residential Public School , Kendrapara, Odisha",
    score: "Grade: B2",
  },
];

function Education() {
  return (
    <section className="education" id="education">
      <div className="educationContainer">

        <div className="educationHeading">
          <span>MY JOURNEY</span>
          <h2>
            Education<span>.</span>
          </h2>
          <p>
            My academic journey and educational background.
          </p>
        </div>

        <div className="educationTimeline">
          {educationData.map((item, index) => (
            <div className="educationItem" key={index}>

              <div className="timelineDot"></div>

              <div className="educationCard">
                <span className="educationYear">
                  {item.year}
                </span>

                <h3>{item.degree}</h3>

                <h4>{item.specialization}</h4>

                <p>{item.institute}</p>

                <div className="educationScore">
                  {item.score}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
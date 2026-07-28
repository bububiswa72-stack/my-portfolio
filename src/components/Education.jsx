import "./Education.css";

const educationData = [
  {
    id: "01",
    icon: "✦",
    year: "2025 — Present",
    type: "Postgraduate",
    status: "Current",
    active: true,
    degree: "Master of Computer Applications",
    short: "MCA",
    specialization: "Artificial Intelligence & Machine Learning",
    institute:
      "Centurion University of Technology & Management, Bhubaneswar",
    resultLabel: "Current CGPA",
    result: "8.2",
    bottom: "Currently Pursuing",
  },

  {
    id: "02",
    icon: "◇",
    year: "Graduated",
    type: "Graduation",
    status: "Completed",
    active: false,
    degree: "Bachelor of Science",
    short: "B.Sc.",
    specialization: "Undergraduate Degree",
    institute: "Utkal University",
    resultLabel: "CGPA",
    result: "8.12",
    bottom: "Graduation Completed",
  },

  {
    id: "03",
    icon: "○",
    year: "12th",
    type: "Higher Secondary",
    status: "Completed",
    active: false,
    degree: "Higher Secondary Education",
    short: "12th",
    specialization: "CHSE Odisha",
    institute:
      "The Guide Residential Higher Secondary School, Kendrapara, Odisha",
    resultLabel: "Grade",
    result: "B2",
    bottom: "Higher Secondary Completed",
  },

  {
    id: "04",
    icon: "□",
    year: "10th",
    type: "Secondary",
    status: "Completed",
    active: false,
    degree: "Secondary Education",
    short: "10th",
    specialization: "BSE Odisha",
    institute: "Board of Secondary Education, Odisha",
    resultLabel: "Grade",
    result: "B2",
    bottom: "Secondary Education Completed",
  },
];

function Education() {
  return (
    <section className="education" id="education">
      <div className="educationContainer">

        {/* HEADER */}

        <div className="educationHeader">
          <div>
            <p className="educationEyebrow">
              <span className="eyebrowLine"></span>
              Academic Journey
            </p>

            <h2>
              My <span>Education.</span>
            </h2>
          </div>

          <p className="educationIntro">
            My academic journey and educational background,
            focused on computer science, artificial intelligence
            and modern technologies.
          </p>
        </div>


        {/* TIMELINE */}

        <div className="educationTimeline">

          <div className="timelineLine">
            <div className="timelineGlow"></div>
          </div>

          {educationData.map((item) => (
            <div
              className={`educationItem ${
                item.active ? "featuredEducation" : ""
              }`}
              key={item.id}
            >

              {/* TIMELINE DOT */}

              <div className="timelineNode">
                <span></span>
              </div>


              {/* CARD */}

              <article className="educationCard">

                <div className="educationCardGlow"></div>

                <span className="educationNumber">
                  {item.id}
                </span>


                {/* CARD TOP */}

                <div className="educationCardTop">

                  <div className="educationIcon">
                    {item.icon}
                  </div>

                  <div className="educationMeta">

                    <span className="educationType">
                      {item.type}
                    </span>

                    <span className="educationStatus">

                      <span
                        className={`statusDot ${
                          item.active ? "active" : ""
                        }`}
                      ></span>

                      {item.status}

                    </span>

                  </div>

                </div>


                {/* MAIN CONTENT */}

                <div className="educationMain">

                  <div className="educationInfo">

                    <span className="educationYear">
                      {item.year}
                    </span>

                    <h3>
                      {item.degree}{" "}
                      <span className="degreeShort">
                        ({item.short})
                      </span>
                    </h3>

                    <p className="specialization">
                      {item.specialization}
                    </p>

                    <p className="institute">

                      <span className="instituteIcon">
                        ⌂
                      </span>

                      {item.institute}

                    </p>

                  </div>


                  {/* RESULT */}

                  <div className="educationResult">

                    <span>
                      {item.resultLabel}
                    </span>

                    <strong>
                      {item.result}
                    </strong>

                    <div className="resultLine">
                      <span></span>
                    </div>

                  </div>

                </div>


                {/* BOTTOM */}

                <div className="educationBottom">

                  <span>
                    {item.bottom}
                  </span>

                </div>

              </article>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;
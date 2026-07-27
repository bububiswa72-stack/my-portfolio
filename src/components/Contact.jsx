import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contactContainer">

        <p className="contactLabel">GET IN TOUCH</p>

        <h2>
          Let's <span>Connect.</span>
        </h2>

        <p className="contactText">
          I'm open to internships, projects and new opportunities.
          Feel free to contact me.
        </p>

        <div className="contactCards">

          <a href="mailto:bububiswa72@gmail.com" className="contactCard">
            <span>01</span>
            <h3>Email</h3>
            <p>Send me a message →</p>
          </a>

          <a
            href="https://www.linkedin.com/in/biswajit-nayak-b48ab83b6"
            target="_blank"
            rel="noreferrer"
            className="contactCard"
          >
            <span>02</span>
            <h3>LinkedIn</h3>
            <p>Connect with me →</p>
          </a>
          <a
    href="https://github.com/bububiswa72-stack"
    target="_blank"
    rel="noreferrer"
    className="contactCard"
  >
    <span className="number">03</span>
    <h3>GitHub</h3>
    <p>View my projects →</p>
  </a>


        </div>

      </div>
    </section>
  );
}

export default Contact;
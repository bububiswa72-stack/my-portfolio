import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("Sending...");

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server connection failed.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contactContainer">

        <p className="contactLabel">
          GET IN TOUCH
        </p>

        <h2>
          Let's <span>Connect.</span>
        </h2>

        <p className="contactText">
          I'm open to internships, projects and new opportunities.
          Feel free to contact me.
        </p>

        <div className="contactCards">

          <a
            href="mailto:bububiswa72@gmail.com"
            className="contactCard"
          >
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
            <span>03</span>

            <h3>GitHub</h3>

            <p>View my projects →</p>
          </a>

        </div>

        {/* CONTACT FORM */}

        <div className="contactFormWrapper">

          <p className="formLabel">
            SEND A MESSAGE
          </p>

          <h3>
            Have a project or opportunity?
          </h3>

          <form
            className="contactForm"
            onSubmit={handleSubmit}
          >

            <div className="formRow">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={sending}
            >
              {sending
                ? "Sending..."
                : "Send Message →"}
            </button>

            {status && (
              <p className="formStatus">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
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

  // ==========================================
  // INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Old error/success message remove
    if (status) {
      setStatus("");
    }
  };

  // ==========================================
  // SEND CONTACT MESSAGE
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      // Read response safely
      const contentType = response.headers.get("content-type");

      let data;

      if (contentType?.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();

        data = {
          message: text || "Unexpected server response.",
        };
      }

      console.log("CONTACT RESPONSE:", data);

      // Backend returned error
      if (!response.ok) {
        throw new Error(
          data.message || `Server error ${response.status}`
        );
      }

      // SUCCESS
      setStatus(
        data.message || "Message sent successfully!"
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("CONTACT ERROR:", error);

      setStatus(
        `Error: ${
          error.message ||
          "Could not send message. Please try again."
        }`
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contactContainer">

        {/* =====================================
            HEADER
        ===================================== */}

        <p className="contactLabel">
          GET IN TOUCH
        </p>

        <h2>
          Let's <span>Connect.</span>
        </h2>

        <p className="contactText">
          I'm open to internships, projects and new
          opportunities. Feel free to contact me.
        </p>

        {/* =====================================
            CONTACT CARDS
        ===================================== */}

        <div className="contactCards">

          {/* EMAIL */}

          <a
            href="mailto:bububiswa72@gmail.com"
            className="contactCard"
          >
            <span>01</span>

            <h3>Email</h3>

            <p>
              Send me a message →
            </p>
          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/biswajit-nayak-b48ab83b6"
            target="_blank"
            rel="noopener noreferrer"
            className="contactCard"
          >
            <span>02</span>

            <h3>LinkedIn</h3>

            <p>
              Connect with me →
            </p>
          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/bububiswa72-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="contactCard"
          >
            <span>03</span>

            <h3>GitHub</h3>

            <p>
              View my projects →
            </p>
          </a>

        </div>

        {/* =====================================
            CONTACT FORM
        ===================================== */}

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

            {/* NAME + EMAIL */}

            <div className="formRow">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                disabled={sending}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                disabled={sending}
                required
              />

            </div>

            {/* SUBJECT */}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={sending}
            />

            {/* MESSAGE */}

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
              disabled={sending}
              required
            />

            {/* SEND BUTTON */}

            <button
              type="submit"
              disabled={sending}
            >
              {sending
                ? "Sending..."
                : "Send Message →"}
            </button>

            {/* STATUS */}

            {status && (
              <p
                className={`formStatus ${
                  status.startsWith("Error:")
                    ? "formError"
                    : status === "Sending..."
                    ? "formSending"
                    : "formSuccess"
                }`}
              >
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
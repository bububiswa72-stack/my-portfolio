import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// MIDDLEWARE
// ==========================================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ==========================================
// HOME
// ==========================================

app.get("/", (req, res) => {
  res.send("BN Portfolio Backend Working");
});

// ==========================================
// TEST API
// ==========================================

app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend connection successful",
  });
});

// ==========================================
// NODEMAILER
// ==========================================

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ==========================================
// CONTACT API
// ==========================================

app.post("/api/contact", async (req, res) => {
  console.log("================================");
  console.log("CONTACT REQUEST RECEIVED");
  console.log(req.body);
  console.log("================================");

  try {
    const { name, email, subject, message } = req.body;

    // Required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    // Check email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("EMAIL_USER or EMAIL_PASS missing in .env");

      return res.status(500).json({
        success: false,
        message: "Email configuration is missing.",
      });
    }

    console.log("Sending email...");

    const info = await transporter.sendMail({
      // Always send FROM your own authenticated Gmail
      from: `"BN Portfolio" <${process.env.EMAIL_USER}>`,

      // Message will arrive at your Gmail
      to: process.env.EMAIL_USER,

      // Reply button replies to visitor
      replyTo: email,

      subject: subject
        ? `Portfolio Contact: ${subject}`
        : `Portfolio Message from ${name}`,

      text: `
New message from your portfolio website

Name: ${name}
Email: ${email}
Subject: ${subject || "No Subject"}

Message:
${message}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          
          <h2>New Portfolio Message</h2>

          <p>
            Someone sent you a message from your portfolio website.
          </p>

          <hr />

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Subject:</strong>
            ${subject || "No Subject"}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>

          <hr />

          <p>
            Reply to this email to respond to ${name}.
          </p>

        </div>
      `,
    });

    console.log("EMAIL SENT SUCCESSFULLY");
    console.log("Message ID:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("================================");
    console.error("EMAIL ERROR");
    console.error(error);
    console.error("================================");

    return res.status(500).json({
      success: false,
      message: "Message could not be sent. Please try again.",
    });
  }
});

// ==========================================
// 404
// ==========================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found.",
  });
});

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log("");
  console.log("================================");
  console.log("BN PORTFOLIO BACKEND STARTED");
  console.log(`http://localhost:${PORT}`);
  console.log(`Test: http://localhost:${PORT}/api/test`);
  console.log("Contact: POST /api/contact");
  console.log("================================");
  console.log("");
});
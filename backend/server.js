import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
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

// TEST
app.get("/", (req, res) => {
  res.send("Portfolio backend is running!");
});

// CONTACT
app.post("/api/contact", async (req, res) => {
  console.log("================================");
  console.log("CONTACT REQUEST RECEIVED");
  console.log(req.body);
  console.log("================================");

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("EMAIL_USER or EMAIL_PASS missing");

      return res.status(500).json({
        success: false,
        message: "Email configuration is missing.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("Trying to send email...");

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: subject
        ? `Portfolio: ${subject}`
        : `Portfolio message from ${name}`,

      text: `
New Portfolio Message

Name: ${name}
Email: ${email}
Subject: ${subject || "No Subject"}

Message:
${message}
      `,
    });

    console.log("EMAIL SENT:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("EMAIL ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Message could not be sent.",
    });
  }
});

app.listen(PORT, () => {
  console.log("--------------------------------");
  console.log(`Backend running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log("--------------------------------");
});
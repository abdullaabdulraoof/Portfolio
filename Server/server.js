import express from "express";
import mongoose from "mongoose";
import { Contact } from "./models/contact.js";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// ✅ 1. Whitelisted Frontend Origins
const allowedOrigins = [
  "https://abdullaabdulraoof.vercel.app",
  "https://portfolio-ddlwjuzu9-abdullaabdulraoofs-projects.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed for origin: " + origin));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
};

// Handle preflight *first*
app.options("*", cors(corsOptions));

// Then enable actual CORS
app.use(cors(corsOptions));

// ✅ 4. Middlewares
app.use(bodyParser.json());

// ✅ 5. MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://portfolio_user:4Q8LhZjhzDQG6SgV@contact.trepkmk.mongodb.net/contact?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ 6. Health Check Route
app.get("/", (req, res) => {
  res.send("✅ Portfolio backend is running!");
});

// ✅ 7. Contact Form Submission
app.post("/a", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await Contact.create({ name, email, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "contactabdullaabdulraoof@gmail.com",
      subject: "New Portfolio Contact",
      text: message,
      html: `<b>From:</b> ${name} <${email}><br /><p>${message}</p>`
    });

    console.log("📬 Email sent:", info.messageId);
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("❌ Error sending contact:", err);
    res.status(500).json({ success: false, error: "Failed to send/save message" });
  }
});

// ✅ 8. Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

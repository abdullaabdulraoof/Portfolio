import express from "express";
import mongoose from "mongoose";
import { Contact } from "./models/contact.js";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

// Setup Express
const app = express();
const port = process.env.PORT || 3000;

// ✅ Allowed Frontend Origins
const allowedOrigins = [
  "https://abdullaabdulraoof.vercel.app",
  "https://portfolio-ddlwjuzu9-abdullaabdulraoofs-projects.vercel.app"
];

// ✅ CORS Configuration (with preflight support)
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
};

// ✅ Handle preflight OPTIONS requests
app.options('*', cors(corsOptions));

// ✅ Apply middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://portfolio_user:4Q8LhZjhzDQG6SgV@contact.trepkmk.mongodb.net/contact?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ✅ Health check route
app.get('/', (req, res) => {
  res.send('✅ Portfolio backend is running!');
});

// ✅ API: Receive contact form
app.post('/a', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to MongoDB
    await Contact.create({ name, email, message });

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "contactabdullaabdulraoof@gmail.com",
      subject: "New Portfolio Contact",
      text: message,
      html: `<b>From:</b> ${name} <${email}><br /><p>${message}</p>`
    });

    console.log("📬 Message sent:", info.messageId);
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("❌ Error sending mail:", err);
    res.status(500).json({ success: false, error: "Failed to send/save message" });
  }
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

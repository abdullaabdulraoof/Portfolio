import express from "express";
import mongoose from "mongoose";
import { Contact } from "./models/contact.js";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();


// Connect MongoDB
mongoose.connect('mongodb+srv://portfolio_user:4Q8LhZjhzDQG6SgV@contact.trepkmk.mongodb.net/contact?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Setup Express
const app = express();
const port = 3000;
const allowedOrigins = [
  'https://abdullaabdulraoof.vercel.app',
  'https://portfolio-ddlwjuzu9-abdullaabdulraoofs-projects.vercel.app'
];

app.use(bodyParser.json());




// ✅ Use this simplified CORS setup
app.use(cors({
  origin: ['https://abdullaabdulraoof.vercel.app'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// Health check route (GET /)
app.get('/', (req, res) => {
  res.send('✅ Portfolio backend is running!');
});

// API to receive contact form
app.post('/a', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to MongoDB
    const saved = await Contact.create({ name, email, message });

    // Nodemailer with Gmail (use App Password, not real one)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
  user: process.env.GMAIL_USER,
  pass: process.env.GMAIL_PASS
},
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "contactabdullaabdulraoof@gmail.com", // Your Gmail
      subject: "New Portfolio Contact",
      text: message,
      html: `<b>From:</b> ${name} <${email}><br /><p>${message}</p>`,
    });

    console.log("📬 Message sent:", info.messageId);

    res.status(201).json({ success: true });
  } catch (err) {
    console.error("❌ Error sending mail:", err);
    res.status(500).json({ success: false, error: "Failed to send/save message" });
  }
});

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Server running`);
});

  
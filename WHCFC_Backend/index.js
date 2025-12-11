import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import emailRoute from "./routes/email.js";
import eventRoute from "./routes/agenda.js";
import dotenv from "dotenv";

// Load environment variables
const env = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";
dotenv.config({ path: env });

const app = express();
const port = process.env.port || 8000;

const corsConfig = {
  origin: process.env.NODE_ENV === "development" ? "http://localhost:4200" : ["https://whcfc.ca", "https://www.whcfc.ca"],
  allowedHeaders: ["Content-Type"],
  methods: ["GET", "POST"],
  maxAge: 3600 // 1 hour
};

app.use(cors(corsConfig));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// Rate limiting configuration
// Email endpoint - stricter limit to prevent spam
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Max 5 requests per IP
  message: { 
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true, // Return RateLimit-* headers
  legacyHeaders: false, // Disable X-RateLimit-* headers
});

// Agenda endpoint - more relaxed limit for read operations
const agendaLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30, // Max 30 requests per IP
  message: { 
    error: 'Too many requests, please slow down.',
    retryAfter: '1 minute'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/send-email", emailLimiter, emailRoute);
app.use("/agenda", agendaLimiter, eventRoute);

app.listen(port, async () => {
  console.log("Server is running on port: " + port);
});

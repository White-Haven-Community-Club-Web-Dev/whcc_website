import express from "express";
import cors from "cors";
import "dotenv/config";
import emailRoute from "./routes/email.js";
import eventRoute from "./routes/agenda.js";
import dotenv from "dotenv";

// Load environment variables
//const env = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";
//dotenv.config({ path: env });

const app = express();
const port = process.env.port || 8000;

const corsConfig = {
  origin: ["http://localhost:4200", "https://whcfc.ca", "https://www.whcfc.ca"],
  allowedHeaders: ["Content-Type"],
  methods: ["GET", "POST"],
  maxAge: 3600 // 1 hour
};

app.use(cors(corsConfig));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

app.use("/send-email", emailRoute);
app.use("/agenda", eventRoute);

app.listen(port, async () => {
  console.log("Server is running on port: " + port);
});

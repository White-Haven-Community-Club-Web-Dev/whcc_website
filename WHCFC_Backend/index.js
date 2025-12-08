import express from "express";
import cors from "cors";
import emailRoute from "./routes/email.js";
import eventRoute from "./routes/agenda.js";
import dotenv from "dotenv";
import DBManager from "./db/db-manager.js";

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

app.use("/send-email", emailRoute);
app.use("/agenda", eventRoute);

try {
  await DBManager.connect();
}
catch (error) {
  console.error("Error connecting to the database: ", error);
  process.exit(1);
}

app.listen(port, async () => {
  console.log("Server is running on port: " + port);
});

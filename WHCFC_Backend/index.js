import express from "express";
import cors from "cors";
import "dotenv/config";
import emailRoute from "./routes/email.js";
import dotenv from "dotenv";

// Load environment variables
const env = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";
dotenv.config({ path: env });

const app = express();
const port = process.env.port || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/send-email", emailRoute);

app.listen(port, async () => {
    console.log("\n" + "=".repeat(50));
    console.log("🚀 WHCFC Backend Server Started Successfully!");
    console.log("=".repeat(50));
    console.log(`📡 Server running on port: ${port}`);
    console.log(`🌐 API Base URL: http://localhost:${port}`);
    console.log(`📧 Email Endpoint: http://localhost:${port}/send-email`);
    console.log(`📅 Agenda Endpoint: http://localhost:${port}/agenda`);
    console.log(`⏰ Started at: ${new Date().toLocaleString()}`);
    console.log("=".repeat(50) + "\n");
});

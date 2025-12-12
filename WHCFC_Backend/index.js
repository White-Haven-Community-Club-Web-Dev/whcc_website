import express from "express";
import cors from "cors";
import emailRoute from "./routes/email.js";
//import eventRoute from "./routes/agenda.js";
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

const poolConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 10
};

app.use(cors(corsConfig));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

app.use("/send-email", emailRoute);
//app.use("/agenda", eventRoute);

try {
  await DBManager.createPool(poolConfig);
}
catch (error) {
  console.error("Error connecting to the database: ", error);
  process.exit(1);
}

app.listen(port, async () => {
  console.log("Server is running on port: " + port);
});

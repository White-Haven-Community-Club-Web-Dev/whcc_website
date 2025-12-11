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

// 速率限制配置
// 邮件发送端点 - 更严格的限制（防止垃圾邮件）
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15分钟
  max: 5, // 每个IP最多5次请求
  message: { 
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true, // 返回 RateLimit-* 头
  legacyHeaders: false, // 禁用 X-RateLimit-* 头
});

// 活动日历端点 - 较宽松的限制（读取操作）
const agendaLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1分钟
  max: 30, // 每个IP最多30次请求
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

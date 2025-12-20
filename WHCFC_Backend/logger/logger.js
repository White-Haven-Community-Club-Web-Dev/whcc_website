import winston from "winston"
import "winston-daily-rotate-file"

const { combine, timestamp, printf, colorize } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: "./logs/%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxFiles: process.env.WINSTON_MAX_FILES || 15
});

const consoleTransport = new winston.transports.Console();

const logger = winston.createLogger({
  colorize: process.env.NODE_ENV === "development" ? colorize() : null,
  level: process.env.WINSTON_LOG_LEVEL || "info",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss A" // 2022-01-25 03:23:10 PM
    }),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [
    process.env.NODE_ENV === "development" ? consoleTransport : fileRotateTransport
  ]
});

export default logger;

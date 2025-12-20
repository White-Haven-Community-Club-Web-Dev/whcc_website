import winston from "winston"
import "winston-daily-rotate-file"

const { combine, timestamp, printf, colorize } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: "./logs/%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxFiles: process.env.WINSTON_MAX_FILES || 15
});

const consoleTransport = new winston.transports.Console({
  format: combine(
    colorize({ all: true })
  )
});

const logger = winston.createLogger({
  level: process.env.WINSTON_LOG_LEVEL || "info", // Lowest level to log (e.g. "info":2, it will log "error":0, "warn":1, and "info":2)
  format: combine(
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss A" // 2022-01-25 03:23:10 PM
    }),
    printf(
      info => `[${info.timestamp}] [${info.level.toUpperCase()}]: ${info.message}`
    )
  ),
  transports: [
    consoleTransport,
    fileRotateTransport
  ]
});

export default logger;

const { format, createLogger, transports } = require("winston");
require("winston-daily-rotate-file");
require("winston-mongodb");

const { combine, timestamp, label, printf, colorize, json } = format;

const CATEGORY = "Logger";

const fileRotateTransport = new transports.DailyRotateFile({
    filename: "logs/rotate-%DATE%.log",
    datePattern: "DD-MM-YYYY",
    maxFiles: "14d",
});

const logger = createLogger({
    level: process.env.LOG_LEVEL || "info",
    format: combine(
        label({ label: CATEGORY }),
        timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
        json()
    ),
    transports: [
        fileRotateTransport,
        new transports.File({
            level: "warn",
            filename: "logs/error.log",
        }),
        new transports.Console({
            format: combine(
                colorize(),
                printf(({ level, message, label, timestamp }) => {
                    return `[${timestamp}] [${label}] ${level}: ${message}`;
                })
            ),
        }),
    ],
});

if (process.env.NODE_ENV === "production") {
    logger.add(
        new transports.MongoDB({
            level: "error",
            db: process.env.MONGODB_URI,
            collection: "logs",
            format: combine(
                timestamp(),
                json()
            ),
        })
    );
}

module.exports = logger;

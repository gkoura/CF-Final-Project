require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const logger = require("./logger/logger");
const { swaggerOptions } = require("./swagger/swagger");
const requestLogger = require("./middlewares/requestLogger");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

// Validate environment variables
if (!process.env.MONGO_URI) {
	logger.error("MONGO_URI is not defined in environment variables.");
	process.exit(1);
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: process.env.CORS_ORIGIN || "http://localhost:4200", // Replace with your frontend's URL
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);
app.use(requestLogger);
app.use(errorHandler);

// MongoDB Connection
mongoose.mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		logger.info("Connected to MongoDB.");
	})
	.catch((err) => {
		logger.error("Failed to connect to MongoDB.", { error: err.message });
		process.exit(1);
	});

// API Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
logger.info("Swagger API documentation available at /api-docs");

// Health Check Route
app.get("/", (req, res) => {
	res.status(200).json({ message: "API is working!" });
});

// Load API Routes
const routes = require("./routes");
app.use("/api", routes);

// Error Handling Middleware
app.use((err, req, res, next) => {
	logger.error("Unhandled error occurred.", { error: err.message });
	res.status(err.status || 500).json({ error: "Internal Server Error" });
});

module.exports = app;

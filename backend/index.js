require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const logger = require("./logger/logger");
const swaggerUi = require("swagger-ui-express");
const { swaggerOptions } = require("./swagger/swagger");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		logger.info("Connection to MongoDB established");
	})
	.catch((err) => {
		logger.error("Failed to connect to MongoDB", { error: err.message });
	});

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
logger.info("Swagger API documentation available at /api-docs");

app.get("/", (req, res) => {
	res.status(200).json({ message: "API is working!" });
});

module.exports = app;

const paths = require("./paths");
const components = require("./components");
const tags = require("./tags");

exports.swaggerOptions = {
	openapi: "3.0.0",
	info: {
		title: "Coding Factory App API",
		description: "The API documentation of my Coding Factory App backend",
		version: "1.0.0",
	},
	servers: [
		{
			url: "http://localhost:3000",
			description: "Development server",
		},
	],
	paths,
	components,
	tags,
};

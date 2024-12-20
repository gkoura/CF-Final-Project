const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
	name: { type: String, required: true }, // e.g., "JavaScript Basics"
	description: { type: String }, // e.g., "Learn the basics of JavaScript."
	teacher: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	}, // Reference to the teacher's _id
});

module.exports = mongoose.model("Course", classSchema);

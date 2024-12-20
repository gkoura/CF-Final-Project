const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
	student: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	}, // Reference to student's _id
	class: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }, // Reference to class's _id
	grade: { type: Number, min: 0, max: 10, required: true },
});

module.exports = mongoose.model("Grade", gradeSchema);

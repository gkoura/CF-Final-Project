const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, enum: ["Male", "Female"], required: true }, // Fixed enum
  password: { type: String, required: true }, // Store hashed passwords
  role: { type: String, enum: ["admin", "student", "teacher"], required: true },
  series: { type: mongoose.Schema.Types.ObjectId, ref: "Series" }, // Only for students
});

// Specify the correct collection if needed (optional, MongoDB usually auto-creates it)
const User = mongoose.model("User", userSchema, "users"); // Ensure "users" is the collection name

module.exports = User; // Correct export

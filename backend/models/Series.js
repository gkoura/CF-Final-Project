const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "Series 6"
  year: { type: Number, required: true }, // e.g., 2024
  season: { type: String, required: true }, // e.g., "Summer", "Winter"
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // References to students
});

module.exports = mongoose.model("Series", seriesSchema);

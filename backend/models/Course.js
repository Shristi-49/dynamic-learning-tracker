const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  icon: String,
  description: String,
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);
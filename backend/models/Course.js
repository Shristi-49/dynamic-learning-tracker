const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  index: Number,
  title: String,
  content: String, // Markdown or HTML
  videoUrl: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true }, 
  description: String,
  modules: [moduleSchema],
});

module.exports = mongoose.model('Course', courseSchema);
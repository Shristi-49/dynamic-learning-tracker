const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String },
  description: { type: String },
  progress: { type: Number, default: 0 },
  favorite: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Goal", goalSchema);
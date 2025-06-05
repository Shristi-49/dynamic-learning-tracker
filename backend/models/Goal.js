const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String },
  description: { type: String },
  progress: {
   currentModule: { type: Number, default: 1 },
   completedModules: { type: [Number], default: [] },
  },
  favorite: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Goal", goalSchema);
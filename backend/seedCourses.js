// backend/seedCourses.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Course = require("./models/Course");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const sampleCourses = [
  {
    title: "React",
    description: "Learn component-based UI with hooks",
    icon: "⚛️"
  },
  {
    title: "JavaScript",
    description: "Master JS fundamentals and async programming",
    icon: "📜"
  },
  {
    title: "DSA",
    description: "Sharpen problem-solving with patterns",
    icon: "🧩"
  },
  {
    title: "MATLAB",
    description: "Data visualization and engineering workflows",
    icon: "📈"
  }
];

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB connected");
    await Course.deleteMany(); // Optional: clear existing
    await Course.insertMany(sampleCourses);
    console.log("✅ Sample courses inserted");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Error seeding courses:", err);
    process.exit(1);
  });
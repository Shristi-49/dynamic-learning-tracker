// backend/seedCourses.js  (keep .js, you’re already using ES modules)
import mongoose from "mongoose";
import dotenv from "dotenv";
import Course from "./models/Course.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

// full React course with modules
const reactCourse = {
  title: "React",
  slug: "react",
  description: "Learn React from basics to advanced",
  modules: [
    { index: 1, title: "Introduction", content: "Welcome to React!" },
    { index: 2, title: "Why React?", content: "Why React is awesome..." },
    { index: 3, title: "JSX & Components", content: "JSX lets you write HTML in JS…" },
  ],
};

// other catalogue cards (no modules yet)
const sampleCourses = [
  {
    title: "JavaScript",
    slug: "javascript",
    description: "Master JS fundamentals and async programming",
  },
  {
    title: "DSA",
    slug: "dsa",
    description: "Sharpen problem-solving with patterns",
  },
  { title: "MATLAB", slug: "matlab", description: "Data-science workflows" },
];

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅  MongoDB connected");

    // wipe & seed
    await Course.deleteMany();
    await Course.create(reactCourse);          // full course with modules
    await Course.insertMany(sampleCourses);    // simple catalogue courses

    console.log("✅  Courses seeded successfully");
  } catch (err) {
    console.error("❌  Seeding error:", err);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
})();
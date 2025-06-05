const express = require("express");
const router = express.Router();
const { getCourses, getCourseBySlug } = require("../controllers/courseController");
const Course = require('../models/Course');

// Get all courses for dashboard
router.get("/", getCourses);

// GET /api/courses/:slug
router.get("/:slug", getCourseBySlug)

module.exports = router;
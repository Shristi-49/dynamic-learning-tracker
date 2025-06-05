const Course = require("../models/Course");

exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

exports.getCourseBySlug = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
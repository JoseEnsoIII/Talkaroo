const CourseModel = require("../models/languageCourseModel");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await CourseModel.getAllCourses();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await CourseModel.getCourseById(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const { course_name, description } = req.body;
    const newCourse = await CourseModel.createCourse(course_name, description);
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const { course_name, description } = req.body;
    const updatedCourse = await CourseModel.updateCourse(req.params.id, course_name, description);
    if (!updatedCourse) return res.status(404).json({ error: "Course not found" });
    res.json(updatedCourse);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await CourseModel.deleteCourse(req.params.id);
    if (!deletedCourse) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

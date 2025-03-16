const pool = require("../config/db");

// Get all language courses
const getAllCourses = async () => {
  const result = await pool.query("SELECT * FROM language_courses");
  return result.rows;
};

// Get course by ID
const getCourseById = async (id) => {
  const result = await pool.query("SELECT * FROM language_courses WHERE course_id = $1", [id]);
  return result.rows[0];
};

// Create a new course
const createCourse = async (course_name, description) => {
  const result = await pool.query(
    "INSERT INTO language_courses (course_name, description) VALUES ($1, $2) RETURNING *",
    [course_name, description]
  );
  return result.rows[0];
};

// Update a course
const updateCourse = async (id, course_name, description) => {
  const result = await pool.query(
    "UPDATE language_courses SET course_name = $1, description = $2 WHERE course_id = $3 RETURNING *",
    [course_name, description, id]
  );
  return result.rows[0];
};

// Delete a course
const deleteCourse = async (id) => {
  const result = await pool.query("DELETE FROM language_courses WHERE course_id = $1 RETURNING *", [id]);
  return result.rows[0];
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};

const express = require("express");
const router = express.Router();
const LanguageCoursesController = require("../controllers/languageCoursesController");

router.get("/", LanguageCoursesController.getAllCourses);
router.get("/:id", LanguageCoursesController.getCourseById);
router.post("/", LanguageCoursesController.createCourse);
router.put("/:id", LanguageCoursesController.updateCourse);
router.delete("/:id", LanguageCoursesController.deleteCourse);

module.exports = router;

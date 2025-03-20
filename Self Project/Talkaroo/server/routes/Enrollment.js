const express = require("express");
const router = express.Router();
const pool = require("../config/db"); // PostgreSQL connection

// Enroll a user in a course
const enrollUser = async (req, res) => {
    const { email, username, firstName, lastName, courseId } = req.body;

    try {
        // Check if the user exists
        let user = await pool.query(
            "SELECT id FROM users WHERE email = $1 OR username = $2",
            [email, username]
        );

        let userId;
        if (user.rows.length > 0) {
            userId = user.rows[0].id;
        } else {
            // Create the user if they don't exist
            const newUser = await pool.query(
                "INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING id",
                [email, username, firstName, lastName]
            );
            userId = newUser.rows[0].id;
        }

        // Check if the user is already enrolled
        const enrollmentCheck = await pool.query(
            "SELECT * FROM enrollments WHERE user_id = $1 AND course_id = $2",
            [userId, courseId]
        );

        if (enrollmentCheck.rows.length > 0) {
            return res.status(400).json({ message: "User is already enrolled in this course" });
        }

        // Enroll the user
        await pool.query(
            "INSERT INTO enrollments (user_id, course_id) VALUES ($1, $2)",
            [userId, courseId]
        );

        res.json({ success: true, message: "User enrolled successfully" });
    } catch (err) {
        console.error("Enrollment error:", err.stack);
        res.status(500).json({ message: "Server error during enrollment", error: err.message });
    }
};

// Unenroll a user
const unenrollUser = async (req, res) => {
    const { enrollmentId } = req.params;

    try {
        const result = await pool.query(
            "DELETE FROM enrollments WHERE enrollment_id = $1 RETURNING *",
            [enrollmentId]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Enrollment not found" });
        }

        res.json({ success: true, message: "User unenrolled successfully" });
    } catch (err) {
        console.error("Unenrollment error:", err.stack);
        res.status(500).json({ message: "Server error during unenrollment", error: err.message });
    }
};

// Get all enrollments
const getEnrollments = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM enrollments");
        res.json(result.rows);
    } catch (err) {
        console.error("Error fetching enrollments:", err.stack);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// API Routes
router.get("/", getEnrollments);
router.post("/", enrollUser);
router.delete("/:enrollmentId", unenrollUser);

module.exports = router;

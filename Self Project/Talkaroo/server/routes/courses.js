const express = require("express");
const router = express.Router();
const pool = require("../db"); // PostgreSQL connection

// Get all language courses
router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM language_courses");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Get a single language course by ID
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM language_courses WHERE id = $1", [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ msg: "Course not found" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Add a new language course
router.post("/", async (req, res) => {
    try {
        const { course_name } = req.body;
        const result = await pool.query(
            "INSERT INTO language_courses (course_name) VALUES ($1) RETURNING *",
            [course_name]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Update an existing language course
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { course_name } = req.body;

        const result = await pool.query(
            "UPDATE language_courses SET course_name = $1 WHERE id = $2 RETURNING *",
            [course_name, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ msg: "Course not found" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Delete a language course
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("DELETE FROM language_courses WHERE id = $1 RETURNING *", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ msg: "Course not found" });
        }

        res.json({ msg: "Course deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;

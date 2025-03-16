const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../db"); // ✅ Import the database connection
require("dotenv").config();

// ✅ Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        if (result.rows.length === 0) {
            return res.status(400).json({ error: "User not found!" });
        }

        const user = result.rows[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials!" });
        }

        res.json({ message: "Login successful!", user });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Server error!" });
    }
};

// ✅ Register User
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: "User already exists!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
            [username, email, hashedPassword]
        );

        res.status(201).json({ message: "User registered successfully!", user: newUser.rows[0] });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "Server error!" });
    }
};

// ✅ Export functions properly
module.exports = { loginUser, registerUser };

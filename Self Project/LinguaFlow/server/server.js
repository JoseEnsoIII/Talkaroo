// server.js

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
require("dotenv").config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5001;

// PostgreSQL setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // You should have DATABASE_URL in your .env
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("PostgreSQL connection error:", err));

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Register a user
app.post("/api/auth/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the username or email already exists in the database
  try {
    // First check if username exists
    const userExists = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: "Username already exists!" });
    }

    // Check if email exists
    const emailExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (emailExists.rows.length > 0) {
      return res.status(400).json({ error: "Email already exists!" });
    }

    // If username and email are available, hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the new user into the database
    await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
      [username, email, hashedPassword]
    );

    // Respond with success
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Server error!" });
  }
});

// Login user
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (user.rows.length === 0) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // Create JWT token
    const token = jwt.sign({ userId: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, message: "Login successful!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    // Fetch users from the database
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows); // Send the rows of users as JSON response
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Server error!" });
  }
});
// Server-side code for fetching a user by ID
app.get("/api/users/:userId", async (req, res) => {
  const { userId } = req.params; // Get the userId from the URL parameters
  
  try {
    // Fetch the user with the specific userId from the database
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);
    
    if (result.rows.length > 0) {
      res.json(result.rows[0]); // Send the first row if user found
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ error: "Server error!" });
  }
});

// Update user
app.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const { username, first_name, last_name, suffix, email, course } = req.body;

  try {
    // Update user details
    const updatedUser = await pool.query(
      `UPDATE users
      SET username = $1, first_name = $2, last_name = $3, suffix = $4, email = $5, course = $6
      WHERE id = $7
      RETURNING *`,
      [username, first_name, last_name, suffix, email, course, id]
    );

    if (updatedUser.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User updated successfully", user: updatedUser.rows[0] });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Server error!" });
  }
});

// Delete user
app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Delete user from the database
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Server error!" });
  }
});
// Server Listening
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
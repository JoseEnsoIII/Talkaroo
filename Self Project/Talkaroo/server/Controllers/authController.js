const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../db");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    const userExists = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if (userExists.rows.length > 0) return res.status(400).json({ error: "Username already exists!" });

    const emailExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (emailExists.rows.length > 0) return res.status(400).json({ error: "Email already exists!" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await pool.query(
      "INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4)",
      [username, email, hashedPassword, "user"] // Default role: user
    );

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Server error!" });
  }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const userQuery = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      if (userQuery.rows.length === 0) return res.status(400).json({ error: "Invalid credentials" });
  
      const user = userQuery.rows[0];
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
  
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
      res.json({ token, user, message: "Login successful!" });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ error: "Server error!" });
    }
  };

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userQuery = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      
      if (userQuery.rows.length === 0) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
  
      const user = userQuery.rows[0];
  
      // Ensure the user is an admin
      if (user.role !== "admin") {
        return res.status(403).json({ error: "Access denied. Admins only!" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
  
      const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      res.json({ token, message: "Admin login successful!" });
    } catch (error) {
      console.error("Admin login error:", error);
      res.status(500).json({ error: "Server error!" });
    }
  };
module.exports = { registerUser, loginUser, loginAdmin };

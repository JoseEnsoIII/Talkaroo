const pool = require("../db");

const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    console.log("Fetched users:", result.rows); // Debugging
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Server error!" });
  }
};


const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ error: "Server error!" });
  }
};

// No routes should be defined here!
// Only exporting controller functions
module.exports = { getUsers, getUserById };

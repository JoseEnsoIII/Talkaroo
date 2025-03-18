const express = require("express");
const router = express.Router();
const { getUsers, getUserById } = require("../Controllers/userController");

router.get("/", async (req, res) => {
    res.send('User route');
    try {
        const users = await pool.query("SELECT * FROM users");
        res.json(users.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
// Define routes properly
router.get("/users", getUsers);
router.get("/users/:userId", getUserById);

module.exports = router;

const express = require("express");
const cors = require("cors");
const pool = require("./db"); // PostgreSQL connection
const usersRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courses");
const enrollRoutes = require("./routes/enrollment");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

// Use API routes
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enroll", enrollRoutes);


// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const punycode = require("punycode/");
const pool = require("./config/db"); // PostgreSQL connection
const usersRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courses");
const enrollRoutes = require("./routes/enrollment");
const chatRoutes = require("./routes/chatRoutes")


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use API routes
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enroll", enrollRoutes);
app.use("/api/chat", chatRoutes);

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

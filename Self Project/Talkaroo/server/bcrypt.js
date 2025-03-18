const bcrypt = require("bcryptjs");

const checkPassword = async (inputPassword, storedHashedPassword) => {
    const isMatch = await bcrypt.compare(inputPassword, storedHashedPassword);
    console.log(isMatch ? "✅ Login successful!" : "❌ Invalid credentials");
};

// Example usage
checkPassword("admin123", "$2b$10$HJvz.WlHi80tfGHcbTdn7O0eAhKv77C/M8LMUWMV.QUeNOO6wfSOW"); // Should return true

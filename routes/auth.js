const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user"); // Corrected the import path to match the file name casing

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
    const { firstName, middleInitials, lastName, email, username, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ username });
      const existingEmail = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      if (existingEmail) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        firstName,
        middleInitials,
        lastName,
        email,
        username,
        password: hashedPassword,
      });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });

// Login a user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Return userId in the response
    res.status(200).json({ message: "Login successful", userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});
  
// Fetch User Details Route
router.get("/profile", async (req, res) => {
  const { userId } = req.query; // Assuming the user ID is passed as a query parameter

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    // Find the user by ID
    const user = await User.findById(userId).select("firstName middleInitials lastName username email");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      firstName: user.firstName,
      middleInitial: user.middleInitials, // Use the correct field name
      lastName: user.lastName,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});


module.exports = router;
import express from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { tokenGenerator } from "../utils/tokenGenerator.js";

const router = express.Router();

const signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long." });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate verification code and expiry
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const verificationExpires = new Date(Date.now() + 12 * 60 * 60 * 1000); // 12 hours

    // Create new user
    const newUser = new User({
      email: normalizedEmail,
      password: hashedPassword,
      name,
      verificationCode,
      verificationExpires,
    });

    await newUser.save();

    // Generate auth token and send response
    tokenGenerator(res, newUser._id);

    // Send safe user data
    const { password: _, ...userSafeData } = newUser._doc;

    res.status(201).json({
      message: "User created successfully.",
      user: userSafeData,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const signIn = async (req, res) => {
  res.send("hello from signUp");
};

const logIn = async (req, res) => {
  res.send("hello from logIn");
};

router.post("/signIn", signIn);
router.post("/signUp", signUp);
router.post("/logIn", logIn);

export default router;

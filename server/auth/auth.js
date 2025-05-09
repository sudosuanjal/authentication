import express from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { tokenGenerator } from "../utils/tokenGenerator.js";

const router = express.Router();

const signIn = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      return res.status(400).json({ message: "all values are required" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const newUser = new User({
      email,
      password: hashedPassword,
      name,
      verificationCode,
      verificationExpires: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours
    });

    await newUser.save();

    tokenGenerator(res, newUser._id);

    res.status(201).json({
      message: "User created",
      user: {
        ...newUser._doc,
        password: null,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

const signUp = async (req, res) => {
  res.send("hello from signUp");
};

const logIn = async (req, res) => {
  res.send("hello from logIn");
};

router.post("/signIn", signIn);
router.get("/signUp", signUp);
router.get("/logIn", logIn);

export default router;

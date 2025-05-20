import express from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { tokenGenerator } from "../utils/tokenGenerator.js";
import {
  sendVerifyEmail,
  sentWelcomeMail,
} from "../mailtrap/sendVerifyEmail.js";
import { verifyEmail } from "./controllers/verifyEmail.controller.js";
import { logOut } from "./controllers/logOut.controller.js";
import { signUp } from "./controllers/signUp.controller.js";

const router = express.Router();

const logIn = async (req, res) => {
  res.send("hello from logIn");
};

router.post("/logOut", logOut);
router.post("/signUp", signUp);
router.post("/logIn", logIn);
router.post("/verifyemail", verifyEmail);

export default router;

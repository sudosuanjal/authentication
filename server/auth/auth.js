import express from "express";
import { verifyEmail } from "./controllers/verifyEmail.controller.js";
import { logOut } from "./controllers/logOut.controller.js";
import { signUp } from "./controllers/signUp.controller.js";
import { login } from "./controllers/logIn.controller.js";
import { forgotPassword } from "./controllers/forgotPassword.controller.js";
import { resetPassword } from "./controllers/resetpassword.controller.js";

const router = express.Router();

router.post("/logOut", logOut);
router.post("/signUp", signUp);
router.post("/logIn", login);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;

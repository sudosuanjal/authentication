import crypto from "crypto";
//import { configDotenv } from "dotenv";

import { User } from "../../models/user.model.js";
import { sentResetPassword } from "../../mailtrap/sendVerifyEmail.js";

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "email not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    console.log("resetToken: " + resetToken);

    user.resetPassword = resetToken;
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000; //1 hour
    await user.save();

    const link = `${process.env.CLIENT_URL}/reset-token/${resetToken}`;
    await sentResetPassword(user.email, link);

    res.status(200).json({ message: "password reset link sent" });
  } catch (error) {
    res.status(500).json({ message: "interal server error" });
  }
};

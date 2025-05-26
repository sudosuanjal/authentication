import { sentWelcomeMail } from "../../mailtrap/sendVerifyEmail.js";
import { User } from "../../models/user.model.js";

export const verifyEmail = async (req, res) => {
  const { code } = req.body;
  console.log("code: " + code);

  try {
    const user = await User.findOne({
      verificationCode: code,
      verificationExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "verification code expired" });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    user.verificationExpires = undefined;
    await user.save();
    const { password: _, ...userSafeData } = user._doc;

    await sentWelcomeMail(user.email, user.name);

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user: userSafeData,
    });
  } catch (error) {
    console.error("verify email error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

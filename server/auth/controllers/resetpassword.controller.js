import bcrypt from "bcryptjs";

import { User } from "../../models/user.model.js";

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      resetPassword: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "time expired or false token" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.resetPassword = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "password reset successful" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" + error });
  }
};

import bcrypt from "bcryptjs";

import { User } from "../../models/user.model.js";
import { tokenGenerator } from "../../utils/tokenGenerator.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User doesn't exists." });
    }

    const passwordIsSame = await bcrypt.compare(password, user.password);
    if (!passwordIsSame) {
      return res.status(401).json({ message: "wrong passord." });
    }

    tokenGenerator(res, user._id);

    user.lastLogin = new Date();
    await user.save();

    const { password: _, ...userSafeData } = user._doc;

    res.status(201).json({
      message: "User loggedIn successfully.",
      user: userSafeData,
    });
  } catch (error) {
    console.error("logIn error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

import { User } from "../../models/user.model.js";

export const authenticateUser = async (req, res) => {
  const userId = req.userId;
  try {
    if (!userId) {
      return res.status(401).json({ message: "userId is not provided" });
    }
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }

    res.status(200).json({ message: "user authenticated", user });
  } catch (error) {
    console.error("authentication error: " + error);
    res.status(500).json({ message: "internal server error" });
  }
};

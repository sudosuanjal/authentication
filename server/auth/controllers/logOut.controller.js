export const logOut = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "logout successfully" });
  } catch (error) {
    res.status(500).json({ message: "error in logout" });
  }
};

import jwt from "jsonwebtoken";

export const verifyAuth = async (req, res, next) => {
  const token = req.cookies.jwt;
  try {
    if (!token) {
      return res.status(400).json({ message: "not authenticated" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("user id: " + decode.userId);
    req.userId = decode;

    next();
  } catch (error) {
    console.error("token verification failed: " + error);
    res.status(401).json({ message: "invalid or expired token" });
  }
};

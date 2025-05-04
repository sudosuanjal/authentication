import express from "express";
import authRoutes from "./auth/auth.js";

const app = express();

app.get("/", (rep, res) => {
  res.send("hello from the server");
});

app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000..");
});

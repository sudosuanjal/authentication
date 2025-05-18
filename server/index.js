import express from "express";
import authRoutes from "./auth/auth.js";
import { configDotenv } from "dotenv";
import { connect } from "./database/connectDB.js";

const app = express();
configDotenv();
app.use(express.json());

app.get("/", (rep, res) => {
  res.send("hello from the server");
  console.log(process.env.DATABASE_URI);
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connect();
  console.log("listening on port 3000..");
});

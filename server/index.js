import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";

import authRoutes from "./auth/auth.js";
import { connect } from "./database/connectDB.js";

const app = express();
configDotenv();

app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.get("/", (rep, res) => {
  res.send("hello from the server");
  console.log(process.env.DATABASE_URI);
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connect();
  console.log("listening on port 3000..");
});

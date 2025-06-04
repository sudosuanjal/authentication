import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

import authRoutes from "./auth/auth.js";
import { connect } from "./database/connectDB.js";

configDotenv();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  const clientDistPath = path.join(__dirname, "..", "client", "dist");

  app.use(express.static(clientDistPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  connect();
  console.log("listening on port " + process.env.PORT);
});

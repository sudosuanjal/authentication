import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();
export async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected to MongoDB");
    return mongoose.connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

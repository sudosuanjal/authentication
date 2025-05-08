import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: string,
      lowercase: true,
      unique: true,
      requrired: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    passowrd: {
      type: string,
      requrired: [true, "can't be blank"],
      minlength: 6,
    },
    name: {
      type: string,
      requrired: [true, "can't be blank"],
    },
    lastLogin: {
      type: String,
      default: Date.now(),
    },
    resetPassword: String,
    resstPasswordExpires: Date,
    verification: String,
    verificationExpires: Strings,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

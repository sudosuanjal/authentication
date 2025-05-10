import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    password: {
      type: String,
      required: [true, "can't be blank"],
      minlength: 6,
    },
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPassword: String,
    resetPasswordExpires: Date,
    verificationCode: String,
    verificationExpires: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

import express from "express";
const router = express.Router();

const signIn = async (rep, res) => {
  res.send("hello from signIn");
};

const signUp = async (rep, res) => {
  res.send("hello from signUp");
};

const logIn = async (rep, res) => {
  res.send("hello from logIn");
};

router.get("/signIn", signIn);
router.get("/signUp", signUp);
router.get("/logIn", logIn);

export default router;

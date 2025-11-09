import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/mylist", verifyToken, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user.myList);
});

router.post("/mylist", verifyToken, async (req, res) => {
  const { movieId } = req.body;
  const user = await User.findById(req.user.id);
  if (!user.myList.includes(movieId)) user.myList.push(movieId);
  await user.save();
  res.json(user.myList);
});

router.delete("/mylist/:movieId", verifyToken, async (req, res) => {
  const { movieId } = req.params;
  const user = await User.findById(req.user.id);
  user.myList = user.myList.filter(id => id !== movieId);
  await user.save();
  res.json(user.myList);
});

export default router;

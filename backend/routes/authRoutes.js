import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import User from "../models/User.js";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
console.log(User.schema.paths)
router.get("/",(req,res)=>{
  console.log("login signup")
   res.send(User.schema.paths)
})
router.post("/signup" ,async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const hash = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hash });
    await user.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Signup failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // localStorage.setItem("userData",user)
    if (!user) return res.status(400).json({ message: "Invalid email" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user: { name: user.name, email: user.email } });
  
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});

export default router;

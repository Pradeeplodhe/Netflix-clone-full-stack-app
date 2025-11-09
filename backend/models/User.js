import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  myList: [String],
});

export default mongoose.model("UserNetflix", userSchema);

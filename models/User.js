import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  createdAt: { type: Number, default: Date.now() },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  top: [
    new Schema({
      uri: { type: String, default: "" },
      isTop: { type: Boolean, default: true },
      rating: { type: Number, defualt: 0 },
      season: { type: String, default: "" },
    }),
  ],
  bottom: [
    new Schema({
      uri: { type: String, default: "" },
      isTop: { type: Boolean, default: false },
      rating: { type: Number, defualt: 0 },
      season: { type: String, default: "" },
    }),
  ],
});

/* 
userSchema.add("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});
*/

const User = mongoose.model("User", userSchema);

export default User;

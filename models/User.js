import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  createdAt: { type: Number, default: Date.now() },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  top: [
    new Schema({
      name: { type: String },
      uri: { type: String },
      isTop: { type: Boolean },
      rating: { type: Number },
      season: { type: String },
      range: { type: Number },
      clothIndex: { type: String },
    }),
  ],
  bottom: [
    new Schema({
      name: { type: String },
      uri: { type: String },
      isTop: { type: Boolean },
      rating: { type: Number },
      season: { type: String },
      range: { type: Number },
      clothIndex: { type: String },
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

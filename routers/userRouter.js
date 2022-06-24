import express from "express";
import { postSignup, postLogin } from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/signup").post(postSignup);
userRouter.route("/login").post(postLogin);

export default userRouter;

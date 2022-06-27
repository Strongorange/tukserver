import express from "express";
import {
  postSignup,
  postLogin,
  postPhoto,
  testF,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/test").get(testF);
userRouter.route("/signup").post(postSignup);
userRouter.route("/login").post(postLogin);
userRouter.route("/data/:id/:isTop").post(postPhoto);

export default userRouter;

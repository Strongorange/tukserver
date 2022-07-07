import express from "express";
import { fromApp, getData, sendData } from "../controllers/arduinoController";

const arduinoRouter = express.Router();

arduinoRouter.route("/get").get(sendData);
arduinoRouter.route("/:isTop/:clothIndex").post(fromApp);

export default arduinoRouter;

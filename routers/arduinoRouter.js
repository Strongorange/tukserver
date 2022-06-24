import express from "express";
import { getData, sendData } from "../controllers/arduinoA";

const arduinoRouter = express.Router();

arduinoRouter.route("/top/a/data").get(sendData).post(getData);

export default arduinoRouter;

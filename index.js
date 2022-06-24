import express from "express";
import "./db";
import morgan from "morgan";
import arduinoRouter from "./routers/arduinoRouter";
import userRouter from "./routers/userRouter";

const PORT = 3000;

const app = express();

let topAngleServer;
let bottomAngleServer;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/arduino", arduinoRouter);

app.listen(PORT, () => console.log("Listening port 3000"));

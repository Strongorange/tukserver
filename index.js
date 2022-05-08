import express from "express";

const PORT = 3000;

const app = express();

let topAngleServer;
let bottomAngleServer;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("data sent to Arduino");
  res.send(
    JSON.stringify({ topAngle: topAngleServer, bottomAngle: bottomAngleServer })
  );
});

app.post("/", (req, res) => {
  console.log(req.body);
  topAngleServer = req.body.topAngle;
  bottomAngleServer = req.body.bottomAngle;
});

app.listen(PORT, () => console.log("Listening port 3000"));

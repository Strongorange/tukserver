import express from "express";

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    `
        <h1>HI THERE!</h1>
        `
  );
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => console.log("Listening port 3000"));

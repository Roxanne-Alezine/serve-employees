import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: ["http://localhost:3000"] }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
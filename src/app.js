import express from "express";
import cors from "cors";
import { tweets } from "./tweets.js";

const PORT = 4000;

const app = express();
app.use(cors());

app.listen(PORT, () =>
  console.log(`Seu servidor esta sendo hospedado na porta: ${PORT}`)
);

app.get("/tweets", (req, res) => {
  res.send(tweets);
});

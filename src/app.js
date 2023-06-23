import express from "express";
import cors from "cors";
import { tweets } from "./tweets.js";
import { users } from "./users.js";

const PORT = 4000;
let img;
const app = express();
app.use(express.json());
app.use(cors());

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  users.push({ username, avatar });
  img = avatar;
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  tweets.push({ username, avatar: img, tweet });
  res.send(tweets);
});

app.get("/tweets", (req, res) => {
  res.send(tweets);
});

app.listen(PORT, () =>
  console.log(`Seu servidor esta sendo hospedado na porta: ${PORT}`)
);

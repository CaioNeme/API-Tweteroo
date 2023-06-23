import express from "express";
import cors from "cors";
import { tweets } from "./tweets.js";
import { users } from "./users.js";

const PORT = 5000;
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
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  if (tweets.length > 10) {
    for (let i = tweets.length; i > 10; i--) {
      tweets.splice(0, 1);
    }
  }
  res.send(tweets);
});

app.listen(PORT, () =>
  console.log(`Seu servidor esta sendo hospedado na porta: ${PORT}`)
);

import express from "express";
import connectionDatabase from "./databases/connection.js";
import User from "./databases/models/user.model.js";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", async (req, res) => {
  await User.create({
    username: "Wisnu",
    password: "Wisnu",
    email: "wisnu@gmail.com",
  });
  res.send("Success");
});

app.listen(process.env.PORT, (req, res) => {
  connectionDatabase();
  console.log(
    `Server listen on http://${process.env.HOST}:${process.env.PORT}`
  );
});

import express from "express";
import connectionDatabase from "./databases/connection.js";
import { configDotenv } from "dotenv";

import router from "./routes/index.js";
configDotenv();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);

app.listen(process.env.PORT, (req, res) => {
  connectionDatabase();
  console.log(
    `Server listen on http://${process.env.HOST}:${process.env.PORT}`
  );
});

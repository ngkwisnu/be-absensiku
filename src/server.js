import express from "express";
import connectionDatabase from "./databases/connection.js";
import { configDotenv } from "dotenv";
import morgan from "morgan";
import cors from "cors";

import router from "./routes/index.js";
configDotenv();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", router);
app.use("/api/v1/files", express.static("public/files"));

app.listen(process.env.PORT, (req, res) => {
  connectionDatabase();
  console.log(
    `Server listen on http://${process.env.HOST}:${process.env.PORT}`
  );
});

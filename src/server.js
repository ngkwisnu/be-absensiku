import express from "express";
import connectionDatabase from "./databases/connection.js";
import { configDotenv } from "dotenv";
import morgan from "morgan";
import cors from "cors";
import session from "express-session";

import router from "./routes/index.js";
import dbPool from "./databases/connection.js";

// Load environment variables from .env file
configDotenv();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Session configuration
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);

// Routing
app.use("/api/v1", router);
app.use("/api/v1/files", express.static("public/files"));

const testConnection = async () => {
  try {
    await dbPool.getConnection();
    console.log("Koneksi Berhasil");
  } catch (error) {
    console.log("Koneksi gagal:" + error);
  }
};

// Start server and connect to the database
app.listen(process.env.PORT, () => {
  // connectionDatabase();
  testConnection();
  console.log(
    `Server is listening on http://${process.env.HOST}:${process.env.PORT}`
  );
});

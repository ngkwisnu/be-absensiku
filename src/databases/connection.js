// import mongoose from "mongoose";

// const connectionDatabase = async () => {
//   mongoose
//     .connect(process.env.MONGO_URL)
//     .then((result) => {
//       console.log("MongoDB Connected!");
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

// export default connectionDatabase;

import mysql from "mysql2";
import "dotenv/config";

const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default dbPool.promise();

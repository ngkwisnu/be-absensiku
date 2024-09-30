import express from "express";
import userRoute from "./user.routes.js";
import authRoute from "./auth.routes.js";

const router = express.Router();

router.use("/user", userRoute);
router.use("/auth", authRoute);

export default router;

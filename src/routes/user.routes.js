import express from "express";
import { user_controller } from "../controllers/user/index.js";
import callbackHandle from "../utils/callbackHandle.js";
import protect from "../middlewares/verifyToken.js";

const { list_user, create_user } = user_controller;
const router = express.Router();

router.get("/", protect, callbackHandle(list_user));
router.post("/", callbackHandle(create_user));

export default router;

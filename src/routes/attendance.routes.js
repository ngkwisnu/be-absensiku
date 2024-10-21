import express from "express";
import uploadFile from "../middlewares/uploadFile.js";
import callbackHandle from "../utils/callbackHandle.js";
import { attendance_controller } from "../controllers/attendance/index.js";
import protect from "../middlewares/verifyToken.js";

const router = express.Router();
const { create_attendance, checkout_attendance } = attendance_controller;
router.post("/", uploadFile, protect, callbackHandle(create_attendance));
router.put("/:id", callbackHandle(checkout_attendance));

export default router;

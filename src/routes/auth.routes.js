import express from "express";
import { auth_controller } from "../controllers/auth/index.js";
import callbackHandle from "../utils/callbackHandle.js";

const router = express.Router();
const { login_user } = auth_controller;

router.post("/login", callbackHandle(login_user));

export default router;

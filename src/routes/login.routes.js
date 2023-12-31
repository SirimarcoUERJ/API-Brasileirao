import express from "express";
import loginController from "../controllers/login.controller.js";

const router = express.Router();

router.post("/", loginController.auth);

export default router;
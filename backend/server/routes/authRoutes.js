import express from "express";
import { finalAuth } from "../controllers/authControllers.js";
import {
  googleMiddleware,
  signInMiddleware,
  authMiddleware,
} from "../middleware/auth.js";

const router = express.Router();

router.post("/", googleMiddleware, authMiddleware, signInMiddleware, finalAuth);

export default router;

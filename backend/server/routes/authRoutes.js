import express from "express";
import { signup, signin, googleAuth } from "../controllers/authControllers.js";
import { checkGoogleUser } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", checkGoogleUser, googleAuth);

export default router;

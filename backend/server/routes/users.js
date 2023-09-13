import express from "express";
import { singup, login, auth } from "../controllers/users.js";
import { checkGoogleUser } from "../middleware/middleware.js";

const router = express.Router();

router.post("/signup", checkGoogleUser, singup);
router.post("/login", checkGoogleUser, login);
router.post("/auth", auth);

export default router;

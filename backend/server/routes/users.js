import express from "express";
import { getUsers, registerUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/register", registerUser);

export default router;

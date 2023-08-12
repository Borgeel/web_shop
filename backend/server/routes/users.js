import express from "express";
import { getUsers, singup, login } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/signup", singup);
router.post("/login", login);

export default router;

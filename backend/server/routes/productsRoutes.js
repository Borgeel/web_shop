import express from "express";
import auth from "../middleware/auth.js";

import { getProducts } from "../controllers/productsControllers.js";

const router = express.Router();

router.route("/").get(auth, getProducts);

export default router;

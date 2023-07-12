import express from "express";
import auth from "../middleware/auth.js";

import { getProducts } from "../controllers/products.js";

const router = express.Router();

router.route("/").get(auth, getProducts);

export default router;

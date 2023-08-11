import express from "express";

import passport from "../middleware/passport.js";
import { getProducts } from "../controllers/products.js";

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), getProducts);

export default router;

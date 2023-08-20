import express from "express";

import passport from "../middleware/passport.js";
import { getProducts, addProduct } from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", passport.authenticate("jwt", { session: false }), addProduct);

export default router;

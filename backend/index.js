import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDb } from "./server/config/db.js";

// MIDDLEWARE
import passport from "./server/middleware/passport.js";

// ROUTES
import productRoutes from "./server/routes/productRoutes.js";
import authRoutes from "./server/routes/authRoutes.js";
import { checkGoogleUser } from "./server/middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(passport.initialize());

app.use("/products", productRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => console.log(`Server running on PORT: ${port}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import productsRoutes from "./server/routes/productsRoutes.js";
import userRoutes from "./server/routes/userRoutes.js";

import { connectDb } from "./server/config/db.js";

connectDb();

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use("/", productsRoutes);

app.get("/", (req, res) => res.json({ message: "App is running" }));

app.listen(port, () => console.log(`Server running on PORT: ${port}`));

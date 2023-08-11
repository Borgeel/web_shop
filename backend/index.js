import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import { connectDb } from "./server/config/db.js";
import passport from "./server/middleware/passport.js";

// MIDDLEWARE

// ROUTES
import products from "./server/routes/products.js";
import users from "./server/routes/users.js";

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

app.use("/products", products);
app.use("/users", users);

app.listen(port, () => console.log(`Server running on PORT: ${port}`));

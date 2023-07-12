import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import bodyParser from "body-parser";
import connectMongoDBSession from "connect-mongodb-session";

import { connectDb } from "./server/config/db.js";

// ROUTES
import products from "./server/routes/products.js";
import auth from "./server/routes/auth.js";
import users from "./server/routes/users.js";

connectDb();
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const MongoDBStore = connectMongoDBSession(session);

var sessionStore = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions",
});

// app.use(passport.initialize());

// Setup session
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);
// app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate("session"));

app.use("/products", products);
app.use("/auth", auth);
app.use("/users", users);

app.listen(port, () => console.log(`Server running on PORT: ${port}`));

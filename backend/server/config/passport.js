import passport from "passport";
import localStrategy from "./localStrategy.js";
import User from "../models/user.js";

passport.use("local", localStrategy);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  await User.findById(id, (error, user) => done(error, user));
});

export default passport;

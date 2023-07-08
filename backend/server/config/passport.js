import passport from "passport";
import localStrategy from "./localStrategy.js";
import User from "../models/user.js";

passport.use("local", localStrategy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  await User.findById(id, function (err, user) {
    done(err, user);
  });
});

export default passport;

// passport.use("local", localStrategy);

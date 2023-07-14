import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/user.js";

function initializePassport(passport) {
  const authenticateUser = async (username, email, password, done) => {
    try {
      const user = await User.findOne({ username } || { email });

      if (!user) {
        return done(null, false, { message: "Incorrect username of email." });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return done(null, false, { message: "Incorrect password!" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  };

  passport.use(new LocalStrategy(authenticateUser));
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser(async (id, done) => {
    await User.findById(id, (error, user) => done(error, user));
  });
}

export default initializePassport;

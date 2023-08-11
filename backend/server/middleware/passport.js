// src/middleware/passport.js
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { secretOrKey } from "../config/keys.js";
import User from "../models/user.js";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (err) {
      return done(err, false);
    }
  })
);

export default passport;

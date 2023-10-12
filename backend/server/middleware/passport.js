import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../models/user.js";
import user from "../models/user.js";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

const strategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  const { userData } = payload;
  console.log(userData);
  try {
    const user = await User.findById(userData._id);
    console.log(user);
    if (user) {
      console.log(user);
      console.log("pass ran");
      return done(null, user);
    } else {
      console.log("pass ran");
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
});

passport.use(strategy);

export default passport;

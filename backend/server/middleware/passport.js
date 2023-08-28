import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../models/user.js";

// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: secretOrKey,
// };

const jwtCookieExtractor = (req) => {
  console.log(req);
  if (req && req.cookies) {
    return req.cookies["access-token"];
  }
  return null;
};

const jwtOptions = {
  jwtFromRequest: jwtCookieExtractor, // Use the custom cookie extractor
  secretOrKey: secretOrKey,
};

const strategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.id);
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

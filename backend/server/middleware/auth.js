import passport from "../config/passport.js";

const auth = async (req, res, next) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) return next(error);
    if (!user) {
      return res.status(400).json({ message: info.message });
    }
    req.logIn(user, (error) => {
      if (error) return next(error);
      return res.json({ user });
    });
  })(req, res, next);
};

export default auth;

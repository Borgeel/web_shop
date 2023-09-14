import { googleAuthHandler } from "../controllers/authControllers.js";
import User from "../models/user.js";

////////////////////////////////// MIDDLEWARE ///////////////////////////////

// Middleware to check whether google user exists
export const checkGoogleUser = async (req, res, next) => {
  const { googleToken } = req.body;

  if (googleToken) {
    const credentials = await googleAuthHandler(googleToken);

    if (credentials) {
      const googleId = credentials.sub;
      const existingGoogleUser = await User.findOne({
        googleId,
      });

      if (existingGoogleUser) {
        req.isGoogleUser = true;
        req.body.googleToken = credentials;
      } else {
        req.isGoogleUser = false;
        req.body.googleToken = credentials;
      }
    }
  }

  next();
};

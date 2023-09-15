import bcrypt from "bcrypt";
import User from "../models/user.js";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const googleMiddleware = async (req, res, next) => {
  // If google token is not in req return
  if (!req.body.googleToken) return next();

  const { googleToken } = req.body;
  try {
    const url = `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${googleToken.access_token}`;
    // Decode access_token
    const response = await fetch(url);
    const userData = await response.json();

    // Check is gmail already registred
    const existingGoogleUser = await User.findOne({
      googleId: userData.sub,
    });
    // If the user exists send credentials and skip to sign in
    if (existingGoogleUser) {
      req.isGoogleUser = true;
      req.credentials = existingGoogleUser;
    } else {
      // Populate creds with google data
      req.isGoogleUser = false;
      req.credentials = userData;
    }
    next();
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const authMiddleware = async (req, res, next) => {
  // GOOGLE ACCOUNT EXISTS -> SIGN IN
  if (req.isGoogleUser === true) return next();

  // GOOGLE ACCOUNT -> SIGN UP
  if (req.credentials) {
    try {
      const newGoogleUser = await new User({
        email: req.credentials.email,
        googleId: req.credentials.sub,
        username: req.credentials.name,
        firstName: req.credentials.given_name,
        lastName: req.credentials.family_name,
        picture: req.credentials.picture,
      });

      // CREATE NEW GOOGLE ACCOUNT -> SIGN IN
      await newGoogleUser.save();
      req.credentials = newGoogleUser;
      next();
    } catch (error) {
      return res.status(500).json({ success: false, message: error });
    }
  } else {
    // MANUAL
    const { username, email, password, firstName, lastName, isSignUp } =
      req.body;
    // MANUAL SIGN IN / SIGN UP
    try {
      // CHECK CREDENTIALS
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });
      if (isSignUp && existingUser) {
        return res.status(401).json({
          success: false,
          message: "Email or username were already used",
        });
      } else if (!isSignUp && existingUser) {
        const isMatch = await bcrypt.compare(password, existingUser.password);

        if (isMatch) {
          req.credentials = existingUser;
          return next();
        }
      }
      // SIGN UP NEW USER
      const salt = 12;
      const hash = await bcrypt.hash(password, salt);
      const newUser = await new User({
        username,
        lastName,
        firstName,
        email,
        password: hash,
        profileColor: getRandomColor(),
      });

      newUser.save();
      req.credentials = newUser;
      return next();
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
};

const signInMiddleware = async (req, res, next) => {
  // GOOGLE SIGN IN
  if (req.isGoogleUser === true) return next();
  // MANUAL SING IN
  if (req.body.isSignUp === false) {
    const isMatch = await bcrypt.compare(
      req.body.password,
      req.credentials.password
    );
    if (!isMatch)
      return res
        .status(401)
        .json({ success: false, message: "Password incorrect" });
    return next();
  }
  // MANUAL SIGN UP
  if (req.body.isSignUp === true) return next();

  next();
};

export { googleMiddleware, authMiddleware, signInMiddleware };

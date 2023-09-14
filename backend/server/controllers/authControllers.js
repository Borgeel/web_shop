import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

///////////////////////// CONTROLLERS ///////////////////
export const signup = async (req, res) => {
  const { username, password, firstName, lastName, email, googleToken } =
    req.body;
  console.log(googleToken);
  // Google Signup
  try {
    if (googleToken && req.isGoogleUser === false) {
      const newGoogleUser = await User.create({
        email: googleToken.email,
        googleId: googleToken.sub,
        username: googleToken.name,
        firstName: googleToken.given_name,
        lastName: googleToken.family_name,
        picture: googleToken.picture,
      });

      newGoogleUser.save();
      const token = await generateJwt(newGoogleUser);
      res.status(200).json({
        success: true,
        message: "User registered",
        token: `Bearer ${token}`,
      });
    } else {
      // Regular signup
      const existingUser = await User.findOne({ username });
      if (existingUser)
        return res
          .status(400)
          .json({ success: false, message: "Credentials were already used!" });

      const hash = await bcrypt.hash(password, 12);
      const user = await new User({
        username,
        password: hash,
        email,
        firstName,
        lastName,
      });
      await user.save();

      const token = await generateJwt(user);

      res.status(200).json({
        success: true,
        message: "User registered",
        token: `Bearer ${token}`,
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const signin = async (req, res) => {
  const { username, password, googleToken } = req.body;

  try {
    if (googleToken && req.isGoogleUser === true) {
      const existingGoogleUser = await User.findOne({
        googleId: googleToken.sub,
      });

      if (existingGoogleUser) {
        console.log(existingGoogleUser);
        const token = await generateJwt(existingGoogleUser);
        console.log("Token in controller", token);
        return res
          .status(201)
          .json({ success: true, token: `Bearer ${token}` });
      }
      return res.status(401).json({
        success: false,
        message: "No user under this google account",
      });
    } else {
      const existingUser = await User.findOne({ username });
      if (!existingUser) {
        return res
          .status(401)
          .json({ success: false, message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (isMatch) {
        const token = await generateJwt(existingUser);
        return res.status(201).json({
          success: true,
          token: `Bearer ${token}`,
        });
      } else {
        return res
          .status(401)
          .json({ success: false, message: "Password incorrect" });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const googleAuth = async (req, res) => {
  if (req.isGoogleUser) {
    signin(req, res);
  } else {
    signup(req, res);
  }
};

/////////////////////// HELPERS ///////////////////////
const generateJwt = async (credentials) => {
  const token = jwt.sign({ credentials }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
};

export const googleAuthHandler = async (accessToken) => {
  if (accessToken) {
    const url = `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken.access_token}`;
    try {
      const response = await fetch(url);
      const user = await response.json();

      return user;
    } catch (error) {
      console.log(error);
    }
  }
};

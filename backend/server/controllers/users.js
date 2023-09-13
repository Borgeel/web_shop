import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { googleAuthHandler } from "../middleware/middleware.js";

export const generateJwt = async (credentials) => {
  const { _id, username } = credentials;

  const token = jwt.sign({ _id, username }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
};

export const singup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res
        .status(400)
        .json({ success: false, message: "Credentials were already used!" });

    const hash = await bcrypt.hash(password, 12);

    const user = await new User({ username, password: hash });
    await user.save();

    const token = await generateJwt(user);

    res.status(200).json({
      success: true,
      message: "User registered",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  if (!!req.body.googleToken) {
    const accessToken = req.body.googleToken;
    const googleUser = await googleAuthHandler(accessToken);

    console.log(googleUser);
  }

  const { username, password } = req.body;

  try {
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
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};

export const auth = async (req, res) => {
  const { username, password, googleToken } = req.body;

  try {
    if (googleToken) {
      const googleUser = await googleAuthHandler(googleToken);
      if (googleUser) {
        const existingUser = await User.findOne({ googleId: googleUser.sub });
        if (existingUser)
          return res.status(400).json({
            success: false,
            message: "User with this google account already exists",
          });

        const { sub: _id, name: username } = googleUser;
        const newGoogleUser = await User.create({ _id, username });
        await newGoogleUser.save();
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

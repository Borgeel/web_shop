import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secretOrKey } from "../config/keys.js";

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

    res.json({ success: true, message: "User registered" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log(error);
  }
};

export const login = async (req, res) => {
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
      const token = jwt.sign(
        { id: existingUser._id, username: existingUser.username },
        secretOrKey,
        {
          expiresIn: "1h",
        }
      );
      return res.json({
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

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ users: users });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

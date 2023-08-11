import User from "../models/user.js";
import bcrypt, { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { secretOrKey } from "../config/keys.js";

export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const user = await new User({ username, password, email });
    await user.save();

    res.json({ success: true, message: "User registered" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (!existingUser || existingUser.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credentials" });
    }

    const payload = { id: existingUser._id, username: existingUser.username };
    const token = jwt.sign(payload, secretOrKey, { expiresIn: "1h" });

    res.json({ success: true, token: `Bearer ${token}`, result: existingUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log(error);
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

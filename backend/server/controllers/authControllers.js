import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

///////////////////////// CONTROLLERS ///////////////////
export const finalAuth = async (req, res) => {
  const credentials = req.credentials;

  console.log("From final auth", credentials);
  try {
    const token = jwt.sign({ credentials }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.status(201).json({ success: true, token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const responseToken = async (userData, res) => {
  try {
    const token = jwt.sign({ userData }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.status(201).json({ success: true, token: `Bearer ${token}` });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};

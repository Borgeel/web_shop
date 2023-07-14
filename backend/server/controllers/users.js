import mongoose from "mongoose";
import User from "../models/user.js";

export const register = async (req, res) => {
  const { username, password, email } = req.body;

  // console.log({ username, password, email });
  try {
    res.status(200).json(username, password, email);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    // console.log(users);

    res.status(200).json({ users: users });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const registerUser = async (req, res) => {
  const { username, password, email } = req.body;

  const newUser = await User.create({
    username: username,
    password: password,
    email: email,
  });

  res.status(200).json({ user: newUser });
};

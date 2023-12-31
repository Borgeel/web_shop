import jwt from "jsonwebtoken";

///////////////////////// CONTROLLERS /////////////////////////
export const finalAuth = async (req, res) => {
  const userData = req.credentials;

  try {
    const token = jwt.sign({ userData }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.status(201).json({ success: true, token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

import User from "../models/user.js";

export const checkGoogleUser = async (req, res, next) => {
  if (!!req.body.googleToken) {
    const accessToken = req.body.googleToken;
    const googleUser = await googleAuthHandler(accessToken.access_token);

    const existingUser = await User.findOne({ googleId: googleUser.sub });

    if (existingUser)
      return res.status(400).json({
        success: false,
        message: "User with this google account already exists",
      });
  }
  next();
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

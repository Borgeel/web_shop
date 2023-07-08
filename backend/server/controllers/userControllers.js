export const register = async (req, res) => {
  const { username, password, email } = req.body;

  console.log({ username, password, email });
  try {
    res.status(200).json(username, password, email);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {};

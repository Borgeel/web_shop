import jwt_decode from "jwt-decode";

export const getToken = () => {
  const user = localStorage.getItem("token");
  return user;
};

export const getUser = () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwt_decode(token);

      return decodedToken;
    } catch (error) {
      console.log(error);
    }
  }
};

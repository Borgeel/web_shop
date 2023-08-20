import jwt_decode from "jwt-decode";

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getAuthToken = () => {
  const token = getToken();

  return {
    Authorization: token,
    "Content-Type": "application/json",
  };
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

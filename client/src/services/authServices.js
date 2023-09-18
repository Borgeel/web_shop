import { requestServices } from "./requestServices";

export const authServices = {
  authRequest: async (credentials) => {
    try {
      const response = await requestServices.request(
        "/auth",
        "POST",
        credentials
      );
      localStorage.setItem("token", response.token);
      return response;
    } catch (error) {
      console.log("Error in authServices: ", error);
    }
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  // Get get user credentials via request to the server
  getUserDataFromServer: async () => {
    try {
      const userData = await requestServices.authRequest("/user", "GET", null);

      return userData;
    } catch (error) {
      console.log("Error in authServices.getCredentialsFromServer: ", error);
    }
  },
};

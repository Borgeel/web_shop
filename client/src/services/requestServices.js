const API = process.env.REACT_APP_API_BASE_URL;

export const requestServices = {
  request: async (url, method, body = {}, authHeaders = {}) => {
    try {
      const response = await fetch(`${API}${url}`, {
        headers: {
          "Content-Type": "application/json",
          ...authHeaders,
        },
        method,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.log("Error in requestServices.request: ", error);
    }
  },

  requestWithAuth: async (url, method, body = {}) => {
    try {
      const authHeaders = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await requestServices.request(
        url,
        method,
        body,
        authHeaders
      );

      return response;
    } catch (error) {
      console.log("Error in requestServices.authRequest: ", error);
    }
  },
};

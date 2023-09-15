import { getAuthToken } from "../hooks/useAuth";

export const API = "http://localhost:5000";

export const request = async (url, method, body) => {
  const headers = {
    ...getAuthToken(),
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(`${API}/${url}`, {
      headers,
      method,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (formData) => {
  try {
    const response = await request("products", "POST", formData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await request(`products/${id}`, "DELETE");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const tokenHandler = async (formData) => {
  try {
    console.log("Form Data token handler", formData);
    const cred = await request(`auth`, "POST", formData);
    return cred;
  } catch (error) {
    console.log(error);
  }
};

export const googleTokenHandler = async (googleToken) => {
  try {
    const token = await request(`auth`, "POST", googleToken);
    return token;
  } catch (error) {
    console.log(error);
  }
};

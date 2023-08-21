import { getAuthToken } from "../utils/auth";

export const API = "http://localhost:5000";

const request = async (url, method, body) => {
  const headers = {
    ...getAuthToken(),
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(`${API}/${url}`, {
      method,
      headers,
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
    const response = await fetch("products", "POST", formData);
    return response;
  } catch (error) {
    console.log(error);
  }
};
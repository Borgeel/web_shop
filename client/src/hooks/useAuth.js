import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const getAuthToken = () => {
  const token = localStorage.getItem("token");

  return {
    Authorization: token,
    "Content-Type": "application/json",
  };
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const decodedToken = () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwt_decode(token);
        return decoded;
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const getToken = () => localStorage.getItem("token");

  const login = (token) => {
    localStorage.setItem("token", token);

    if (token) {
      const user = jwt_decode(token);
      setUser(user);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, decodedToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

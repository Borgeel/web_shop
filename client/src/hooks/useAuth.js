import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const token = localStorage.getItem("token");

export const getAuthToken = () => {
  if (token) {
    return {
      Authorization: token,
      "Content-Type": "application/json",
    };
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setisAuth] = useState(
    !!localStorage.getItem("isAuthenticated")
  );

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      setUser(decoded);
    }
  }, [isAuth]);

  const login = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("isAuthenticated", true);
  };

  const logout = () => {
    localStorage.clear();
    setisAuth(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

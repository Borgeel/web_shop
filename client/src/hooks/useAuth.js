import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const token = () => localStorage.getItem("token");

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
  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("isAuthenticated")
  );

  useEffect(() => {
    if (isAuth && token()) {
      console.log("useEffect from useAuth ran");
      const decoded = jwt_decode(token());
      setUser(decoded);
    } else {
      localStorage.setItem("isAuthenticated", false);
      setIsAuth(false);
    }
  }, [isAuth]);

  const login = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("isAuthenticated", true);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isAuthenticated", false);
    setIsAuth(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

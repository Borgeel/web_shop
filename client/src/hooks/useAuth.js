import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const getAuthToken = () => {
  const token = Cookies.get("access-token");

  return {
    Authorization: token,
    "Content-Type": "application/json",
  };
};

const decodedToken = () => {
  const token = Cookies.get("access-token");

  if (token) {
    try {
      const decoded = jwt_decode(token);
      return decoded;
    } catch (error) {
      console.log(error);
    }
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    Cookies.get("access-token") !== undefined || null
  );

  useEffect(() => {
    const token = Cookies.get("access-token");

    if (isAuthenticated && token) {
      try {
        const decoded = decodedToken();

        if (decoded) {
          setUser(decoded);
          // Check token exp
          const now = Date.now() / 1000;
          if (decoded.exp < now) logout();
        }
      } catch (error) {
        console.log(error);
        logout();
      }
    } else logout();
  }, [isAuthenticated]);

  const login = (token) => {
    Cookies.set("access-token", token);

    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove("access-token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

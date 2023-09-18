import { createContext, useState, useMemo, useEffect, useContext } from "react";
import { authServices } from "../services/authServices";
import jwtDecode from "jwt-decode";

const AuthContext = createContext({});

// HOOK
export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (!authContext)
    throw new Error("AuthContext can only be access within AuthProvider");
  return authContext;
};

// CONTEXT
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const memoizedUser = useMemo(() => user, [user]);

  useEffect(() => {
    decodeAuthToken();
  }, []);

  const auth = async (credentials) => {
    try {
      const response = await authServices.authRequest(credentials);
      if (response && response.success) {
        decodeAuthToken();
      }
    } catch (error) {
      setUser(null);
      setError("Error in AuthProvider.auth: ", error);
    }
  };

  const logout = () => {
    authServices.logout();
    setUser(null);
  };

  const decodeAuthToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);

      const userData = {
        ...decodedToken.userData,
        exp: decodedToken.exp,
        iat: decodedToken.iat,
      };
      setUser(userData);
    }
  };

  const authContextValue = {
    user: memoizedUser,
    decodeAuthToken,
    setIsLoading,
    isLoading,
    setError,
    setUser,
    logout,
    auth,
    error,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { createContext, useState } from "react";
import { getUser } from "../utils/auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  setUser(getUser());

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

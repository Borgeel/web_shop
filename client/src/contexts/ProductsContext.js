import React, { createContext } from "react";
import { useFetch } from "../utils/useFetch";

export const ProductsConext = createContext();

export const ProductsProvider = ({ children }) => {
  const {
    data: products,
    loading,
    error,
  } = useFetch("", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });

  return (
    <ProductsConext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsConext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext({});

// HOOK
export const useProductContext = () => {
  const productContext = useContext(ProductContext);
  if (!productContext)
    throw new Error("AuthContext can only be access within AuthProvider");
  return productContext;
};

// CONTEXT
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {}, []);

  const productContextValue = {
    products,
    product,
    count,
  };

  return (
    <ProductContext.Provider value={productContextValue}>
      {children}
    </ProductContext.Provider>
  );
};

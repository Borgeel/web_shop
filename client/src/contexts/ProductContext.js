import { createContext, useContext, useEffect, useState } from "react";
import { productServices } from "../services/productServices";

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

  const addProduct = async (productData) => {
    try {
      const response = await productServices.createProduct(productData);
      if (response && response.success) {
        setProducts((prevProducts) => {
          return [...prevProducts, response.newProduct];
        });
      } else {
        throw new Error("Error from addProduct response", response.error);
      }
    } catch (error) {
      console.log("Error from ProductProvider.addProduct: ", error);
    }
  };

  const productContextValue = {
    products,
    product,
    addProduct,
    count,
  };

  return (
    <ProductContext.Provider value={productContextValue}>
      {children}
    </ProductContext.Provider>
  );
};

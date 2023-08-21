import { createContext, useContext, useState } from "react";

const DataContext = createContext({});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const onDelete = (id) => {
    const deleteProduct = products.filter((product) => product._id !== id);

    setProducts(deleteProduct);
  };

  return (
    <DataContext.Provider value={{ products, setProducts, onDelete }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

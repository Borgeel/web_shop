import { createContext, useContext, useState } from "react";

const DataContext = createContext({});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);

  const onDelete = (id) => {
    const deleteProduct = products.filter((product) => product._id !== id);

    setProducts(deleteProduct);
  };

  return (
    <DataContext.Provider value={{ products, setProducts, onDelete, count }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

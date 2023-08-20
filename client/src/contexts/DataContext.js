import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../utils/useFetch";

const DataContext = createContext({});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const URL = "http://localhost:5000";

  return (
    <DataContext.Provider value={{ URL, products, setProducts }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
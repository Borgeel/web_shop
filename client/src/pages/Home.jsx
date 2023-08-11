import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import ProductList from "../components/ProductList";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Welcome to Web Shop!</h2>
      {user ? (
        <ProductList />
      ) : (
        <p>Please login or register to view products.</p>
      )}
    </div>
  );
};

export default Home;

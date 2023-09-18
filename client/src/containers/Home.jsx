import React, { useEffect } from "react";
import ProductList from "../components/product/ProductList";

import { Header, Footer } from "../components";

import { useData } from "../contexts/DataContext";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { products, setProducts } = useData();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* {loading && (
        <h2 className="text-xl font-semibold mb-4">
          Welcome to Web Shop! Loading
        </h2>
      )} */}

      {products?.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <h1> No products found. </h1>
      )}
      <Footer />
    </div>
  );
};

export default Home;

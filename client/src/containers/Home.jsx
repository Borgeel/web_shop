import React, { useEffect } from "react";

import { Header, Footer } from "../components";

import { useProductContext } from "../contexts/ProductContext";
import ProductList from "../components/product/ProductList";
import Loader from "../components/common/Loader";

const Home = () => {
  const { products, setProducts, isLoading, setIsLoading } =
    useProductContext();

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
      <Loader />
      <Footer visible />
    </div>
  );
};

export default Home;

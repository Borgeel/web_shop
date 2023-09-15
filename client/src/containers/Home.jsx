import React, { useEffect } from "react";
import ProductList from "../components/product/ProductList";

import { Header, Footer } from "../components";

import { useFetch } from "../hooks/useFetch";
import { useData } from "../contexts/DataContext";
import { API } from "../api";

const Home = ({ user }) => {
  const { products, setProducts } = useData();
  const { data, loading, error } = useFetch(`${API}/products`);

  useEffect(() => {
    if (data) {
      // console.log("Refetched");
      setProducts(data.products);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {loading && (
        <h2 className="text-xl font-semibold mb-4">
          Welcome to Web Shop! Loading
        </h2>
      )}
      {user ? (
        products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <p> No products found! </p>
        )
      ) : (
        <p>Please login or register to view products.</p>
      )}
      <Footer />
    </div>
  );
};

export default Home;

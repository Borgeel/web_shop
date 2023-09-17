import React, { useContext, useEffect } from "react";
import ProductList from "../components/product/ProductList";

import { Header, Footer } from "../components";

import { useFetch } from "../hooks/useFetch";
import { useData } from "../contexts/DataContext";
import { API } from "../api";
import { UserContext, useUser } from "../contexts/UserContext";

const Home = () => {
  const { products, setProducts } = useData();
  const { data, loading, error } = useFetch(`${API}/products`);
  const { user } = useUser();
  console.log(user);

  useEffect(() => {
    if (data) {
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

      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <h1> No products found. </h1>
      )}

      <Footer />
    </div>
  );
};

export default Home;

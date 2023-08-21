import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useFetch } from "../utils/useFetch";
import { useData } from "../contexts/DataContext";

const Home = ({ user }) => {
  const { URL, products, setProducts } = useData();
  const { data, loading, error } = useFetch(`${URL}/products`);

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
      <Header user={user} />
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

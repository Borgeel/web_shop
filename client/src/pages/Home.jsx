import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/DataContext";
import { useNavigate } from "react-router";

const Home = ({ user }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header user={user} />
      <h2 className="text-xl font-semibold mb-4">Welcome to Web Shop!</h2>
      {user ? (
        <ProductList />
      ) : (
        <p>Please login or register to view products.</p>
      )}
      <Footer />
    </div>
  );
};

export default Home;

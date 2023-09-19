import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { useAuthContext } from "../../contexts/AuthContext";

// Components
import AddProduct from "../product/AddProduct";
import { Button } from "../common";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

const Header = () => {
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);
  const { user } = useAuthContext();

  const toggleAddItem = () => {
    setIsAddItemOpen((prevState) => !prevState);
  };

  const closeAddItem = () => {
    setIsAddItemOpen(false);
  };

  return (
    <header className="bg-gray-800 bg-gradient-to-r gradient text-white p-2">
      <div className="container mx-auto flex justify-between items-center p-2">
        <Link to="/">
          <h1 className="text-2xl ml-3 font-semibold text-white">Web Shop</h1>
        </Link>
        {user && (
          <div className="md:hidden  group-hover:text-blue-200 transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-100">
            <TiThMenu className="text-3xl cursor-pointer" />
          </div>
        )}

        <div className="hidden md:flex">
          <Navbar />
        </div>
      </div>

      <div className="bg-gray-200 py-1 px-4 flex justify-between items-center">
        <SearchBar />
        {user && (
          <Button
            className="bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 active:bg-blue-800"
            onClick={() => toggleAddItem()}
          >
            List product
          </Button>
        )}
      </div>
      {isAddItemOpen && <AddProduct onClose={closeAddItem} />}
    </header>
  );
};

export default Header;

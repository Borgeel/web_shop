import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import AddProduct from "./AddProduct";

const Header = ({ user }) => {
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);

  const toggleAddItem = () => {
    setIsAddItemOpen((prevState) => !prevState);
  };

  const closeAddItem = () => {
    setIsAddItemOpen(false);
  };

  return (
    <header className="bg-blue-500  text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-lg font-semibold">Web Shop</h1>
        </Link>
        <div className="flex gap-5">
          <div className="relative flex items-center">
            <span className="mr-4"> {user?.username} </span>
          </div>
          <Navbar />
        </div>
      </div>

      <div className="bg-gray-200 py-2 px-4 w-full flex justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-2/3"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={toggleAddItem}
        >
          List Item
        </button>
      </div>

      {isAddItemOpen && <AddProduct onClose={closeAddItem} />}
    </header>
  );
};

export default Header;

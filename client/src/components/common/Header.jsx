import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import AddProduct from "../product/AddProduct";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../hooks/useAuth";
import UserCircle from "./UserCircle";
import Button from "./Button";

const Header = () => {
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);
  const { logout, user } = useAuth();

  const toggleAddItem = () => {
    setIsAddItemOpen((prevState) => !prevState);
  };

  const closeAddItem = () => {
    setIsAddItemOpen(false);
  };

  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-semibold text-white">Web Shop</h1>
        </Link>
        <div className="flex items-center space-x-5">
          {user && (
            <>
              <Navbar />
              <UserCircle user={user} />
              <button
                onClick={() => logout()}
                className="text-white hover:text-blue-400"
              >
                <BiLogOut size={25} />
              </button>
            </>
          )}
          <div className="relative group">
            <AiOutlineShoppingCart
              size={25}
              className="text-white group-hover:text-blue-400"
            />
            {/* Add the cart item count indicator here */}
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-2 px-4 flex justify-between items-center">
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

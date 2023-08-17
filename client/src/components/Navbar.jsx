import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="relative">
      <button
        onClick={toggleDropdown}
        className="text-white focus:outline-none"
      >
        Menu
      </button>
      {isDropdownOpen && (
        <div className="absolute top-10 right-0 bg-white p-2 shadow-md rounded mt-1">
          <ul className="flex flex-col p-4 text-black space-y-2 ">
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/products">Your items</Link>
            </li>
            <li>
              <Link to="/about"> Settings </Link>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

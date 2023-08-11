import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">Web Shop</h1>
        {user ? (
          <div>Welcome, {user?.username}!</div>
        ) : (
          <Link to="/login" className="underline">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

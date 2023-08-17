import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { BsFillArrowDownCircleFill as Down } from "react-icons/bs";

const Header = ({ user }) => {
  return (
    <header className="bg-blue-500  text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-lg font-semibold">Web Shop</h1>
        </Link>
        <div className="flex gap-5">
          <div className="relative flex items-center">
            <span className="mr-4"> {user?.username} </span>
            <div className="absolute bottom-0 right-0">
              <Down />
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;

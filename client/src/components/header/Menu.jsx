import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import Button from "../common/Button";
import { useAuth } from "../../hooks/useAuth";
import useCloseModal from "../../hooks/useCloseModal";

const Menu = ({ isOpen, onClose }) => {
  const menuRef = useRef();
  const { logout } = useAuth();
  useCloseModal(menuRef, onClose);

  const logoutHandler = () => {
    logout();
  };

  return (
    <>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-12 right-0 bg-white p-2 shadow-md rounded mt-1"
        >
          <ul className="flex flex-col p-4 text-black space-y-2">
            <MenuItem to="/" text="Profile" onClose={onClose} />
            <MenuItem to="/products" text="Your items" onClose={onClose} />
            <MenuItem to="/settings" text="Settings" onClose={onClose} />
            <Button
              btnClass="text-blue-500 hover:text-blue-700 transition-all duration-200 ease-in-out"
              onClick={() => logoutHandler()}
              icon={<BiLogOut size={25} />}
            />
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}
    </>
  );
};

const MenuItem = ({ to, text, onClose }) => (
  <li>
    <Link
      to={to}
      className="text-blue-500 hover:text-blue-700"
      onClick={onClose}
    >
      {text}
    </Link>
  </li>
);

export default Menu;

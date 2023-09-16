import React, { useState } from "react";
import Menu from "./Menu";
import { useAuth } from "../../hooks/useAuth";

const AccountIcon = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useAuth();

  console.log(user);

  const getInitials = () => {
    if (user && user.username) {
      const usernameParts = user.username.split(" ");
      if (usernameParts.length >= 2) {
        return (
          usernameParts[0].charAt(0).toUpperCase() +
          usernameParts[1].charAt(0).toUpperCase()
        );
      } else {
        return user.username.charAt(0).toUpperCase();
      }
    }
    return "";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative group cursor-pointer" onClick={toggleDropdown}>
      <div className="hover:scale-105 active:scale-100 duration-300 transition-all">
        {user && user.picture ? (
          <img
            src={user.picture}
            alt="User"
            className="w-11 h-11 rounded-full"
            style={{ backgroundColor: `${user.picture}` }}
          />
        ) : (
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center bg-gray-300 text-white"
            style={{ backgroundColor: `${user.profileColor}` }}
          >
            <span className="text-lg font-bold">{getInitials()}</span>
          </div>
        )}
      </div>

      {isDropdownOpen && (
        <Menu isOpen={isDropdownOpen} onClose={closeDropdown} />
      )}
    </div>
  );
};

export default AccountIcon;

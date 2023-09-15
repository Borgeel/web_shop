import React from "react";
import { Link } from "react-router-dom";
import { FaListAlt } from "react-icons/fa";

const Notification = () => {
  return (
    <Link
      to="/notifications"
      className="text-white hover:text-blue-400 flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-300"
    >
      <span>My listing</span>
      <FaListAlt />
    </Link>
  );
};

export default Notification;

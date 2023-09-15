import React from "react";
import { FaListAlt } from "react-icons/fa";

const MyListing = ({ notificationCount }) => {
  return (
    <div className="relative group">
      <FaListAlt
        size={25}
        className="text-white group-hover:text-blue-200 transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-100"
      />
      {notificationCount > 0 && (
        <div className="absolute top-0 right-0 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center mt-1 mr-1">
          {notificationCount}
        </div>
      )}
    </div>
  );
};

export default MyListing;

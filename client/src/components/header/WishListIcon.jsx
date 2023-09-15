import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { Notification } from "../common";

const WishlistLink = () => {
  const { count } = useData();
  return (
    <Link to="/wishlist" className="relative">
      <div className="px-4 py-2 border border-white rounded-lg text-white hover:text-blue-400 active:scale-95 transition-colors duration-300 relative">
        <span>Wishlist</span>
      </div>
      {count > 0 && (
        <Notification
          color="bg-red-500"
          count={count}
          position="top-0"
          size="w-5 h-5"
        />
        // <div className="absolute top-0 right-0 bg-red-500 text-white w-6 h-6 rounded-full text-xs flex items-center justify-center -mt-2 -mr-2">
        //   {count}
        // </div>
      )}
    </Link>
  );
};

export default WishlistLink;

import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductContext";
import { Button, Notification } from "../common";

const WishlistLink = () => {
  const { count } = useProductContext();
  return (
    <Link to="/wishlist" className="relative">
      <Button
        btnClass="px-4 py-2 text-sm text-white hover:text-blue-400 transition-colors duration-300 relative"
        btnTxt="Wishlist"
      />
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

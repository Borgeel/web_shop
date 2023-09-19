import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductContext";
import { Button, Notification } from "../common";

const WishlistLink = () => {
  const { count } = useProductContext();
  return (
    <Link to="/wishlist" className="relative">
      <Button className="px-4 py-2 text-sm text-white hover:text-blue-400 transition-colors duration-300 relative">
        Wishlist
      </Button>
      {count > 0 && (
        <Notification
          color="bg-red-500"
          count={count}
          position="top-0"
          size="w-5 h-5"
        />
      )}
    </Link>
  );
};

export default WishlistLink;

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon = ({ itemCount }) => {
  return (
    <div className="relative group">
      <AiOutlineShoppingCart
        size={25}
        className="text-white group-hover:text-blue-200 transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-100"
      />
      {itemCount && (
        <div
          className="absolute bottom-0 right-0 bg-red-500 text-white w-4 h-4 rounded-full text-xs flex items-center justify-center -mb-1 -mr-1"
          style={{ fontSize: "0.65rem" }}
        >
          {itemCount}
        </div>
      )}
    </div>
  );
};

export default CartIcon;

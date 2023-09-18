import React from "react";
import { FaListAlt } from "react-icons/fa";
import { useProductContext } from "../../contexts/ProductContext";
import { Notification } from "../common";

const MyListing = () => {
  const { count } = useProductContext();

  return (
    <div className="relative group">
      <FaListAlt
        size={25}
        className="text-white  group-hover:text-blue-200 transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-100"
      />

      {count > 0 && (
        <Notification
          color="bg-orange-500"
          position="top-0"
          count={count}
          size="w-4 h-4"
        />
      )}
    </div>
  );
};

export default MyListing;

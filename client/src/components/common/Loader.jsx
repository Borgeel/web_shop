import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <RotatingLines
        strokeColor="gray"
        strokeWidth="5"
        width="7.5%"
        animationDuration="0.75"
      />
    </div>
  );
};

export default Loader;

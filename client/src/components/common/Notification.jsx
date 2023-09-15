import React from "react";

const Notification = ({ count, color, position, size }) => {
  console.log(size);
  return (
    <div
      className={`${color} absolute ${position} right-0  text-white ${size} rounded-full text-xs flex items-center justify-center -mt-2 -mr-2`}
      style={{ fontSize: "0.65rem" }}
    >
      {count}
    </div>
  );
};

export default Notification;

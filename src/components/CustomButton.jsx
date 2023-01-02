import React from "react";

const CustomButton = ({ title, customStyle, handleClick }) => {
  return (
    <div
      className={`lg:py-4 lg:px-14 md:py-5 md:px-7 px-10 py-4 text-xs lg:text-base flex justify-center cursor-pointer text-white font-title bg-black items-center w-max ${
        customStyle ? customStyle : ""
      }`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default CustomButton;

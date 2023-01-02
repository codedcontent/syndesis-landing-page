import React from "react";

const CustomTextField = ({ title, placeholder, handleChange, type, error }) => {
  return (
    <div className="flex flex-col w-full">
      <div
        className={`md:px-2 h-12 border-2 ${
          error ? "border-red-600" : "border-black"
        } flex items-center w-full`}
      >
        <p className="font-thin font-text text-black gap-1 flex items-center h-full justify-center p-2 text-base">
          {title}:
        </p>

        <input
          type="text"
          className="h-full w-full outline-none pl-2 font-text text-sm font-thin placeholder:text-xs"
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value, type)}
        />
      </div>

      {/* Error */}
      {error && <p className="font-title font0bold text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default CustomTextField;

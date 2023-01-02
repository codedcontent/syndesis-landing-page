import React from "react";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import "./index.css";

const AboutUsCard = ({ title, description }) => {
  return (
    <div className="w-full h-full flex justify-around items-center lg:border-4 border-2 border-black flex-col lg:px-10 px-4 py-4 text-center group hover:bg-black cursor-pointer card-grow-up transition-colors ease-in-out duration-700">
      <div className="w-full flex flex-col gap-4 group-hover:text-white transition-colors ease-in-out duration-700">
        <p className="font-title lg:text-4xl md:text-2xl text-xl capitalize">
          {title}
        </p>

        <p className="font-text lg:text-lg text-xs font-extralight">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutUsCard;

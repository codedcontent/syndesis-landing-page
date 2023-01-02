import React from "react";
import "./index.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PaymentsIcon from "@mui/icons-material/Payments";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="w-full h-full flex justify-around items-center lg:border-4 border-2 border-black flex-col lg:px-10 px-4 py-4 text-center group hover:bg-black cursor-pointer card-shrink transition-colors ease-in-out duration-700">
      <div className="w-full flex flex-col justify-center items-center gap-4 group-hover:text-white transition-colors ease-in-out duration-700">
        {/* Service Icon */}
        <>
          {title === "online marketplace" ? (
            <StorefrontIcon
              className="group-hover:text-white transition-colors ease-in-out duration-700 group-hover:animate-bounce"
              fontSize="large"
            />
          ) : title === "secure payments" ? (
            <PaymentsIcon
              className="group-hover:text-white transition-colors ease-in-out duration-700 group-hover:animate-bounce"
              fontSize="large"
            />
          ) : title === "business automation" ? (
            <PrecisionManufacturingIcon
              className="group-hover:text-white transition-colors ease-in-out duration-700 group-hover:animate-bounce"
              fontSize="large"
            />
          ) : null}
        </>

        <p className="font-title lg:text-4xl text-xl capitalize">{title}</p>

        <p className="font-text lg:text-lg text-xs font-extralight">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

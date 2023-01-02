import React from "react";
import heroImg from "../assets/joined bridge-unsplash.jpg";
import CustomButton from "../components/CustomButton";

const Intro = () => {
  return (
    <div className="md:px-16 m-auto px-5 w-full">
      {/* The Intro Text */}
      <div className="space-y-10 h-screen flex flex-col px-16 items-start justify-center absolute top-0 left-0 md:w-[40%] slide-in delay-700">
        <div className="space-y-2">
          <p className="lg:text-7xl font-title md:text-4xl text-3xl">
            Syndesis
          </p>
          <p className="lg:text-xl font-title">
            Connect your business and automate your processes at the click of a
            button
          </p>
        </div>

        <div className="space-y-2">
          <a href="/getting-started">
            <CustomButton title="Get STARTED for FREE" />
          </a>

          <a
            href="/about-us"
            className="underline font-text md:text-sm text-xs"
          >
            What is syndesis?
          </a>
        </div>
      </div>

      {/* Hero Img */}
      <img
        src={heroImg}
        alt="Hero Pic"
        className="absolute top-0 right-0 md:w-[60%] object-cover h-screen -z-10 appear"
      />
    </div>
  );
};

export default Intro;

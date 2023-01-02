import React from "react";
import AboutUsCard from "../components/about-us/AboutUsCard";
import CustomButton from "../components/CustomButton";

const infoAboutSyndesis = [
  {
    title: "What is Syndesis",
    description:
      "Syndesis is a digital platform that automates the business processes of any business type ranging from small scale to large scale businesses by solving any inefficient process/business activity to make offering your services easier and more efficient",
  },
  {
    title: "Our Goal",
    description:
      "Our goal is to provide a platform where sellers of services can come together and work amongst themselves to make their business processes 10X more efficient",
  },
  {
    title: "Who are we",
    description:
      "We are a team of passionate entrepreneurs and tech enthusiasts who believe in the power of technology to connect people and make selling - offerings services - easier and more convenient",
  },
];

const AboutUs = () => {
  return (
    <div className="md:px-16 mt-0 md:mt-0 m-auto px-5 w-full h-[90vh] flex flex-col justify-center items-center lg:gap-6 gap-4">
      <div className="grid lg:grid-cols-3 lg:grid-rows-none grid-rows-3 grid-cols-none w-full lg:gap-10 gap-4 md:gap-6 lg:min-h-3/4">
        {infoAboutSyndesis.map((info, index) => (
          <AboutUsCard
            key={index}
            title={info.title}
            description={info.description}
          />
        ))}
      </div>

      <div className="w-max">
        <a href="/getting-started">
          <CustomButton title="Get STARTED for FREE" />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;

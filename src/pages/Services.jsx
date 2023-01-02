import React from "react";
import CustomButton from "../components/CustomButton";
import ServiceCard from "../components/our-services/ServiceCard";

const syndesisServices = [
  {
    title: "online marketplace",
    description:
      "We rise be lifting others, that is our job, to serve you. And to do that Syndesis has built the one-stop storefront to help you display, sell and organize your business inventory.",
  },
  {
    title: "secure payments",
    description:
      "The one thing a business need on the internet is a means to accept payments online. We have gone ahead and got that sorted out so you don't have to bat an eye thinking about it.",
  },
  {
    title: "business automation",
    description:
      "In a functioning business, there’s a lot of moving parts and we at Syndesis understood that and created an effective, efficient and safe system to automate the bulk of those “moving parts” for you.",
  },
];

const Services = () => {
  return (
    <div className="md:px-16 mt-24 lg:mt-0 m-auto px-5 w-full h-[90vh] flex flex-col justify-center items-center lg:gap-6 gap-4">
      <div className="grid lg:grid-cols-3 lg:grid-rows-none grid-rows-3 grid-cols-none w-full lg:gap-10 gap-4 md:gap-6 lg:min-h-2/3">
        {syndesisServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
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

export default Services;

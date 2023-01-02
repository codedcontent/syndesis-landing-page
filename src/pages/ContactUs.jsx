import React from "react";
import heroImg from "../assets/contact-us-2-unsplash.jpg";
import CustomButton from "../components/CustomButton";
import SocialIcons from "../components/social-icons/SocialIcons";

const ContactUs = () => {
  return (
    <div className="md:px-16 m-auto px-5 w-full h-[90vh]">
      {/* The Intro Text */}
      <div className="space-y-12 h-full flex flex-col items-start justify-center top-0 left-0 md:w-[40%] w-full slide-up delay-700">
        <div className="space-y-5 md:w-5/6 w-full">
          <p className="lg:text-6xl font-title md:text-3xl text-2xl">
            Contact Us
          </p>
          <p className="lg:text-xl font-title">
            We're happy to help with any inquires you might have concerning
            Syndesis. Reach out to us on social medial or send us an email.
          </p>
        </div>

        <div className="space-y-4">
          <a href="mailto:mephorsworks@gmail.com">
            <CustomButton title="SEND us an EMAIL" />
          </a>

          <SocialIcons />
        </div>
      </div>

      {/* Hero Img */}
      <img
        src={heroImg}
        alt="Hero Pic"
        className="absolute top-0 right-0 md:w-[60%] h-screen -z-10 appear object-left object-cover hidden md:block"
      />
    </div>
  );
};

export default ContactUs;

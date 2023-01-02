import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialIcons = () => {
  return (
    <div className="w-full border-black flex justify-around items-center">
      <a
        href="https://twitter.com/Syndesis_shop?t=SpD2RXVniTia5bu-qnhNTg&s=09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon className="text-black cursor-pointer hover:scale-110" />
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="text-black cursor-pointer hover:scale-110" />
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <YouTubeIcon className="text-black cursor-pointer hover:scale-110" />
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <InstagramIcon className="text-black cursor-pointer hover:scale-110" />
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <FacebookIcon className="text-black cursor-pointer hover:scale-110" />
      </a>
    </div>
  );
};

export default SocialIcons;

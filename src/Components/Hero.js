import React from "react";
import { Images } from "../Config/Images";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <img src={Images.bg1} alt="bg" className="hero-image"></img>
    </div>
  );
};

export default Hero;

import React from "react";
import { Images } from "../Config/Images";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Indian Premiere League</h1>
          <div className="d-flex justify-content-end">
            <span>2021</span>
          </div>
        </div>
      </div>
      <img src={Images.bg1} alt="bg" className="hero-image"></img>
    </div>
  );
};

export default Hero;

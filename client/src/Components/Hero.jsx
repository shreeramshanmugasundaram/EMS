import React from "react";
import { useNavigate } from "react-router-dom";

import "./Hero.css";

import Education from "../Images/education.png";
import play from "../Images/icons/play.svg";
import bgHero from "../Images/bgHero.svg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="HeroWrapper">
      <img src={bgHero} alt="bgHero" />
      <div className="Hero center-div">
        <div className="HeroContent">
          <h2 className="ft-h1-bold">
            Transform Your Dreams, discover Your Strengths and Unleash Your
            Inner Genius
          </h2>
          <p className="ft-h3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
          </p>
          <div className="buttons-div">
            <button className="btn-1" onClick={() => navigate("/contactus")}>
              Contact Us
            </button>
            <button className="btn-2" onClick={() => navigate("/aboutus")}>
              <img src={play} alt="" /> Know More
            </button>
          </div>
          <p className="ft-h3">
            Over 2K+ students have started their classes already
          </p>
        </div>
        <div className="HeroVideo">
          <img src={Education} alt="" />
        </div>
      </div>

      <div className="HeroInfo">
        <div>
          <span>20K</span>
          <p>Downloads</p>
        </div>

        <div>
          <span>4K</span>
          <p>Students</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

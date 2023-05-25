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
            Transform Your Dreams, Discover Your Strengths and Unleash Your
            Inner Genius
          </h2>
          <p className="ft-h3">
            Get the Best Coaching for Class 5th to 12th, NEET and CUET Exams at
            Our Leading Institute in Jaipur. Join us today and experience the
            power of our comprehensive coaching solutions - where knowledge
            meets success!
          </p>
          <div className="buttons-div">
            <button className="btn-1" onClick={() => navigate("/contactus")}>
              Contact Us
            </button>
            <button
              className="btn-2"
              onClick={() => {
                window.location.assign(
                  "https://www.youtube.com/embed/GZyd5mVczdA"
                );
              }}
            >
              <img src={play} alt="" /> Know More
            </button>
          </div>
          <p>
            Over <b>2K+ students</b> have started their classes already
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

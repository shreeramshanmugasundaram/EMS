import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import star from "../images/icons/star.svg";

import "./Testimonial.css";
import { getShots } from "../action/getShots";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getShots(setData);
  }, []);
  return (
    <div>
      <div className="Testimonial center-div">
        <h2 className="title-1">Testimonials </h2>
        <div className="center-div">
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <iframe
                    src={item.link}
                    title="video1"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

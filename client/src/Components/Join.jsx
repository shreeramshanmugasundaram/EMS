import React from "react";
import "./Join.css";
import joinImg from "../Images/join.svg";
import globe from "../Images/icons/globe.svg";
const data = [
  {
    img: globe,
    title: "Multilingual Classes",
    text: "A proven track record of helping students succeed in their studies.",
  },
  {
    img: globe,
    title: "Multilingual Classes",
    text: "A proven track record of helping students succeed in their studies.",
  },
  {
    img: globe,
    title: "Multilingual Classes",
    text: "A proven track record of helping students succeed in their studies.",
  },
  {
    img: globe,
    title: "Multilingual Classes",
    text: "A proven track record of helping students succeed in their studies.",
  },
  {
    img: globe,
    title: "Multilingual Classes",
    text: "A proven track record of helping students succeed in their studies.",
  },
  {
    img: globe,
    title: "Multilingual Classes",
    text: "A proven track record of helping students succeed in their studies.",
  },
];
const Join = () => {
  return (
    <div>
      <h2 className="title-1">Why Join Us ? </h2>
      <div className="Join">
        <img src={joinImg} alt="join-center" />
        <div className="JoinCardWrapper">
          {data.map((item, index) => {
            return (
              <div className="JoinCard" key={index}>
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Join;

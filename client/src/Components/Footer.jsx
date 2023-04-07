import React from "react";
import "./Footer.css";

const data = [
  {
    title: "Program",
    list: [
      { text: "Courses", link: "" },
      { text: "EMS App", link: "" },
      { text: "EMS Library", link: "" },
      { text: "Contact us", link: "" },
    ],
  },

  {
    title: "Resource",
    list: [
      { text: "Result", link: "" },
      { text: "About us", link: "" },
    ],
  },

  {
    title: "Social",
    list: [
      { text: "Instagram", link: "" },
      { text: "Linkedin ", link: "" },
      { text: "Facebook ", link: "" },
    ],
  },
];
const Footer = () => {
  return (
    <div className="Footer">
      <footer className="center-div">
        <div></div>
        {data.map((item, index) => {
          return (
            <div>
              <h4 key={index}>{item.title}</h4>

              {item.list.map((listItem, index) => {
                return (
                  <a href={listItem.link} key={index}>
                    {listItem.text}
                  </a>
                );
              })}
            </div>
          );
        })}
      </footer>
    </div>
  );
};

export default Footer;

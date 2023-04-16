import React from "react";
import "./Footer.css";
import Instagram from "../Images/icons/instagram.svg";
import Linkedin from "../Images/icons/linkedin.svg";
import Facebook from "../Images/icons/facebook.svg";

const data = [
  {
    title: "Program",
    list: [
      { text: "Courses", link: "/courses" },
      { text: "EMS App", link: "" },
      { text: "EMS Library", link: "https://emslibrary.com" },
      { text: "Contact us", link: "/contactus" },
    ],
  },

  {
    title: "Resource",
    list: [
      { text: "Result", link: "/results" },
      { text: "About us", link: "/aboutus" },
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

        <div className="contactInfo">
          <h4>Contact information</h4>
          <p>
            <span>Address :</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
          </p>

          <p>
            <span>Phone no. :</span>+ 91 9999999999
          </p>
          <div className="social">
            <a href="https://instagram.com/">
              <img src={Instagram} alt="instagram" />
            </a>
            <a href="https://linkedin.com/">
              <img src={Linkedin} alt="instagram" />
            </a>
            <a href="https://facebook.com/">
              <img src={Facebook} alt="instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

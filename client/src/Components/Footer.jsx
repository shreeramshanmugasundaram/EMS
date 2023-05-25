import React from "react";
import "./Footer.css";
import Instagram from "../Images/icons/instagram.svg";
import Linkedin from "../Images/icons/linkedin.svg";
import Facebook from "../Images/icons/facebook.svg";

const data = [
  {
    title: "Program",
    list: [
      { text: "Courses", link: "/courses/Pre-Nurture" },
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
      <footer>
        <div></div>
        {data.map((item, index) => {
          return (
            <div key={index}>
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
            <b>Head Office/ Senior Wing</b> - 82/121 Sector 8 Pratap Nagar
            Sanaganer Jaipur 302033 <br />
            <br />
            <b>Junior Wing</b> - 81/202, Near Gopinath Hospital, Chetak Marg,
            Pratap Nagar Jaipur 302033
          </p>

          <p>
            <span>Phone no. :</span>+ 91 9783204698
          </p>
          <div className="social">
            <a href="https://instagram.com/ems_academy_india?igshid=YmMyMTA2M2Y=">
              <img src={Instagram} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/emsacademy/">
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a href="https://www.facebook.com/emsacademyjaipur?mibextid=LQQJ4d">
              <img src={Facebook} alt="facebook" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

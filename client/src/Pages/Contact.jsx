import React from "react";

import "./Contact.css";
import Footer from "../Components/Footer";
import bgHero from "../Images/bgHero.svg";
import contactimg from "../Images/contact.svg";
import location from "../Images/icons/map-marker.svg";
import phone from "../Images/icons/phone.svg";
import email from "../Images/icons/email.svg";
const Contact = () => {
  return (
    <div className="Contact">
      <img src={bgHero} alt="bgHero" />
      <div className="ContactCard center-div">
        <div>
          <h3>Contact Us</h3>
          <p>We are here for you! How can we help?</p>
          <form action="http://localhost:5000/contact">
            <input type="text" name="name" placeholder="Enter your Name" />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email Address"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Type your message here.."
            ></textarea>
            <button
              type="submit"
              className="btn-1"
              style={{ marginTop: "1rem" }}
            >
              Submit
            </button>
          </form>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={contactimg} alt="contactus" />
          <div className="ContactDetails">
            <img src={location} alt="location_icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
            </p>
          </div>
          <div className="ContactDetails">
            <img src={phone} alt="phone_icon" />
            <p>+91 9970116791</p>
          </div>

          <div className="ContactDetails">
            <img src={email} alt="email_icon" />
            <p>xyz@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

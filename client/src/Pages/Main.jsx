import React from "react";
import Admission from "../Components/Admission";
import Hero from "../Components/Hero";
import Result from "../Components/Result";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import Join from "../Components/Join";
import Popup from "../Components/Popup";
import { useState, useEffect } from "react";
const Main = () => {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => setPopup(true), 5000);
  }, []);
  return (
    <>
      <Hero />
      <hr
        className="center-div"
        style={{ marginTop: "5rem", background: "rgba(0, 0, 0, 0.2)" }}
      />
      <Admission />
      <hr
        className="center-div"
        style={{ marginTop: "5rem", background: "rgba(0, 0, 0, 0.2)" }}
      />
      <Join />
      <hr
        className="center-div"
        style={{ marginTop: "5rem", background: "rgba(0, 0, 0, 0.2)" }}
      />
      <Result />

      <hr
        className="center-div"
        style={{ marginTop: "5rem", background: "rgba(0, 0, 0, 0.2)" }}
      />

      <Testimonial />

      <Footer />
      {popup && <Popup setPopup={setPopup} />}
    </>
  );
};

export default Main;

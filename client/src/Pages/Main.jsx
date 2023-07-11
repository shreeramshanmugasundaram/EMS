import React from "react";
import Admission from "../Components/Admission";
import Hero from "../Components/Hero";
import Result from "../Components/Result";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import Join from "../Components/Join";
const Main = () => {
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
    </>
  );
};

export default Main;

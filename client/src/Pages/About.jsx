import React from "react";
import { Helmet } from "react-helmet";

import "./About.css";
import "../Components/Hero.css";
import Footer from "../Components/Footer";

const mentors = [
  {
    img: "/images/mentor2.webp",
    name: "Dr. Abhilasha Tharwan",
    des: "M.A. M.Phil, Phd-Geography",
  },
  {
    img: "/images/mentor1.webp",
    name: "Ankur Tharwan",
    des: "BBA, MBA, LLB",
  },
];
const About = () => {
  return (
    <div>
      <Helmet>
        <title>About us | EMS Academy</title>
        <meta
          name="description"
          content=" EMS Academy is a well-known coaching institute that provides quality education in Science, Commerce, CUET and 10th and 12th boards. Visit us today to know more."
        />
        <meta
          name="keywords"
          content="Coaching Institute, Pratap Nagar, Jaipur, Exam Prep, 6th to 12th grade, Commerce, Science, CUET Preparation, NEET preparation. Boards preparation."
        />
        <meta name="canonical" content="/about" />
      </Helmet>
      <div className="Intro">
        <div className="center-div">
          <h2 style={{ width: "75%" }}>
            Get access to notes, recorded lectures, Q&A box and many other
            resources. Download the app now.
          </h2>
          <button
            className="btn-1"
            onClick={() =>
              window.location.assign(
                "https://play.google.com/store/apps/details?id=co.classplus.ems"
              )
            }
          >
            Download Andriod App
          </button>

          <button
            className="btn-1"
            onClick={() =>
              window.location.assign(
                "https://apps.apple.com/in/app/myinstitute/id1472483563"
              )
            }
          >
            Download IOS App
          </button>

          <button
            className="btn-1"
            onClick={() =>
              window.location.assign("https://web.classplusapp.com/login")
            }
          >
            Desktop Portal
          </button>
        </div>
      </div>

      <div className="AboutWrapper">
        <div className="About center-div">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <h2 className="title-1">About Us</h2>
          <p>
            EMS Academy was incorporated to impart quality education to student
            preparing for various competitive examinations, with the sky-high
            ideals and commitment to excellence. EMS Academy is unique for the
            quality of education that it imparts to students and its dedication
            towards their success. Today, EMS Academy stands apart and well
            above the rest on a distinguished platform, as an epitome of
            success. This could be achived simply by virtue of the excellent
            teachingmethodology that EMS Academy has eveolved, developed and
            implemented over the years.
          </p>
          <p>
            IF you're aspiring for distinguished results in CBSE Board,
            Engineering, Medical, Commerce, CA/CS/CMA Foundation, CLAT, you
            can't do better then by joining EMS Academy, pioneering institution
            in education. Regardless of your background, the EMS Academy
            provides a strong platform in IIT-JEE/Medical/Commerce/Olympiads
            preparation. Our focus is on developing in each student a strong
            academic foundational, critical problems solving ability. Great
            emphasis is laid on the concepts and fundamentals with a smooth and
            systematic transition to the advanced levels of teaching. The
            interaction between students and teachers is always encouraged so as
            to provide a very healthy environment for growth and learning.
          </p>
          <p>
            The functationality of EMS is based on right education to aspiring
            students by giving them conceptual and analytical knowledge to shape
            them for competitive exams.
          </p>
        </div>
      </div>

      <div className="youtube center-div">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GZyd5mVczdA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="Mentors">
        <h2 className="title-1">Mentors</h2>
        <div className="center-div">
          {mentors.map((mentor, index) => {
            return (
              <div key={index}>
                <img src={mentor.img} alt={mentor.name} />
                <h3>{mentor.name}</h3>
                <h3>( Co-Founder & Director)</h3>
                <p>{mentor.des}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

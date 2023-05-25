import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Courses.css";
import bgHero from "../Images/bgHero.svg";
import courseimg from "../Images/courses/01.svg";
import whyjoinus from "../Images/whyjoinus.svg";
import Footer from "../Components/Footer";
const data = [
  {
    text: "Pre-Nurture",
    link: "/courses/Pre-Nurture",
  },
  {
    text: "Nurture",
    link: "/courses/Nurture",
  },
  {
    text: "Science leaders",
    link: "/courses/science",
  },
  {
    text: "Commerce leaders",
    link: "/courses/commerce",
  },
  {
    text: "NEET XI & XII",
    link: "/courses/neet",
  },
  {
    text: "CUET",
    link: "/courses/cuet",
  },
];
const Courses = ({ course }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{course.Mtitle}</title>
        <link rel="canonical" href={course.Mcar} />
        <link rel="keyword" href={course.Mkeyword} />
        <link rel="description" href={course.Mdes} />
      </Helmet>
      <img src={bgHero} alt="bgHero" />
      <div className="center-div">
        <h2 className="title-1" style={{ textAlign: "left" }}>
          Courses
        </h2>
        <div className="coursesList">
          {data.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  navigate(item.link);
                }}
              >
                {item.text}
              </button>
            );
          })}
        </div>

        <div className="coursesDetail">
          <div>
            <h2>{course?.title}</h2>
            <h3>{course?.des}</h3>
            <p>{course?.content}</p>
            <button
              className="btn-1 desktopbtn"
              style={{ marginTop: "2rem" }}
              onClick={() => {
                navigate("/contactus");
              }}
            >
              Contact Us
            </button>
          </div>
          <div className="courseCard">
            <img src={courseimg} alt=""></img>
            <hr style={{ margin: "1.5rem 0" }} />
            <ul>
              {course.test ? (
                <>
                  <li>
                    <span>Test -</span>
                    {course.test}
                  </li>
                </>
              ) : (
                <></>
              )}

              <li>
                <span>Class - </span>
                {course.class}
              </li>
              <li>
                <span>Eligibility -</span> {course.eligiblity}
              </li>
              <li>
                <span>Medium of Study -</span>
                {course.medium}
              </li>
              <li>
                <span>Subject Offered - </span>
                {course.subject}
              </li>
              <li>
                <span>Assessment Criteria -</span>
                <ul>
                  <li>Periodic Test (PT) - On Alternate Sundays.</li>
                  <li>
                    Major Test (MT) - For Half-Yearly & Pre-Board/Pre – Final
                    Exam Preparation.
                  </li>
                  <li>Surprise Test (ST) - After completion of the topic.</li>
                </ul>
              </li>
            </ul>
            <hr style={{ margin: "1.5rem 0" }} />

            <div className="courseNote">
              <p>
                <span>Admission Process-</span> Direct admission on the basis of
                percentage of Marks and Grade.
              </p>
              <p>
                <span>Scholarship Offered - </span> The student can obtain
                scholarship in tuition fees up to 90%.
              </p>
            </div>
          </div>
          <button
            className="btn-1 mobbtn"
            style={{ marginTop: "2rem" }}
            onClick={() => {
              navigate("/contactus");
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="center-div" style={{ marginTop: "5rem" }}>
        <h2 className="title-1">Why to Join?</h2>

        <div className="whyjoinus">
          <ol>
            {course?.why.map((data, index) => {
              return <li key={index}>{data}</li>;
            })}
          </ol>
          <img src={whyjoinus} alt="whyjoinus"></img>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;

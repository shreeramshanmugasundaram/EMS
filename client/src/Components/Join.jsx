import React from "react";
import "./Join.css";
import joinImg from "../Images/join.svg";
import globe from "../Images/icons/globe.svg";
import person from "../Images/icons/person.svg";
import notes from "../Images/icons/notes.svg";
import clock from "../Images/icons/clock.svg";
import money from "../Images/icons/money.svg";
import student from "../Images/icons/student.svg";

const data = [
  {
    img: globe,
    title: "Multilingual Classes",
    text: "They have a proven track record of assisting students in their academic success.",
  },
  {
    img: notes,
    title: "Syllabus Coverage",
    text: "Comprehensive syallbus coverage ensures a child's readiness for the next level",
  },
  {
    img: clock,
    title: "Flexible Scheduling",
    text: "Students can attend classes at a time that is convenient for them.",
  },
  {
    img: person,
    title: "Qualified Instructors",
    text: "A proven track record of helping students succeed in their studies.",
  },
  {
    img: money,
    title: "Affordable Tuition",
    text: "We offer affordable tuition rates without compromising on the quality of education.",
  },
  {
    img: student,
    title: "Positive outcomes",
    text: "many of our students have gone on to achieve academic success.",
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

import React from "react";
import "./Admission.css";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Pre-Nurture",
    std: "5-7th",
    boards: "CBSE, ICSE, Raj Board",
    link: "/courses/Pre-Nurture",
  },
  {
    title: "Nurture",
    std: "8-10th",
    boards: "CBSE, ICSE, Raj Board",
    link: "/courses/Nurture",
  },
  {
    title: "Smart Mind",
    std: "Science",
    boards: "CBSE, ICSE, Raj Board",
    link: "/courses/Science",
  },
  {
    title: "Pre-Nurture",
    std: "Commerce",
    boards: "CBSE, ICSE, Raj Board",
    link: "/courses/commerce",
  },
  {
    title: "Pre-Nurture",
    std: "NEET XI & XII",
    boards: "CBSE, ICSE, Raj Board",
    link: "/courses/commerce",
  },
  {
    title: "Pre-Nurture",
    std: "CUET",
    boards: "CBSE, ICSE, Raj Board",
    link: "/courses/commerce",
  },
];

const Admission = () => {
  const navigate = useNavigate();
  return (
    <div className="Admission">
      <h2 className="title-1">Admission Open</h2>
      <div className="AdmissionGrid">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                navigate(data.link);
              }}
            >
              <h3>{data.std}</h3>
              <span>{data.boards}</span>
              <p>{data.title}</p>
            </div>
          );
        })}
      </div>

      <div
        style={{
          margin: "2.5rem",
          textAlign: "center",
        }}
      >
        <button
          className="btn-1"
          style={{ padding: " 1rem 4rem" }}
          onClick={() => navigate("/contactus")}
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Admission;

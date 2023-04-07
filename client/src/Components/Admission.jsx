import React from "react";
import "./Admission.css";

const data = [
  { title: "Pre-Nurture", std: "5-7th", boards: "CBSE, ICSE, Raj Board" },
  { title: "Pre-Nurture", std: "Commerce", boards: "CBSE, ICSE, Raj Board" },
  { title: "Pre-Nurture", std: "5-7th", boards: "CBSE, ICSE, Raj Board" },
  { title: "Pre-Nurture", std: "5-7th", boards: "CBSE, ICSE, Raj Board" },
  { title: "Pre-Nurture", std: "5-7th", boards: "CBSE, ICSE, Raj Board" },
  { title: "Pre-Nurture", std: "5-7th", boards: "CBSE, ICSE, Raj Board" },
];

const Admission = () => {
  return (
    <div className="Admission center-div">
      <h2 className="title-1">Admission Open</h2>
      <div className="AdmissionGrid">
        {data.map((data, index) => {
          return (
            <div key={index}>
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
        <button className="btn-1" style={{ padding: " 1rem 4rem" }}>
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Admission;

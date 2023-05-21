import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import "./Result.css";
import Footer from "../Components/Footer";
import { getResultStundents } from "../action/getResultStundents";
import Loader from "../Components/Loader";
import { getResultYears } from "../action/getResultYears";

const Result = () => {
  const [years, setYears] = useState([]);
  const [lookingResult, setLookingResult] = useState("2023");
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    getResultYears(setYears);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getResultStundents({ year: lookingResult }, setStudentList);
  }, [lookingResult]);

  return (
    <div>
      <h2 className="title-1">Result</h2>

      <div className="btnList center-div">
        {years.map((year, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setLookingResult(year);
              }}
            >
              {year}
            </button>
          );
        })}
      </div>
      {studentList.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "4rem",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div className="StudentResults center-div">
          {studentList.map((student, index) => {
            const bufferImage = student?.imageBuffer.data;
            const base64Image = Buffer.from(bufferImage).toString("base64");
            const src = `data:image/jpeg;base64,${base64Image}`;
            return (
              <div key={index}>
                <img src={src} alt={student.fname} />
                <p>{student.fname}</p>
                <span>{student.marks} %</span>
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Result;

import React, { useEffect, useState } from "react";
import "./Result.css";
import Footer from "../Components/Footer";
import { getStundents } from "../api";
import Loader from "../Components/Loader";

const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

const Result = () => {
  const [lookingResult, setLookingResult] = useState(2023);
  const [studentList, setStudentList] = useState([]);

  const handleRequest = async () => {
    try {
      const result = await getStundents({ year: lookingResult });
      setStudentList(result.data.list);
    } catch (err) {}
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    handleRequest();
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
            return (
              <div key={index}>
                <img src={student.img} alt={student.name} />
                <p>{student.name}</p>
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

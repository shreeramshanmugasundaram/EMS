import React, { useEffect, useState } from "react";

import { Buffer } from "buffer";
import "./Result.css";
import { useNavigate } from "react-router-dom";
import { getMainPageStudents } from "../action/getMainPageStudents";

const Result = () => {
  const navigate = useNavigate();
  const [StudentData, setData] = useState([]);

  useEffect(() => {
    getMainPageStudents(setData);
  }, []);

  return (
    <div className="Result center-div">
      <h2 className="title-1">Our Result </h2>
      <div className="ResultGrid">
        {StudentData.map((data, index) => {
          const bufferImage = data?.imageBuffer.data;
          const base64Image = Buffer.from(bufferImage).toString("base64");
          const src = `data:image/jpeg;base64,${base64Image}`;
          return (
            <div key={index}>
              <img src={src} alt="" />
              <div>
                <p>{data?.fname}</p>
                <span>{data?.marks} %</span>
              </div>
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
          onClick={() => navigate("/results")}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Result;

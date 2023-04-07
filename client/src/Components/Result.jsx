import React from "react";
import "./Result.css";
import { useNavigate } from "react-router-dom";

const data = [
  {
    img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Shreeram",
    marks: "98%",
  },
  {
    img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Shreeram",
    marks: "98%",
  },
  {
    img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Shreeram",
    marks: "98%",
  },
  {
    img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Shreeram",
    marks: "98%",
  },
  {
    img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Shreeram",
    marks: "98%",
  },
  {
    img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Shreeram",
    marks: "98%",
  },
  {
    img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Shreeram",
    marks: "98%",
  },
  {
    img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Shreeram",
    marks: "98%",
  },
  {
    img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Shreeram",
    marks: "98%",
  },
  {
    img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Shreeram",
    marks: "98%",
  },
  {
    img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Shreeram",
    marks: "98%",
  },
  {
    img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Shreeram",
    marks: "98%",
  },
];

const Result = () => {
  const navigate = useNavigate();
  return (
    <div className="Result center-div">
      <h2 className="title-1">Our Result </h2>
      <div className="ResultGrid">
        {data.map((data, index) => {
          return (
            <div key={index}>
              <img src={data.img} alt="" />
              <div>
                <p>{data.name}</p>
                <span>{data.marks}</span>
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

import { Route, Routes } from "react-router-dom";

import "./App.css";
import Main from "./Pages/Main";
import Nav from "./Components/Nav";
import Result from "./Pages/Result";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";

import { preNurture, nurture, science, commerce } from "./data/pre-nurture";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="*" element={<Main />}></Route>
        <Route path="/results" element={<Result />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        <Route
          path="/courses/Pre-Nurture"
          element={<Courses course={preNurture} />}
        ></Route>
        <Route
          path="/courses/Nuture"
          element={<Courses course={nurture} />}
        ></Route>
        <Route
          path="/courses/Science"
          element={<Courses course={science} />}
        ></Route>
        <Route
          path="/courses/Commerce"
          element={<Courses course={commerce} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

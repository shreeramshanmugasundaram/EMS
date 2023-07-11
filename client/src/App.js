import { Route, Routes } from "react-router-dom";

import "./App.css";
import Main from "./Pages/Main";
import Nav from "./Components/Nav";
import Result from "./Pages/Result";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import AboutApp from "./Pages/AboutApp"
import {
  preNurture,
  nurture,
  science,
  commerce,
  neet,
  cuet,
} from "./data/pre-nurture";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="*" element={<Main />}></Route>
        <Route path="/results" element={<Result />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/aboutapp" element={<AboutApp />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        <Route
          path="/courses/Pre-Nurture"
          element={<Courses course={preNurture} />}
        ></Route>
        <Route
          path="/courses/Nurture"
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
        <Route path="/courses/neet" element={<Courses course={neet} />}></Route>
        <Route path="/courses/cuet" element={<Courses course={cuet} />}></Route>
      </Routes>
    </>
  );
}

export default App;

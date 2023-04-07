import { Route, Routes } from "react-router-dom";

import "./App.css";
import Main from "./Pages/Main";
import Nav from "./Components/Nav";
import Result from "./Pages/Result";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="*" element={<Main />}></Route>
        <Route path="/results" element={<Result />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;

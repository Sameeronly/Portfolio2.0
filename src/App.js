import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Skills from "./routes/Skills";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Achivements from "./routes/Ach";
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/Achivements" element={<Achivements/>}/>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;
 
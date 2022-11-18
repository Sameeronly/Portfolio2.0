import "./Hero.css";

import React from 'react';
import myimg from "../images/myimg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="myimg" src={myimg} alt="myimg"/>
        </div>
        <div className="content">
            <p>RESPONSIVE design, React-HTML-CSS-JavaScript.</p>
            <h1>Full Stack Developer.</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg
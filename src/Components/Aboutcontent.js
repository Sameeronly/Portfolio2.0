import "./About.css";

import React from 'react';
import { Link } from "react-router-dom";
import html from "../images/html.png";
import css from "../images/css.png";

const Aboutcontent = () => {
  return <div className="about">
    <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a react front end developer. I Create a responsive secure for my clients.</p> 
        <Link to="/contact"><button className="btn">Resume</button>
        </Link>
    </div>

    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={html} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={css} className="img" alt="true"/>
            </div>
        </div>
    </div>
  </div>
    
}
export default Aboutcontent;
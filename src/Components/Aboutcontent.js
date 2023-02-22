import "./About.css";

import React from "react";

import html from "../Components/images/html.png";
import css from "../Components/images/css.png";

const Aboutcontent = () => {
  const handleClick = () => {
    window.open("https://drive.google.com/file/d/1ESV4cEUbR24BzdRV_cRiT65IYoD3SXuS/view?usp=share_link");
  };
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a react front end developer. I Create a responsive secure for my
          clients.
        </p>
        
      <button className="btn" onClick={handleClick}>Resume</button>
    </div>
      

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={html} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
           <img src={css} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutcontent;

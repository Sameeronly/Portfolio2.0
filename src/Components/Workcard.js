import "./Work.css";
import "./WorkData.js";
import React from "react";

const Workcard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view}>
            <button className="btn">View</button>
          </a>
          {/* <a href={props.source}>
            <button className="btn">source</button>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Workcard;

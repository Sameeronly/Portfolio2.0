import "./Work.css";
import Workcard from "./Workcard.js"
import Workdata from './WorkData.js';

import React from 'react';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Activities</h1>
      <div className="project-container">
        {Workdata.map((val,ind) => {
          return(
            <Workcard
             key={ind}
             imgsrc={val.imgsrc}
             title={val.title}
             text={val.text}
             view={val.view}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Work;
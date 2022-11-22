import "../Components/SKills.css";
import reactimg from "../images/react.webp";
import js from "../images/js.jpg";
import csss from "../images/css.jpg";
import htmll from "../images/html2.jpg";
import python from "../images/python.png";
import clang from "../images/th.jpg";

import React from 'react';

const Skillsdata = () => {
  return (
    <div className="container">
        <div className="skill-box">
            <div className="skill-title">
                <div className="img">
                    <img src={reactimg} className="skill-icon" alt=""/>
                </div>
                <h3>React</h3>
            </div>
            {/* <p>At a high level, React developers should be able to Work with semantic HTML tags, CSS selectors, Implement a CSS reset, Understand the box model and implement responsive web principles including the proper user of media queries.</p> */}
        </div>
        <div className="skill-box">
            <div className="skill-title">
                <div className="img">
                    <img src={js} className="skill-icon" alt=""/>
                </div>
                <h3>JavaScript</h3>
            </div>
            {/* <p>You can’t rock React without a firm understanding of the fundamental concepts that the JavaScript language provides, but these ES6 skills are also essential.</p> */}
        </div>
        <div className="skill-box">
            <div className="skill-title">
                <div className="img">
                    <img src={csss} className="skill-icon" alt=""/>
                </div>
                <h3>CSS</h3>
            </div>
            {/* <p>Sheet language : Although they are considered to be two different core programming languages, HTML and CSS are most often used together.CSS (Cascading Style Sheets) is responsible for the design.</p> */}
        </div>
        <div className="skill-box">
            <div className="skill-title">
                <div className="img">
                    <img src={htmll} className="skill-icon" alt=""/>
                </div>
                <h3>HTML5</h3>
            </div>
            {/* <p>Mark up language : Although they are considered to be two different core programming languages, HTML and CSS are most often used together.In short, HTML (Hyper Text Markup Language) dictates the content and structure of a webpage.</p> */}
        </div>
        <div className="skill-box">
            <div className="skill-title">
                <div className="img">
                    <img src={python} className="skill-icon" alt=""/>
                </div>
                <h3>Python</h3>
            </div>
            {/* <p>Scripting language :It is a great introduction to both fundamental programming concepts and the Python programming language. Python 3 is the most up-to-date version of the language with many improvements made to increase the efficiency and simplicity of the Python code that you write.</p> */}
        </div>
        <div className="skill-box">
            <div className="skill-title">
                <div className="img">
                    <img src={clang} className="skill-icon" alt=""/>
                </div>
                <h3>C-Language</h3>
            </div>
            {/* <p>Programming Language which includes Variables, data types, and operators in C as File handling and command line arguments,Arrays and character array in C,Pointers and linked lists,String handling functions,Stacks and queues data structure in C language.</p> */}
        </div>

    </div>
  )
}

export default Skillsdata
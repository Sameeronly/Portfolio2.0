import React from 'react';

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Aboutcontent from '../Components/Aboutcontent';


const About = () => {
  return (
    <div>
      <Nav/>
      <Heroimg2 heading="ABOUT ME." text="I'm a engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application. I may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development..Also as a React developer, I work in a comprehensive JavaScript library known as React. My responsibilities are to design, develop, and implement this front-end technology for businesses. Some of my software includes user-facing features that consist of reusable components for future use."/>
      <Aboutcontent />
      <Footer/>
    </div>
  )
}

export default About;
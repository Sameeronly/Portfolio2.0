import React from 'react';

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Heroimg2  from '../Components/Heroimg2';
import Work from '../Components/Work';

const Project = () => {
  return (
    <div>
      <Nav/>
      <Heroimg2 heading="PROJECTS." text="Here are some of my most recent works."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project;
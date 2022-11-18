import React from 'react';

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Skillsdata from '../Components/Skillsdata';


const Skills = () => {
  return (
    <div>
      <Nav/>
      <Heroimg2 heading="My Skills." text= "Here are some of my proficiencies.">
      </Heroimg2>
      <Skillsdata/>
      <Footer/>
    </div>
  )
}

export default Skills
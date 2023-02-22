import React from 'react';

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Skill from '../Components/Skill';


const Skills = () => {
  return (
    <div>
      <Nav/>
      <Heroimg2 heading="My Skills." text= "Here are some of my proficiencies.">
      </Heroimg2>

      <Skill/>
      <Footer/>
    </div>
  )
}

export default Skills;
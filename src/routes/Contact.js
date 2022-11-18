import React from 'react'

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div>
      <Nav/>
      <Heroimg2 heading="Connect With Me."
      text= "If you want to know more about me or my work, send a message.i'd love to hear from you."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
import React from 'react';
import Nav from "/src/components/global/Nav.jsx";
import Footer from "/src/components/global/Footer.jsx";
import Csection from '/src/components/Configure/Csection.jsx';
import '/src/stylesheets/Configure/Csection.css';

const Configure = () => {
  return (
    <>
      <Nav/>
      <Csection/>
      <Footer/>
    </>
  )
}

export default Configure
import React from 'react'
import Nav from "/src/components/global/Nav.jsx";
import Footer from "/src/components/global/Footer.jsx";
import Section1 from "/src/components/home/section1.jsx";
import Section2 from "/src/components/home/Section2.jsx";
import Section3 from '/src/components/home/section3.jsx';
import Section4 from "/src/components/home/Section4.jsx";
import Section5 from "/src/components/home/Section5.jsx";


const Home = () => {
  return (
    <>
      <Nav />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  )
}

export default Home
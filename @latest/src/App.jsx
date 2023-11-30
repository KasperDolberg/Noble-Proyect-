
import React from "react";
import Nav from "/src/components/global/Nav.jsx";
import Footer from "/src/components/global/Footer.jsx";
import Section1 from "/src/components/home/Section1";
import Section2 from "./components/home/section2";
import Section5 from "/src/components/home/Section5";


function App() {
  return (
    <>
      <Nav />
      <Section1 />
      <Section2 />
      <Section5 />
      <Footer />
    </>
  );
}

export default App;

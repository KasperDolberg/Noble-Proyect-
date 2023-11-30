
import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "/src/pages/Home";
import Configure from "/src/pages/Configure";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Finance from "./pages/finance";



function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/configure" element={<Configure />} />   
       <Route path="/gallery" element={<Gallery />} />  
       <Route path="/contact" element={<Contact />} />    
       <Route path="/about" element={<About />} />   
       <Route path="/finance" element={<Finance />} />  

    </Routes>
    </>
  );
}

export default App;


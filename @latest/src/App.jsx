
import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "/src/pages/Home";
import Gallery from "./pages/Gallery";
import AvailableCars from "./pages/AvailableCars";
import About from "./pages/About";
import Finance from "./pages/Finance";
import News from "./pages/News";
import E300 from "/src/components/Configure/E300";
import Etarget from "/src/components/Configure/Etarget";
import M200 from "/src/components/Configure/M200";



function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home />} />  
       <Route path="/gallery" element={<Gallery />} />  
       <Route path="/available-cars" element={<AvailableCars />} />    
       <Route path="/about" element={<About />} />   
       <Route path="/finance" element={<Finance />} />  
       <Route path="/news" element={<News />} />  
       <Route path="/E300" element={<E300 />} /> 
       <Route path="/M200" element={<M200/>} />   
       <Route path="/Etarget" element={<Etarget />} />  
    </Routes>
    </>
  );
}

export default App;


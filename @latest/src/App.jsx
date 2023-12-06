
import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "/src/pages/Home";
import Configure from "/src/pages/Configure";
import Gallery from "./pages/Gallery";
import AvailableCars from "./pages/AvailableCars";
import About from "./pages/About";
import Finance from "./pages/finance";
import News from "./pages/News";



function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/configure" element={<Configure />} />   
       <Route path="/gallery" element={<Gallery />} />  
       <Route path="/available-cars" element={<AvailableCars />} />    
       <Route path="/about" element={<About />} />   
       <Route path="/finance" element={<Finance />} />  
       <Route path="/news" element={<News />} />  
    </Routes>
    </>
  );
}

export default App;


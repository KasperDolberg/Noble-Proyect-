import React from 'react'
import Footer from "/src/components/global/Footer.jsx";
import Nav from "/src/components/global/Nav.jsx";
import Nsection1 from '/src/components/news/Nsection1'
import Nsection2 from '/src/components/news/Nsection2'



const News = () => {
  return (
    <>
    <Nav />
    <Nsection1 />
    <Nsection2 />
    <Footer />
    </>
  )
}

export default News
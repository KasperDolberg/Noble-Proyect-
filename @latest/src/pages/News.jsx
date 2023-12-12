import React from 'react'
import Navbar from '../components/global/Navbar';
import Footer from "/src/components/global/Footer.jsx";
import Nsection1 from '/src/components/news/Nsection1'
import Nsection2 from '/src/components/news/Nsection2'



const News = () => {
  return (
    <>
    <Navbar />
    <Nsection1 />
    <Nsection2 />
    <Footer />
    </>
  )
}

export default News
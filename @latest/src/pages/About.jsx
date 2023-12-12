
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import '/src/stylesheets/AboutUs/About.css';
import Footer from "/src/components/global/Footer.jsx";
import simplyVideo from '/src/img/AboutUs/VIDEO.mp4'


const About = () => {

    const slides = [
      {
        url: 'src/img/AboutUs/S-1.webp',
      },
      {
        url: 'src/img/AboutUs/bg-1.jpg',
      },
      {
        url: 'src/img/AboutUs/S-3.webp',
      },
      {
        url: 'src/img/AboutUs/S-8.webp',
      },
  
      {
        url: 'src/img/AboutUs/S7.webp',
      },
      {
        url: 'src/img/AboutUs/S-6.webp',
      },
      {
        url: 'src/img/AboutUs/S-4.webp',
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

  return (

 <div className='SETTINGS-CONTAINER'>
    <div className='Section-1'>
      <div className='container-85'>
        {/* -------------------header------------ */}
        <div className='header-'>
          <div className='about-noble-'>
            <h1 className='Tittle-'>About Noble</h1>
          </div>
          <div className='philosophy-'>
            <h2 className='text-phi'> 
            Noble Automotive design and manufacture cars not in competition to the current super car establishment.
             <span className='space---'>We offer driving purity and involvement to those serious about their driving. </span>
            </h2>
          </div>
        </div>
        {/* -------------------maiN-------------- */}
        <div className='main'>
                 <video src={simplyVideo } autoPlay loop muted class='my-Video-my'/>     
        </div>
      </div>
    </div>


    {/* --------------------------------------------SECTION-2---------------------------------------------------- */}
    <div className='Section-2'>
        <div className='container-85-section-2'>
          {/* -----------------tittle-----text------------ */}
            <div className='Text-here-'>
                  <div className='Tittle-S2'>
                      <h1 className='Experience'> Is all<span className='space-bt--'>About</span><span className='space-bt--'>Experience</span> </h1>
                  </div>
                  <div className='Text-S2'>
                      <div className='History-'> <p className='History-tittle-'>Our History</p> </div>
                      <div className='little-text-father-'> 
                        <div className='little-text-child-1-'> <p className='History-text-'>In 1999, Lee Noble founded Noble Automotive, a leading British company specializing in high-performance sports cars. </p> </div>
                        <div className='little-text-child-2-'> <p className='History-text-'> Renowned for engineering excellence and a focus on delivering an exceptional driving experience. </p>  </div>
                      </div>
                  </div>
            </div>
            {/* -----------IMG-SECTION2------------------- */}
            <div className='THEY-KNOW-ME-SON  w-[100%] h-[90vh] w-full m-auto py-10  relative group'><div
           
           style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                 className='w-full h-full  bg-center bg-cover duration-500'
          ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
            </div>
        </div>
    <Footer />
</div>

  )
}

export default About
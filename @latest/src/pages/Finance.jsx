
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Header from '/src/components/global/Header';
import '/src/stylesheets/Finance/finance.css';
import Footer from "/src/components/global/Footer.jsx";
const Finance = () => {
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
    <div>
      <Header title={'Finance'}/>
      <div className='Finance-container'>
        <div className='Column-setting'>
            <div className='column-slider'>
            <div className='w-[100%] h-[90vh] w-full m-auto py-10  relative group'><div
           
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

            <div className='column-content'>

            </div>
        </div>
      </div>
   

      <Footer/>
    </div>
  )
}

export default Finance
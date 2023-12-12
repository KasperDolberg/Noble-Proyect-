import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Slider = () => {

    const slides = [
        {
          url: 'src/img/configure/E-300/BLOSSOM-GREY/MULTI-SPOKE-WHEEL/1.jpeg',
        },
        {
          url: 'src/img/configure/E-300/BLOSSOM-GREY/MULTI-SPOKE-WHEEL/2.jpeg',
        },
        {
          url: 'src/img/configure/E-300/BLOSSOM-GREY/MULTI-SPOKE-WHEEL/3.jpeg',
        },
        {
          url: 'src/img/configure/E-300/BLOSSOM-GREY/MULTI-SPOKE-WHEEL/7.jpeg',
        },
    
        {
          url: 'src/img/configure/E-300/BLOSSOM-GREY/MULTI-SPOKE-WHEEL/5.jpeg',
        },
        {
          url: 'src/img/configure/E-300/BLOSSOM-GREY/MULTI-SPOKE-WHEEL/6.jpeg',
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
    <div className='THEY-KNOW-ME-SON  w-[100%] h-[100%] w-full m-auto py-10  relative group'>
        
             <div
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

  )
}

export default Slider
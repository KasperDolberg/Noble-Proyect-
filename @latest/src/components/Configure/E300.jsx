import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Footer from "/src/components/global/Footer.jsx";
import '/src/stylesheets/Configure/Csection.css';
import Header from '/src/components/global/Header.jsx';
import Navbar from '../global/Navbar';

const E300 = () => {

  const carImages = {
    blossomGrey: [
      'src/img/configure/E-300/BLOSSOM-GREY/MULTI-SPOKE-WHEEL/1.jpeg',
      'src/img/configure/E-300/BLOSSOM-GREY/MULTI-SPOKE-WHEEL/2.jpeg',
      'src/img/configure/E-300/BLOSSOM-GREY/MULTI-SPOKE-WHEEL/3.jpeg',
      'src/img/configure/E-300/BLOSSOM-GREY/MULTI-SPOKE-WHEEL/10.jpeg',
      'src/img/configure/E-300/BLOSSOM-GREY/BLACK-INTERIOR/4.jpeg',
      'src/img/configure/E-300/BLOSSOM-GREY/BLACK-INTERIOR/6.jpeg',
    ],
    kaimuGrey: [
      'src/img/configure/E-300/KAIMU-GREY/MULTI-SPOKE-WHEEL/1.jpeg',
      'src/img/configure/E-300/KAIMU-GREY/MULTI-SPOKE-WHEEL/2.jpeg',
      'src/img/configure/E-300/KAIMU-GREY/MULTI-SPOKE-WHEEL/3.jpeg',
      'src/img/configure/E-300/KAIMU-GREY/MULTI-SPOKE-WHEEL/10.jpeg',
      'src/img/configure/E-300/KAIMU-GREY/BLACK-INTERIOR/4.jpeg',
      'src/img/configure/E-300/KAIMU-GREY/BLACK-INTERIOR/6.jpeg',
    ],
    stellarBlack: [
      'src/img/configure/E-300/STELLAR-BLACK/MULTI-SPOKE-WHEEL/1.jpeg',
      'src/img/configure/E-300/STELLAR-BLACK/MULTI-SPOKE-WHEEL/2.jpeg',
      'src/img/configure/E-300/STELLAR-BLACK/MULTI-SPOKE-WHEEL/3.jpeg',
      'src/img/configure/E-300/STELLAR-BLACK/MULTI-SPOKE-WHEEL/10.jpeg',
      '/src/img/Configure/E-300/STELLAR-BLACK/BLACK-INTERIOR/4.jpeg',
      'src/img/configure/E-300/STELLAR-BLACK/BLACK-INTERIOR/6.jpeg',
    ],
    // Agrega más colores según sea necesario
  };


  const [selectedColor, setSelectedColor] = useState('blossomGrey');
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carImages[selectedColor].length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carImages[selectedColor].length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  
  const handleColorChange = (color) => {
    setSelectedColor(color);
    // Mantener el índice actual si hay imágenes disponibles para el nuevo color
    setCurrentIndex(Math.min(currentIndex, carImages[color].length - 1));
  };


  return (
    <>
      <Navbar />
      <Header title={'Configure'} number={'95%'} />
      <div className='container-section'>
        <div className='slide-Container'>
          <div className="slider__">
            <div className="sllider-for-real">
              <div className='THEY-KNOW-ME-SON w-[100%] h-[100%] w-full m-auto py-10 relative group'>
                <div
                  style={{ backgroundImage: `url(${carImages[selectedColor][currentIndex]})` }}
                  className='w-full h-full bg-center bg-cover duration-500'
                ></div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                  <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                  {carImages[selectedColor].map((_, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                      <RxDotFilled />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='config-Container'>
          <div className="config-content">

           <div className="container__title">
                    <div className="title__header">
                          <h2>E 300</h2>
                    </div>
                    <div className='price-container'>
                            <p className='title__small'>Starting at:</p>
                            <h2>$ 67.000</h2>
                    </div>
            </div>

            <div className="exterior__container">
              <h2 className='section-title'>Exterior</h2>
              <div className="color__price">
                <h3 className='text__price'>Choose the exterior color</h3>
                <p>+ $1,500</p>
              </div>
              <div className="color__container">
                <button
                  style={{ backgroundColor: '#8c8ca4' }}
                  className='BLOSSOM-GREY'
                  onClick={() => handleColorChange('blossomGrey')}
                ></button>
                <button
                  style={{ backgroundColor: 'rgb(130, 135, 136)'}}
                  className='KAIMU-GREY'
                  onClick={() => handleColorChange('kaimuGrey')}
                ></button>
                <button
                  style={{ backgroundColor: '#192025' }}
                  className='STELLAR-BLACK'
                  onClick={() => handleColorChange('stellarBlack')}
                ></button>
              </div>
            </div>
            
            <div className="line-grey"></div>
                  <div className="wheels__container">
                  <h2 className='section-title'>Interior</h2>
                  <p className='opcional-text'>(not an opcional)</p>
                  <div className='img__box'>
                      <div>
                        <img src='\src\img\Configure\E-300\BLOSSOM-GREY\BLACK-INTERIOR\BLACK INTERIOR (LOGO).jpeg' alt="wheel image" />
                        <h3 className='text__price'>Nappa leather, Black/Red</h3>
                      </div>
                  </div>
                  </div>
                  <div className="line-grey">

                  </div>

                  <div className="wheels__container">
                  <h2 className='section-title'>Wheels</h2>
                  <p className='opcional-text'>(not an opcional)</p>
                  <div className='img__box'>
                      <div>
                        <img src='\src\img\Configure\E-300\BLOSSOM-GREY\MULTI-SPOKE-WHEEL\MULTI SPOKE WHEEL (LOGO).jpeg' alt="wheel image" />
                        <h3 className='text__price'>20″ 4-Multi Spoke Black</h3>
                      </div>
                  </div>
                  </div>
                  <div className="line-grey"></div>


                  <div className="motor__container">
                  <div spacing="1rem" class="css-0">
                  <h2 className='section-title'>Motor</h2>
                  <p className='text__prices'>Choose the performance</p>

                  <button className="css-12j2ifn eglgnze2">
                  <div className="css-1w2qc6x eglgnze5">
                    <span className="eglgnze0 css-18nul6i">Long Range Dual Motor</span>
                    <span className="eglgnze4 css-cdn3gz">$67,000</span>
                  </div>
                  </button>
                  <div role="listitem" className="css-1hbibbm"></div>
                  <button className="css-186d83t eglgnze2">
                  <div className="css-1w2qc6x eglgnze5">
                    <span className="eglgnze0 css-18nul6i">Long Range Dual Motor with Performance Pack</span>
                    <span className="eglgnze4 css-cdn3gz">$75,900</span>
                  </div>
                  </button>
                  </div>

                  </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default E300
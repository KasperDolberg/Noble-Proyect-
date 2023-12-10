import React from 'react';
import Slider from '/src/components/global/Slider';
import '/src/stylesheets/Configure/Csection.css';
import Header from '/src/components/global/Header.jsx';
import Footer from "/src/components/global/Footer.jsx";

const Etarget = () => {
  return (
    <>
        <Header title={'Configure'} />
      <div className='container-section'>
          
          <div className='slide-Container'> 
              <div className="slider__">
                <div className="sllider-for-real">
                  <Slider/>
                </div>
              </div>
          </div>
          
          <div className='config-Container'>
              <div className="config-content">

                <div className="container__title">
                    <div className="title__header">
                          <h2>E Target</h2>
                    </div>
                    <div className='price-container'>
                            <p className='title__small'>Starting at:</p>
                            <h2>$ 140,000 </h2>
                    </div>

                </div>

                  <div className="exterior__container">
                      <h2 className='section-title'>Exterior</h2>
                      <div className="color__price">
                        <h3 className='text__price'>Choose the exterior color</h3>
                        <p>+ $1,500</p>
                      </div>
                      <div className="color__container">
                      <div style={{ backgroundColor: '#192025'}}></div>
                      <div style={{ backgroundColor: 'rgb(130, 135, 136)' }}></div>
                      <div style={{ backgroundColor: '#FFF222' }}></div>
                      </div>
                  </div>
                  <div className="line-grey"></div>
                  <div className="wheels__container">
                  <h2 className='section-title'>Interior</h2>
                  <p className='opcional-text'>(not an opcional)</p>
                  <div className='img__box'>
                      <div>
                        <img src='/src/img/Configure/Target_interior.jpeg' alt="wheel image" />
                        <h3 className='text__price'>Black Alcantara & leather</h3>
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
                        <img src='/src/img/Configure/Target_wheels.jpeg' alt="wheel image" />
                        <h3 className='text__price'>21″ Magnesium Satin Black</h3>
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
                    <span className="eglgnze0 css-18nul6i">Two Electric Motors Combined</span>
                    <span className="eglgnze4 css-cdn3gz">$140,000</span>
                  </div>
                  </button>
                  <div role="listitem" className="css-1hbibbm"></div>
                  <button className="css-186d83t eglgnze2">
                  <div className="css-1w2qc6x eglgnze5">
                    <span className="eglgnze0 css-18nul6i">Four Electric Motors Combined 2000 HP</span>
                    <span className="eglgnze4 css-cdn3gz">$200,000</span>
                  </div>
                  </button>
                  </div>

                  </div>



              </div>
          </div>


      </div>
<Footer/>
    </>
  )
}

export default Etarget
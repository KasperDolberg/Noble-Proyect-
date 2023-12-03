import React from 'react'
import '/src/stylesheets/news/Nsection1.css';
import '/src/stylesheets/AvailableCar/A-section.css'
import Btn from '../global/buttons/btn'; 

const Asection1 = () => {
  return (
    <div className='container-absolute2'>

          <div className="container-square2">
            



              <div className="title-models">
                    <h2>Models</h2>
                    <div className="line-grey"></div>
              </div>

            
              <div className="container-models-section">           
                    <div className="select-model-container "></div>

                    <div className="slider-container">
                      <div className="slider">Soy un slider</div>
                    </div>
              </div>



               <div className="characteristics-container">

                  <div className="characteristics">

                          <div class="css-1schyut"></div>
                          <h2 className='brand-name'>Noble M600 | 2005</h2>
                          <p className='second-name'>Long range Dual motor - AWD</p>  
                          <div class="css-1schyut"></div>
  
                              <div className='characteristics-wrap'>
                                <h3>Power</h3>
                                <p>310 kW / 421 hp</p>

                              </div>  

                              <div className='characteristics-wrap'>
                                <h3>0 - 60 mph</h3>
                                <p>4.3 sec</p>
                              </div>  

                              <div className='characteristics-wrap'>
                                <h3>Range</h3>
                                <p>276 miles</p>
                              </div>

                          <button>
                            <div>$ 60,450</div>
                            <Btn Text="Explore" to="/#"/>
                         </button>
                  </div>
                          
                </div>


          </div>

    </div>
  )
}

export default Asection1
import React from 'react'
import '/src/stylesheets/news/Nsection1.css';
import { Link } from 'react-router-dom';

const modelCard = ({imgSrc, carName, price, power, mph, speed, ConfigurateCarPath}) => {
  return (
      <div className="card-model">
               
               <div className="image-container">
                       <img src={imgSrc} />
               </div>
               
               <div className="name-car">  
                       <div className="container-titles">
                           <h2 className='title_big'>{carName}</h2> 
                           <p className='title_small'>from ${price} USD</p> 
                       </div>  
                       <Link to={ConfigurateCarPath} role="link" className="css-13c2ifd_">
                                <span className="css-1j2esho_">
                                    <span className="css-1lfoa7111" style={{fontSize: '1.2rem'}}>Configure</span>
                                    <span aria-hidden="true" data-type="icon" className="css-1lru1qp_">
                                        <div className="css-1ckl8y4">
                                            <div className="css-jyc14k" style={{ opacity: 1, transform: 'translateX(0em)', fontSize: '1.2rem'}} >
                                            <svg viewBox="0 0 16 16" fill="none" height="1em" role="img" aria-label="arrowRight" className="css-1krb9jt">
                                                <path d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z" fill="#FFAD0A"></path>
                                            </svg>
                                            </div>
                                        </div>
                                    </span>
                                </span>
                        </Link>
               </div>

               <div className="container-specifications">
                     <div className="specifications">

                         <div className="power">
                               <h2 className='title_big p'>{power} <span>HP</span></h2>
                               <p className='title_small p'>Max.power</p>
                         </div>
                         <div className="mph">
                               <h2 className='title_big p'>{mph}<span>S</span></h2>
                               <p className='title_small p'> 0 - 60 mph</p>
                         </div>
                         <div className="speed">
                               <h2 className='title_big p'>{speed}<span>mile/h</span></h2>
                               <p className='title_small p'>Top track speed</p>
                         </div>
                       
                     </div>
               </div>

      </div>
  )
}

export default modelCard
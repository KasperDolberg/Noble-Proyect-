import React from 'react'
import '/src/stylesheets/news/Nsection1.css';
import Btn from '../global/buttons/btn'; 

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
                       <div className="container-btn">
                   

                           <Btn Text={'Configure'} to={ConfigurateCarPath}/>
                       </div> 
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
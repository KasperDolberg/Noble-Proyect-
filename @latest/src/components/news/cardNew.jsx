import React from 'react'
import Btn from '../global/buttons/btn'
import '/src/stylesheets/news/Nsection2.css' 

const cardNew = ({imgSrc, date, title, shortInfo}) => {
  return (
    <>
        <div className="cardBody">
            <div className="container-card-img">
              <img src={imgSrc} className='card-image'/>
            </div>
            <div class="css-o1dubm"></div>
            <span className='date'>{date}</span>
            <div class="css-o1dubm"></div>
            <h2 className='card-title'>{title}</h2>
            <div class="css-o1dubm"></div>
            <p className="card-short-info">{shortInfo}</p>
            <div class="css-o1dubm"></div>
            <Btn Text="Read more" to="/news" />
            <div class="css-o1dubm"></div>
        </div>
    </>
  )
}

export default cardNew
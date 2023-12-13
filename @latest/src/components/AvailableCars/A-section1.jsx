import React from 'react';
import Header from '/src/components/global/Header.jsx';
import '/src/stylesheets/AvailableCar/A-section.css';
import ModelCard from './modelCard';

const Asection1 = () => {

  const cardModelData = [
    { imgSrc: '/src/img/availableCars/evija.png', carName: 'E Target', price: '140,000', power: '2000', mph: '3.0', speed: '180', ConfiguratePath: '/Etarget',},
    { imgSrc: '/src/img/availableCars/emira2.png', carName: 'M 200', price: '80,000', power: '400', mph: '4.6', speed: '180', ConfiguratePath: '/M200'},
    { imgSrc: '/src/img/availableCars/eletre.png', carName: 'E 300', price: '67,000', power: '600', mph: '4.2', speed: '150', ConfiguratePath: '/E300'},
    
    ];

  return (
    <div className='section'>
    <Header title={'Available Cars'} number={'85%'}/>
    <div className='container-total'>
          <div className="container-content">
            <div className="container-cards">
            {cardModelData.map((card, name) => ( 
            <ModelCard
            key={name}
            imgSrc={card.imgSrc}
            carName={card.carName}
            price={card.price}
            power={card.power}
            mph={card.mph}
            speed={card.speed}
            ConfigurateCarPath={card.ConfiguratePath} 
              />
            ))}

                
            </div>
     </div>
    </div>
                   
    </div>
  )
}

export default Asection1
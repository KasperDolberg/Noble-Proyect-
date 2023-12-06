import React from 'react'
import '/src/stylesheets/news/Nsection1.css';
import Btn from '../global/buttons/btn';
import Header from '../global/Header';

const Nsection1 = () => {
  return (
    <>
    <Header title={'News'}/>
    <div className='container-absolute'>

        <div className="container-square">
            
            <div className="break-news">

                <div className="information">
                    <div className="info-content">
                        <div class="css-o1dubm"></div>
                        <span className='date'>09.12.2023</span>
                        <div class="css-o1dubm"></div>
                        <h2 className='breaknews-header'>Digital Detoxing: Getting off your iPhone and into the nearest forest</h2>
                        <div class="css-o1dubm"></div>
                        <p className="short-info">Are you the kind of person who checks your phone as soon as you wake up? If so, you’re just like everyone else. It’s time for us all to step back from our phones, and into nature’s embrace. If only for a little while.</p>
                        <div class="css-o1dubm"></div>
                        <Btn Text="Read more" to="/news" />

                    </div>
                </div> 

                <div className="img-new">
                    <div className='container-img-breaknews'>
                        <img src="/src/img/news/Nsection1/Eletre-forest.jpg" id='image-forest'/>
                    </div>
                </div>
            </div>
        </div>





    </div>
    </>
  )
}

export default Nsection1
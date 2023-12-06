import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'
import '/src/stylesheets/home/Section3.css';
import { Link } from 'react-router-dom'

const section3 = () => {
    
    const slides = [
        { url: '/src/img/home/Section3/IMG2PRUEBA.jpg', name: 'E Target', description: 'The redefinition of a sports car', price: '$140,000', },
        { url: '/src/img/home/Section3/IMG1PRUEBA.jpg', name: 'M200', description: 'A desing from the near future', price: '$80,000', },
        { url: '/src/img/home/Section3/IMG3PRUEBA.jpg', name: 'E300', description: 'The electric SUV', price: '$67,000', },
      ];
      

        const [currentIndex, setCurrentIndex] = useState(0)

        // SLIDE BOTTON LEFT LOGIC
        const prevSlide = () =>{
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
        }

        // SLIDE BOTTON RIGHT LOGIC
        const nextSlide = () =>{
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        };

        const goToSlide = (slideIndex) => {
            setCurrentIndex(slideIndex);
        };

return (    
   
    <div className='THEYNOWME  w-[85%] h-[100vh] w-full m-auto py-10  relative group'> 
            
            <div style={{backgroundImage:`url(${slides[currentIndex].url})` }} 
                 className='w-full h-full rounded-0xl bg-center bg-cover duration-500'>

            <div className="grandfather-container"> 

                <div className="father-containers"> 

                    <div className='son-container'>

                        <h1 className='css-1vhceqgg'>{slides[currentIndex].name}</h1>
                        <p className='css-1vhceqgg'>{slides[currentIndex].description}</p>
                        <p className='css-krqltk'>Starting at {slides[currentIndex].price} USD</p> 
                        <div class="css-1schyutt"></div>
                        <div className="css-1xdm420">
                            <div className="css-5pduei">
                            <Link to="/configure" role="link" className="css-13c2ifd">
                                <span className="css-1j2esho">
                                    <span className="css-1lfoa711">Configure</span>
                                    <span aria-hidden="true" data-type="icon" className="css-1lru1qp">
                                        <div className="css-1ckl8y4">
                                            <div className="css-jyc14k" style={{ opacity: 1, transform: 'translateX(0em)'}}>
                                            <svg viewBox="0 0 16 16" fill="none" height="1em" role="img" aria-label="arrowRight" className="css-1krb9jt">
                                                <path d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z" fill="#FFAD0A"></path>
                                            </svg>
                                            </div>
                                        </div>
                                    </span>
                                </span>
                            </Link>
                            </div>
                            </div>           
                        </div>

                    </div>

                </div>

                </div> 
        
        {/* Left Arrow */}

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>

        {/* Rigth Arrow */}

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} 
                        className='text-2xl cursor-pointer'>
                        <RxDotFilled/>
                    </div>
                ) )}
            </div>

        
        
    </div>

    
);
};

export default section3





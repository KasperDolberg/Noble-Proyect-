
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import '/src/stylesheets/Configure/Csection.css';
const Csection = () => {
      
    const slides = [
      {
        url: 'src/img/AboutUs/S-1.webp',
      },
      {
        url: 'src/img/AboutUs/bg-1.jpg',
      },
      {
        url: 'src/img/AboutUs/S-3.webp',
      },
      {
        url: 'src/img/AboutUs/S-8.webp',
      },
  
      {
        url: 'src/img/AboutUs/S7.webp',
      },
      {
        url: 'src/img/AboutUs/S-6.webp',
      },
      {
        url: 'src/img/AboutUs/S-4.webp',
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
    <div>
        <div className='container-section'>
            
            <div className='slide-Container' > 
            
              
            <div className='w-[100%] h-[90vh] w-full m-auto py-10  relative group'><div
           
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
            </div>

            <div className='config-Container'>
                <div className='config-content'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ipsa deserunt quae nisi. Quidem ab dolore ullam repellendus deserunt aspernatur minima unde deleniti numquam assumenda vero consequatur, laboriosam molestiae aut.
                    Aliquam quam nemo cupiditate consequatur ut? Autem, vitae reiciendis nisi sequi odio soluta, dolorem at incidunt asperiores debitis veritatis accusantium distinctio quis nobis cumque, molestias nulla nostrum. Corrupti, est illum!
                    Repudiandae aliquam dolor, ullam quo odio placeat laboriosam nam ab provident et, pariatur repellendus nobis illum dolore iste libero earum ad incidunt voluptate expedita dignissimos alias. Nostrum quos consectetur autem.
                    Recusandae omnis inventore dolorum, delectus deleniti ut, alias ipsum aliquid ipsa dolorem, explicabo magni deserunt quae sapiente sunt sint iste. Atque rerum optio iste nemo. Voluptas laborum maiores modi assumenda.
                    Ducimus earum architecto minima doloribus iusto placeat vitae. Dolore, placeat maxime in odit voluptates tempore illum dicta sint dolor ipsa quaerat totam aperiam omnis inventore delectus maiores veniam! Illo, aliquam.
                    Necessitatibus minus earum numquam ipsum doloribus voluptates ea quidem. Aut et possimus ut veritatis sint tempore pariatur delectus consectetur facere dicta, quis dolore, corrupti eos debitis ipsum reprehenderit, est deserunt!
                    Ducimus accusamus sequi illo quas beatae deleniti, quibusdam aperiam cum sapiente reiciendis ab! Culpa doloribus, earum ab nihil architecto ipsum illum tempore esse quo totam fugiat dicta suscipit, eligendi quam.
                    Rerum quae aliquam explicabo voluptates, dolorem obcaecati quos necessitatibus! Consequatur mollitia non voluptatibus. Reiciendis nam ut maxime officiis est cupiditate maiores laudantium. Vero perspiciatis dolores autem earum tempora natus quia.
                    Ipsam nostrum corrupti, vel optio quasi eveniet, voluptas odit amet ut aliquam harum dolorum voluptate. Facilis libero, possimus modi nam, numquam id dignissimos similique earum corporis, nesciunt ea perspiciatis nisi!
                    Quia aliquid cum quas animi nostrum eos itaque omnis, dicta ea accusantium consectetur earum inventore soluta voluptatibus libero deserunt ipsam delectus consequatur non nihil. Inventore provident animi eveniet obcaecati repellendus.
                    Quaerat, libero pariatur nobis velit sit architecto error maxime dolore voluptatem earum blanditiis id magni accusantium non, maiores dolor incidunt beatae! Cupiditate placeat, facilis cum perferendis reiciendis ut iure atque.
                    Veritatis ratione exercitationem at maiores totam a alias harum doloremque voluptate! Quaerat voluptatibus omnis in dolor iste aliquid asperiores ab labore suscipit maxime ut, pariatur facilis optio. Amet, atque corporis.
                    Beatae, rem? Voluptatem laborum optio impedit repellat dignissimos ullam corrupti error sapiente cupiditate commodi non libero, quos quia eligendi dicta voluptatibus itaque illo aliquid, ab nemo fugit quaerat. Vero, reprehenderit.
                    Facere, accusamus? Totam perspiciatis recusandae iusto illo necessitatibus optio, at aliquam laudantium iste dolorem dignissimos maxime mollitia sequi suscipit dolor ipsa quidem quam, atque quaerat id soluta eligendi dicta quia.
                    Exercitationem libero ipsam repellendus ratione assumenda id ad quidem nostrum mollitia provident placeat ut deserunt illum consectetur rerum amet voluptatum, excepturi obcaecati explicabo? Ullam, illum amet quas explicabo voluptate delectus.
                    Maxime nesciunt culpa inventore asperiores porro reiciendis doloremque animi repudiandae cum quasi iste repellat, sint nostrum distinctio quis. Quam suscipit numquam quibusdam facere exercitationem similique quas eligendi! Maxime, dolorem explicabo.
                    Iste placeat culpa sapiente dolorem rerum necessitatibus sunt laborum, alias voluptatem eius illo sequi inventore accusamus soluta architecto eligendi, odit excepturi doloremque, quia mollitia quisquam hic repellendus assumenda. Ducimus, rem?
                    Harum quae dolores tenetur laudantium quaerat temporibus fugit nulla obcaecati atque! Commodi, eius? Nesciunt nisi sit dolorum suscipit doloribus, libero pariatur, iste debitis enim fugiat accusamus similique? Dolore, repudiandae magni.
                    Velit ea perferendis voluptates non, minima quos illum voluptatum natus labore officiis minus nemo nihil eos dolore voluptatibus enim impedit illo! Assumenda, qui voluptatibus! Cumque quibusdam repellendus enim deleniti molestias!
                    Harum veritatis saepe autem perspiciatis vel fugit consequatur repellat cumque? Numquam, dicta. Saepe dicta adipisci, tempore blanditiis autem, hic eveniet animi neque incidunt quidem sunt minus. Fugiat unde voluptate similique.
                </div>
            </div>


         </div>
    </div>
  )
}

export default Csection
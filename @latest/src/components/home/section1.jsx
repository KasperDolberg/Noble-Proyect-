import React from 'react';
import '/src/stylesheets/home/Section1.css';
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <div className="swiper">
      <div className="swiper-slide first">
        {/* <div className="bg-color-one"></div>
        <div className="bg-color-two"></div> */}
        <div className="father-container">
          <div className="icon-white-container">
            <div className="noble-icon-white">
              <img src="/src/img/home/Section1/LOGO.png" alt="" />
            </div>
          </div>
        {/* SETTINGS CONTAINERS */}

      {/* INFO CONTAINER */}
      <div className="info-container">
        <div className="text">
          <div className="noble-icon">
            <img src="/src/img/home/Section1/LOGO.png" alt="" />
          </div>
          <h1 id="NOBLE">Noble</h1>
          <h1 id="m-600">M-600</h1>
          <p className="phrase">
            Delivering the ultimate driver reward with a rush of adrenalin.
          </p>

          {/* BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS */}
          <div className="css-1xdm420">
            <div className="css-5pduei">
              <Link to='/configure' role="link" className="css-rzaghs" id="172178027">
                <span className="css-1n75gs1">
                  <span className="css-1lfoa71">Available cars</span>
                  <span
                    aria-hidden="true"
                    data-type="icon"
                    className="css-1lru1qp"
                  >
                    <div className="css-1ckl8y4">
                      <div
                        className="css-jyc14k"
                        style={{ opacity: 1, transform: 'translateX(0em)' }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          height="1em"
                          role="img"
                          aria-label="arrowRight"
                          className="css-1krb9jt"
                        >
                          <path
                            d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                            fill="#FFAD0A"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </span>
                </span>
              </Link>
              <a role="link" className="css-13c2ifd" href="#">
                <span
                  data-focus-theme="light"
                  id="146980041"
                  className="css-rzlp4k"
                >
                  <span className="css-1j2esho">
                    <span className="css-1lfoa71">Discover</span>
                    <span
                      aria-hidden="true"
                      data-type="icon"
                      className="css-1lru1qp"
                    >
                      <div className="css-1ckl8y4">
                        <div
                          className="css-jyc14k"
                          style={{ opacity: 1, transform: 'translateX(0em)' }}
                        >
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            height="1em"
                            role="img"
                            aria-label="arrowRight"
                            className="css-1krb9jt"
                          >
                            <path
                              d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                              fill="#FFAD0A"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </span>
                  </span>
                </span>
              </a>
            </div>
            <div className="css-yd35ng"></div>
          </div>
          {/* BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS */}
        </div>
        </div>
  {/* INFO CONTAINER */}



  {/* PRINCIPAL LETTERS AND THE CAR */}
        <div className="StylesMain">       
        </div>
  {/* PRINCIPAL LETTERS AND THE CAR */}


      </div>
    </div>
  </div>
    /*===============================================INDEX HOME CONTAINER=============================================*/
  );
};

export default Section1;





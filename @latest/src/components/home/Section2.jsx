import React from 'react';
import '/src/stylesheets/home/Section2.css';
import videoBg from '/src/img/home/Section2/S1.mp4'
import { Link } from 'react-router-dom';

const Section2 = () => {
  return (
    <div className="video-container">
      <div className="video">
        <div className='text-video'>
          <div className='h2-container'>
          <h2>A real experience for drivers</h2>
          <button
                      data-focus-spacing="4"
                      id="tabletDesktop-5414661"
                      label="Book a test drive"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="css-ttcv04"
                    >
                      <span className="css-1j2esho">
                        <span className="css-1lfoa71-"><Link to='/gallery' className="css-1lfoa71-">Learn more</Link></span>
                        <span
                          aria-hidden="true"
                          data-type="icon"
                          className="css-d4b8ststst"
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
                    </button>
          </div>
        </div>
      <video src={videoBg} autoPlay loop muted class='myVideo'/>
      </div>
  </div>
  );
};

export default Section2;

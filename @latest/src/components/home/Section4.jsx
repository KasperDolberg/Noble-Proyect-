import React from 'react'
import '/src/stylesheets/home/section4.css'
import { Link } from 'react-router-dom'

const Section4 = () => {
  return (
    
    
    <div className='bigger-container'>

        <div className="big-container">

            <div className="small-container">

                <div className="finance-container">
                    <h1 class="css-1vhceqgg">Noble - E300</h1>
                    <h2 class="css-1vhceqgg">Launch edition with Pilot and Plus pack.</h2>
                    <div class="css-10bx1qd"></div>
                    <p class="css-krqltk">Starting at $67,000 MSRP</p>
                    <div class="css-1schyutt"></div>
                     {/* BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS */}
                    <div className="css-1xdm420">
                        <div className="css-5pduei">
                            <Link to="/finance" role="link" className="css-13c2ifd">
                            <span data-focus-theme="dark" id="142237965" className="css-cfxo7m">
                                <span className="css-1n75gs1">
                                <span className="css-1lfoa711">Finance</span>
                                <span aria-hidden="true" data-type="icon" className="css-1lru1qp">
                                    <div className="css-1ckl8y4">
                                    <div className="css-jyc14k" style={{ opacity: 1, transform: 'translateX(0em)' }}>
                                        <svg viewBox="0 0 16 16" fill="none" height="1em" role="img" aria-label="arrowRight" className="css-1krb9jt">
                                        <path d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z" fill="#FFAD0A"></path>
                                        </svg>
                                    </div>
                                    </div>
                                </span>
                                </span>
                            </span>
                            </Link>   
                            <Link to='/configure' role="link" className="css-16jz8pg" id="142455775">
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
                    {/* BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS */}
                </div>

            </div>    

        </div>

    </div>
  )
}

export default Section4
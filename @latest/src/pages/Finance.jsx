import React, { useState } from 'react';
import SliderFinance from '/src/components/finance/SliderFinance';
import Header from '/src/components/global/Header';
import '/src/stylesheets/Finance/finance.css';
import Navbar from '/src/components/global/Navbar';
import Footer from "/src/components/global/Footer.jsx";

const Finance = () => {

  const [selectedDownPayment, setSelectedDownPayment] = useState(null);
  const [selectedTermLength, setSelectedTermLength] = useState(null);
  const [activeButton, setActiveButton] = useState(null);


  const [downPayment, setDownPayment] = useState(0);
  const [termLength, setTermLength] = useState(0);
  const basePrice = 67000;

  const handleDownPaymentChange = (amount) => {
    setDownPayment(amount);
    setSelectedDownPayment(amount);
  };

  const handleTermLengthChange = (months) => {
    setTermLength(months);
    setSelectedTermLength(months);
  };

  const calculateMonthlyPayment = () => {
    if (downPayment === 0 || termLength === 0) {
      return 'Please select options';
    }

    const monthlyPayment = (basePrice - downPayment) / termLength;
    return `${monthlyPayment.toFixed(2)}`;
  };


  return (
    <div>
      <Navbar/>
      <Header title={'Finance'} number={'95%'} />
      <div className='Finance-container'>
        <div className='Column-setting'>
          <div className='column-slider'>
            <SliderFinance
              onDownPaymentChange={handleDownPaymentChange}
              onTermLengthChange={handleTermLengthChange}
            />
          </div>
          <div className='column-content'>
            <div className='Tittle-Finance'>
              <div className='finance-tittle'>
              <div className="container__title--">
                    <div className="title__header--">
                          <h2>Finance </h2>
                    </div>
                    <div className='price-container'>
                            <p className='title__small'>Starting at:</p>
                            <h2>$ 67,000 </h2>
                    </div>

                </div>
              </div>
            </div>
            <div className='Content-Finance'>
              <div className='options-finance'>
                <div className='payment'>
                  <h2 className='section-title--'>Down payment</h2>
                  <div className="accordion-finance">
                    <input type="checkbox" id="toggle1" />
                    <label className="accordion-finance-button--" htmlFor="toggle1">
                      <h1>Options</h1>
                      <i className="bx bx-plus"></i>
                    </label>
                    <div className="accordion-finance-body">
                      <ul className="content-finance">
                        <li>
                          <button
                            className={selectedDownPayment === 10000 ? 'selected' : ''}
                            onClick={() => handleDownPaymentChange(10000)}
                          >
                            10,000
                          </button>
                        </li>
                        <li>
                          <button
                            className={selectedDownPayment === 15000 ? 'selected' : ''}
                            onClick={() => handleDownPaymentChange(15000)}
                          >
                            15,000
                          </button>
                        </li>
                        <li>
                          <button
                            className={selectedDownPayment === 20000 ? 'selected' : ''}
                            onClick={() => handleDownPaymentChange(20000)}
                          >
                            20,000
                          </button>
                        </li>
                        <li>
                          <button
                            className={selectedDownPayment === 25000 ? 'selected' : ''}
                            onClick={() => handleDownPaymentChange(25000)}
                          >
                            25,000
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='length'>
                  <h2 className='section-title--'>Term length</h2>
                  <div className="accordion-finance">
                    <input type="checkbox" id="toggle2" />
                    <label className="accordion-finance-button--" htmlFor="toggle2">
                      <h1>Options</h1>
                      <i className="bx bx-plus"></i>
                    </label>
                    <div className="accordion-finance-body">
                      <ul className="content-finance">
                        <li>
                          <button
                            className={selectedTermLength === 24 ? 'selected' : ''}
                            onClick={() => handleTermLengthChange(24)}
                          >
                            24 Months
                          </button>
                        </li>
                        <li>
                          <button
                            className={selectedTermLength === 36 ? 'selected' : ''}
                            onClick={() => handleTermLengthChange(36)}
                          >
                            36 Months
                          </button>
                        </li>
                        <li>
                          <button
                            className={selectedTermLength === 48 ? 'selected' : ''}
                            onClick={() => handleTermLengthChange(48)}
                          >
                            48 Months
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className='result'>
                <div className='result-tittle'>
                  <h2 className='finance-tittle'>Final Price: </h2>
                </div>
                <div className='result-price'>
                  <div className='result-price-final'>
                    <h2 className='section-title---'>Monthly Payment:   <span className='result-color-setting'> ${calculateMonthlyPayment()} <span className='dolar-color'>/ month</span></span>  </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Finance;
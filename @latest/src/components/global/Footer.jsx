import React from "react";
import "/src/stylesheets/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container-father-at-all">
        <div className="container-child">
          <div className="container-stay-up">
            <div className="stay-up">
              <h1>Stay up to date on all the latest Noble news</h1>
              <p>
                Get the latest news, events, product information, collaborations
                with business partners, and more from the Noble universe. To be
                on the list, fill in your details and the most up-to-date news
                and information about Noble, will soon be delivered directly to
                your inbox.
              </p>
              {/* button */}
              <a role="link" className="css-rzaghss" id="172178027" href="#">
                <span className="css-1n75gs1">
                  <span className="css-1lfoa711">Learn more</span>
                  <span
                    aria-hidden="true"
                    data-type="icon"
                    className="css-1lru1qp"
                  >
                    <div className="css-1ckl8y4">
                      <div
                        className="css-jyc14k"
                        style={{ opacity: 1, transform: "translateX(0em)" }}
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
                            fill="rgb(74, 120, 168)"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </span>
                </span>
              </a>
              {/* button */}
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="toggle1" />
            <label className="accordion-button" for="toggle1">
              <h1>Noble.com</h1>
              <i className="bx bx-plus"></i>
            </label>
            <div className="accordion-body">
              <ul className="content">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">M600</a>
                </li>
                <li>
                  <a href="#">E Target</a>
                </li>
                <li>
                  <a href="#">M500</a>
                </li>
                <li>
                  <a href="#">M200</a>
                </li>
                <li>
                  <a href="#">E300</a>
                </li>
                <li>
                  <a href="#">Pre-owned</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="accordion">
            <input type="checkbox" id="toggle2" />
            <label className="accordion-button" for="toggle2">
              <h1>Discover</h1>
              <i className="bx bx-plus"></i>
            </label>
            <div className="accordion-body">
              <ul className="content">
                <li>
                  <a href="">Noble locations</a>
                </li>
                <li>
                  <a href="">Additionals</a>
                </li>
                <li>
                  <a href="">How to buy</a>
                </li>
                <li>
                  <a href="">Noble Financial Services </a>
                </li>
                <li>
                  <a href="">Ownership</a>
                </li>
                <li>
                  <a href="">Electric driving</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="accordion">
            <input type="checkbox" id="toggle3" />
            <label className="accordion-button" for="toggle3">
              <h1>Noble</h1>
              <i className="bx bx-plus"></i>
            </label>
            <div className="accordion-body">
              <ul className="content">
                <li>
                  <a href="">Events</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Sustainability</a>
                </li>
                <li>
                  <a href="">About Noble</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Design Contest</a>
                </li>
                <li>
                  <a href="">Media</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="accordion">
            <input type="checkbox" id="toggle4" />
            <label className="accordion-button" for="toggle4">
              <h1>Social</h1>
              <i className="bx bx-plus"></i>
            </label>
            <div className="accordion-body">
              <ul className="content">
                <li>
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="">Facebook</a>
                </li>
                <li>
                  <a href="">Linkedin</a>
                </li>
                <li>
                  <a href="">X (Twitter)</a>
                </li>
                <li>
                  <a href="">Tik Tok</a>
                </li>
                <li>
                  <a href="">Noble News</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rights">
        <h1>Noble@2023 All rights reserved</h1>

        <a href="">
          This website is solely intended for educational purposes. We do not
          claim ownership of any rights to the content presented herein.
        </a>
      </div>
    </footer>
  );
};

export default Footer;

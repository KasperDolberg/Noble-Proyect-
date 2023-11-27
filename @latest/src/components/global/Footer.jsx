import React from 'react'
import '/src/stylesheets/Footer.css'

const Footer = () => {
  return (
    <div>
      <div className='container-father'>
        <div className='container-child'>
          <div className='stay-up'>
              <h1>Stay up to date on all the latest Noble news</h1>
              <p>Get the latest news, events, product information, collaborations with business partners, and more from the Noble universe. To be on the list, fill in your details and the most up-to-date news and information about Noble, will soon be delivered directly to your inbox.
              </p>
              <button>Suscribe</button>
          </div>
          <div className='children'>
            <h1 className='sub-title-footer'>Noble.com</h1>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">N200</a>
              </li>
              <li>
                <a href="">N300</a>
              </li>
              <li>
                <a href="">N400</a>
              </li>
              <li>
                <a href="">N500</a>
              </li>
              <li>
                <a href="">N600</a>
              </li>
              <li>
                <a href="">Pre-owned</a>
              </li>
            </ul>
          </div>
          <div className='children'>
            <h1 className='sub-title-footer'>Discover</h1>
            <ul>
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
                <a href="">noble Financial Services </a>
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
          <div className='children'>
            <h1 className='sub-title-footer'>Polestar</h1>
            <ul>
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
          <div className='children'>
            <h1 className='sub-title-footer'>Social</h1>
            <ul>
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
                <a href="">Polestar Community</a>
              </li>
              <li>
                <a href="">Design Community</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='rights'>
          <h1>Noble@2023 All rights reserved</h1>
          <a href="">Legal</a>
          <a href="">Ethics</a>
          <a href="">Privacy</a>
          <a href="">Cookies</a>
          <a href="">Don't sell my personal information</a>
        </div>
    </div>
  )
}

export default Footer

import React, { useEffect } from 'react';
import '/src/stylesheets/Nav.css';

const Nav = () => {
  useEffect(() => {
    /*===== EXPANDER MENU  =====*/ 
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show');
          toggle.classList.toggle('bx-x');
        });
      }
    };
    showMenu('header-toggle', 'nav-menu');
    
    /*===== ACTIVE AND REMOVE MENU =====*/
    const navLink = document.querySelectorAll('.nav__link');   
    
    function linkAction() {
    //   ACTIVE LINK
      navLink.forEach(n => n.classList.remove('active'));
      this.classList.add('active');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));

    // Limpiar eventos al desmontar el componente
    return () => {
      showMenu('header-toggle', 'nav-menu');
      navLink.forEach(n => n.removeEventListener('click', linkAction));
    };
  }, []); 

  return (

    <header className="header">
       <div className="logo-container">
        <a href="#" id="header__logo"></a>
        <i className="bx bx-menu header__toggle" id="header-toggle" style={{ color: 'black' }}></i>

    </div>
    <nav className="nav" id="nav-menu">
        <div className="nav__content bd-grid">
            <a href="" className="nav__perfil">
            <div className="nav__img">
                  <img src="/src/img/LOGO.png" alt="" />
                    </div>
                <span className="nav__greeting">Artisan Manufacturer</span>
                <div>
                    <h1 className="nav__name">Noble <br /> Automotive</h1>
                </div>
            </a>

            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className='bx bx-home' ></i> Home 
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className='bx bxs-car-garage bx-tada' ></i> Discover
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className='bx bxs-credit-card' ></i> Current Offers
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className='bx bx-book-bookmark' ></i> About Us
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className='bx bx-message-square-detail'></i> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </header>
  );
};

export default Nav;
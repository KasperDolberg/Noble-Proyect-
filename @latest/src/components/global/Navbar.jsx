import { useRef } from "react";
import "/src/components/Navbar/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="header--">
			
			<nav ref={navRef}>
                <div className="container-navbar">
                    <div className="container-navbar-child">
                        <div className="link-list">
                            <img src="/src/img/home/Section1/LOGO.png" alt="" />
                            <Link to={'/'} className="link-Nav">Home</Link>
                            <Link to={'/available-cars'} className="link-Nav">Available Cars</Link>
                            <Link to={'/finance'} className="link-Nav">Finance</Link>
                            <Link to={'/about'} className="link-Nav">About Us</Link>
                            <Link to={'/news'} className="link-Nav">News</Link>
                        </div>

                    </div>

                </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<i class='bx bx-x'></i>
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<i class='bx bx-menu' ></i>
			</button>
		</header>
	);
}

export default Navbar;
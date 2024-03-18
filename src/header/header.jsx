import { useState, useEffect } from "react";
import "./header.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown as faAngleDownSolid } from '@fortawesome/free-solid-svg-icons';
import NavMenu from "../../components/nav-menu/navMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    <NavMenu />
  };

  return (
    <>
      <div>
        <div className={`header ${scrolling ? 'scrolled' : ''}`}>
          <div className="header-top">
            <div className="top-left">
              <a href="tel:+953 012 3654 896">+953 012 3654 896</a>
              <a href="mailto:support@colorlib.com">support@colorlib.com</a>
            </div>
            <div className="top-right">
              <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
              <a href=""><FontAwesomeIcon icon={faDribbble} /></a>
              <a href=""><FontAwesomeIcon icon={faBehance} /></a>
            </div>
          </div>
          <div className="horizontal-line">
            <hr />
          </div>
          <div className="header-container">
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className={`nav-container ${showMenu ? 'show-menu' : ''}`}>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Projects</a></li>
              <li className="dropdown">
                <a href="">Blog <FontAwesomeIcon icon={faAngleDownSolid} /></a>
                <div className="dropdown-content">
                  <div>
                    <a href="">Blog Home</a>
                  </div>
                  <div>
                    <a href="">Blog Single</a>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <a href="">Pages <FontAwesomeIcon icon={faAngleDownSolid} /></a>
                <div className="dropdown-content">
                  <div>
                    <a href="">Project Details</a>
                  </div>
                  <div>
                    <a href="">Elements</a>
                  </div>
                  <li>
                    <div className="dd-list">
                      <a href="#" className="level2">Level 2<span className="dropdown-arrow">&gt;</span></a>
                    </div>
                    {/* <div className="dropdown-sub-content">
                      <div>
                        <a href="">Item One</a>
                      </div>
                      <div>
                        <a href="">Item Two</a>
                      </div>
                    </div> */}
                  </li>
                </div>
              </li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;

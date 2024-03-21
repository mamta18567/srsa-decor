import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';
import "./footer.css"

const Footer = () => {

  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="sec-1">
          <h6>About Us</h6>
          <p>If you own an Iphone, you’ve probably already worked out how much fun it is to use it to watch movies-it has that.</p>
          <p>Copyright ©2024 All rights reserved | This template is made with  by Hardcipher Pvt. Ltd.</p>
        </div>
        <div className="sec-2">
          <h6>Newsletter</h6>
          <p>Stay update with our latest</p>
          <div className='input-box'>
            <input className="input" type="email" placeholder="Email Address" />
            <button className='input-btn'><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
        <div className="sec-3">
          <h6>Follow Us</h6>
          <p>Let us be social</p>
          <div className='icons'>
            <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
            <a href=""><FontAwesomeIcon icon={faDribbble} /></a>
            <a href=""><FontAwesomeIcon icon={faBehance} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
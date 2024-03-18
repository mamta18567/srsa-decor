import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown as faAngleDownSolid } from '@fortawesome/free-solid-svg-icons';
const NavMenu = () => {
  return (
    <ul className="nav-container show-menu">
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
            <div className="dropdown-sub-content">
              <div>
                <a href="">Item One</a>
              </div>
              <div>
                <a href="">Item Two</a>
              </div>
            </div>
          </li>
        </div>
      </li>
      <li><a href="">Contact</a></li>
    </ul>
  );
};

export default NavMenu
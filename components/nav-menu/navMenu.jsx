/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDown as faAngleDownSolid } from '@fortawesome/free-solid-svg-icons';
import "./navMenu.css"

const NavMenu = ({setShowMenu}) => {
  return (
    <>
      <div className='nav-menu'>
        <ul className='sidebar'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Projects</a></li>
          <li className="">
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
          <li className="">
            <a href="">Pages <FontAwesomeIcon icon={faAngleDownSolid} /></a>
            <div className="">
              <div>
                <a href="">Project Details</a>
              </div>
              <div>
                <a href="">Elements</a>
              </div>
              <li>
                <div className="">
                  <a href="#" className="">Level 2<span className="">&gt;</span></a>
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
        <div className='icon'>
        <FontAwesomeIcon icon={faTimes} onClick={()=>setShowMenu(false)}/>
        </div>
      </div>
    </>
  );
};

export default NavMenu
/* eslint-disable react/prop-types */
import "./feature-card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeatureCard = ({ icon, heading, text }) => {

  return (
    <>
      <div className="feature-card">
        <div>
          <a className='heading' href="">
            <FontAwesomeIcon icon={icon} />
            <h4>{heading}</h4>
          </a>
        </div>
        <div className='text'>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default FeatureCard;
/* eslint-disable react/prop-types */
import { useState } from "react";
import './hoverBox.css'

const HoverBox = ({ imageSrc, altText, heading }) => {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div className="image-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image">
        <img className="interior-image" src={imageSrc} alt={altText} />
      </div>
      {hovering && (
        <div className="text-overlay">
          <div className="hover-content">
            <h3>{heading}</h3>
            <button>More Details</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default HoverBox
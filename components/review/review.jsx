/* eslint-disable react/prop-types */
import "./review.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Review = ({ image, name, text, ratings }) => {

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starColor = i < ratings ? "#c6b069" : "#777";
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} style={{ color: starColor }} />
      );
    }
    return stars;
  };

  return (
    <>
      <div className="testimonial">
        <div className="testimonial-image">
          <img src={image} alt="user-image" />
        </div>
        <div className="testimonial-content">
          <p>{text}</p>
          <h4>{name}</h4>
          <div className="rating">{renderStars()}</div>
        </div>
      </div>
    </>
  );
};

export default Review;

/* eslint-disable react/prop-types */
import "./exhibitionBox.css";

const ExhibitionBox = ({ image, name, text, date }) => {


  return (
    <>
      <div className="exhibition-box-container">
          <img className="exhibition-image" src={image} alt="exhibition-image" />
        <div className="exhibition-btns">
          <button className="btn">Travel</button>
          <button className="btn">Life Style</button>
        </div>
        <div className="exhibition-box-content">
          <h4>{name}</h4>
          <p>{text}</p>
          <h6>{date}</h6>
        </div>
      </div>
    </>
  );
};

export default ExhibitionBox;

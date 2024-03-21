/* eslint-disable react/prop-types */
import "./exhibitions.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ExhibitionBox from "../../components/exhibition-box/exhibitionBox";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";

const Exhibitions = () => {

  const settings = {
    dots: true,
    dotsClass: "slick-dots rectangular-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          onReInit: () => console.log("Breakpoint 1024 reached"),
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <>
      <div className="exhibition-container">
        <div className="exhibition-content">
          <h1>Ongoing Exhibitions from the scratch</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="slide-container">
          <div className="slider-content">
            <Slider {...settings}>
              <ExhibitionBox 
              image={b1}
              text={"Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer."}
              name={"Low Cost Advertising"}
              date={"31st January,2018"}
              />
              <ExhibitionBox 
              image={b2}
              text={"Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer."}
              name={"Creative Outdoor Ads"}
              date={"31st January,2018"}
              />
              <ExhibitionBox 
              image={b3}
              text={"Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer."}
              name={"It's Classified How To Utilize Free"}
              date={"31st January,2018"}
              />
              <ExhibitionBox 
              image={b1}
              text={"Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer."}
              name={"Low Cost Advertising"}
              date={"31st January,2018"}
              />
              <ExhibitionBox 
              image={b2}
              text={"Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer."}
              name={"Creative Outdoor Ads"}
              date={"31st January,2018"}
              />
              <ExhibitionBox 
              image={b3}
              text={"Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer."}
              name={"It's Classified How To Utilize Free"}
              date={"31st January,2018"}
              />
            </Slider>
          </div>
        </div>
      </div>
    </>

  )
}

export default Exhibitions;
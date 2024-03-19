/* eslint-disable react/prop-types */
import "./reviews.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Review from "../../components/review/review";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png"

const ReviewSection = () => {

  const settings = {
    dots: true,
    dotsClass: "slick-dots rectangular-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

    ],
  };


  return (
    <>
      <div className="reviews-container">
        <div className="reviews-content">
          <h1>Testimonial from our Clients</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="slider-container">
          <div className="slider-content">
            <Slider {...settings}>
              <Review
                name={"Mark Alviro Wiens"}
                text={"Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware."}
                image={user1}
                ratings={4}
              />
              <Review
                name={"Lina Harrington"}
                text={"Hypnosis quit smoking methods maintain caused quite world over the last two decades. There is a lot of argument pertaining to"}
                image={user2}
                ratings={3}
              />
              <Review
                name={"Mark Alviro Wiens"}
                text={"Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware."}
                image={user1}
                ratings={2}
              />
              <Review
                name={"Lina Harrington"}
                text={"Hypnosis quit smoking methods maintain caused quite world over the last two decades. There is a lot of argument pertaining to"}
                image={user2}
                ratings={1}
              />
            </Slider>
          </div>
        </div>
      </div>
    </>

  )
}

export default ReviewSection;
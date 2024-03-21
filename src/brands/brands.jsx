import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import l1 from "../assets/l1.png"
import l2 from "../assets/l2.png"
import l3 from "../assets/l3.png"
import l4 from "../assets/l4.png"
import l5 from "../assets/l5.png"
import "./brands.css"

const Brands = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <div className="brands-section">
        <div className='brands-container'>
          <div className="brands">
            <Slider {...settings}>
              <a className='brand'>
                <img src={l1} alt="brand-image" />
              </a>
              <a className='brand'>
                <img className="brand-ima" src={l2} alt="brand-image" />
              </a>
              <a className='brand'>
                <img src={l3} alt="brand-image" />
              </a>
              <a className='brand'>
                <img src={l4} alt="brand-image" />
              </a>
              <a className='brand'>
                <img src={l5} alt="brand-image" />
              </a>
            </Slider>
          </div>
        </div>
      </div>
    </>
  )

}

export default Brands
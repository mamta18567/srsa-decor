import "./work.css"
import HoverBox from "../../components/hoverBox/hoverBox"
import g1 from "../assets/g1.jpg"
import g2 from "../assets/g2.jpg"
import g3 from "../assets/g3.jpg"
import g4 from "../assets/g4.jpg"

const Work = () => {

  return (
    <>
      <div className="work-container">
        <div className="work-content">
          <h1>Our Recent Works may impress you</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="image-section">
          <div className="top-container">
            <HoverBox
              imageSrc={g1}
              altText="Picture 1"
              heading="Lavendar ambient interior"
            />
            <HoverBox
              imageSrc={g2}
              altText="Picture 2"
              heading="Ambient interior"
            />
          </div>
          <div className="bottom-container">
          <HoverBox
              imageSrc={g3}
              altText="Picture 3"
              heading="Ambient interior"
            />
            <HoverBox
              imageSrc={g4}
              altText="Picture 4"
              heading="Lavendar ambient interior"
            />
          </div>
        </div>
      </div>
    </>

  )
}

export default Work;
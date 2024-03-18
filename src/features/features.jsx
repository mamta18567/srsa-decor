import FeatureCard from "../../components/feature-card/feature-card"
import "./features.css"
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Features = () => {

  return (
    <>
      <div className="feature-container">
        <div className="feature-content">
          <h1>Some features that made us unique</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="feature-cards">
          <FeatureCard
            icon={faUser}
            heading={"Expert Technicians"}
            text={"Computer users and programmers have become so accustomed to using Windows, even for the changing."}
          />
          <FeatureCard
            icon={faUser}
            heading={"Professional Service"}
            text={"Finding the perfect learning tool for Flash is a daunting task to any novice web developer. One can find help."}
          />
          <FeatureCard
            icon={faUser}
            heading={"Great Support"}
            text={"While most people enjoy casino ambling, sports betting, lottery and bingo playing for the fun and excitement."}
          />
          <FeatureCard
            icon={faUser}
            heading={"Technical Skills"}
            text={"“The moment you think of buying a Web Hosting Plan, you know one thing – So many choices, which one to choose."}
          />
          <FeatureCard
            icon={faUser}
            heading={"Highly Recomended"}
            text={"Many conventional colleges and universities are now offering online DVD repair courses, which are the exact same."}
          />
          <FeatureCard
            icon={faUser}
            heading={"Positive Reviews"}
            text={"So you have your new digital camera and clicking away to glory anything and everything in sight. Now you want."}
          />
        </div>
      </div>
    </>

  )
}

export default Features
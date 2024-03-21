import Brands from "./brands/brands"
import Exhibitions from "./exhibitions/exhibitions"
import Features from "./features/features"
import Footer from "./footer/footer"
import Header from "./header/header"
import Home from "./home/home"
import RequestSection from "./request-action/request"
import ReviewSection from "./reviews/reviews"
import Services from "./services/services"
import Work from "./work/work"

function App() {

  return (
    <>
      <Header />
      <Home />
      <Services />
      <Work />
      <Features />
      <ReviewSection />
      <RequestSection />
      {/* <Exhibitions /> */}
      <Brands />
      <Footer />
    </>
  )
}

export default App

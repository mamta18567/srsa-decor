import Features from "./features/features"
import Header from "./header/header"
import Home from "./home/home"
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
    </>
  )
}

export default App

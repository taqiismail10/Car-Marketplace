import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import InfoSection from "./components/InfoSection"
import MostSearchedCar from "./components/MostSearchedCar"

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* CarCategories */}
      <Categories />

      {/* Most Searched Car */}
      <MostSearchedCar />

      {/* Info Section */}
      <InfoSection />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home
import Categories from "./components/Categories"
import Header from "./components/Header"
import Hero from "./components/Hero"

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* CarCategories */}
      <Categories />

    </div>
  )
}

export default Home
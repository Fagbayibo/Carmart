import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import Category from "./components/Home/Category";
import MostSearchedCar from "./components/Home/MostSearchedCar";
import Feature from "./components/Home/Feature";
import Footer from "./components/Home/Footer";

function Home() {
  return (
    <>
    {/* Header */}
    <Header/>
    {/* Hero */}
    <Hero/>
    {/* Category */}
    <Category/>
    {/* Most searched car */}
    <MostSearchedCar/>
    {/* Features */}
    <Feature/>
    {/* Footer */}
    <Footer/>
    </>
  );
}

export default Home;

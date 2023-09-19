import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import TopPicks from "../components/CommonImports/CommonImports";
import Reviews from "../components/Reviews/Reviews";

function HomePage() {
  useEffect(() => {
    document.title = 'The Plug KE';
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="App">
      <Header />
      <Hero />
      <TopPicks />
      <Reviews />
      <Footer />
    </div>
  );
}

export default HomePage;

import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BusinessReviews from "../components/Reviews/BusinessReviewPage";

function HomePage() {
  useEffect(() => {
    document.title = 'Business Reviews';
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="App">
      <Header />
      <BusinessReviews/>
      <Footer />
    </div>
  );
}

export default HomePage;
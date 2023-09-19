import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Reviews from "../components/Reviews/Reviews";

function Review () {
    return (
        <div className="App">
          <Header />
          <Reviews />
          <Footer />
        </div>
      );
}

export default Review;
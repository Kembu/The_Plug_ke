import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CommentSection from "../components/CommentSection/CommentSection";


function Review () {
    return (
        <div className="App">
          <Header />
          <CommentSection />         
          <Footer />
        </div>
      );
}

export default Review;
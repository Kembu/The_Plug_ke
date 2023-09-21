import React from "react";
import ReviewHeader from "../components/Header/ReviewHeader";
import Footer from "../components/Footer/Footer";
import CommentSection from "../components/CommentSection/CommentSection";


function Review () {
    return (
        <div className="App">
          <ReviewHeader />
          <CommentSection />         
          <Footer />
        </div>
      );
}

export default Review;
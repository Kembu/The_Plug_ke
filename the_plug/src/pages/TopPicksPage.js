import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TopPicks from '../components/TopPicks/TopPicks';

function TopPicksPage() {
    return (
      <div className="App">
        <Header />
        <TopPicks />
        <Footer />        
      </div>
    );
  }

export default TopPicksPage;
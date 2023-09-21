import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Login  from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import HomePage from '../pages/HomePage';
import TopPicksPage from '../pages/TopPicksPage';
import SignUp from '../pages/SignUp';
import Review from '../pages/Reviews';
import TermsAndConditions from '../components/TermsAndConditions/TermsAndConditions';
import BusinessReviews from '../pages/BusinessReviews';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/404' element={<PageNotFound/>} />
        <Route path='/' element={<HomePage/>} /> 
        <Route path='/topPicks' element={<TopPicksPage/>} />
        <Route path='/reviews' element={< Review />} />        
        <Route path='/signup' element={< SignUp/>} />
        <Route path='/termsAndConditions' element={<TermsAndConditions />} />
        <Route path='/BusinessReviewsPage' element={<BusinessReviews />} />
        <Route path='/topPicksPage' element={<TopPicksPage />} />
      </Routes>
    </div>
  );
}

export default App;
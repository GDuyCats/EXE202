import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NoPage from './pages/NoPage';
import PolicyPage from './pages/PolicyPage';
import UserAgreementPage from './pages/UserAgreement'
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ForumPage from './pages/ForumPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/useragreement" element={<UserAgreementPage />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/forum" element={<ForumPage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;

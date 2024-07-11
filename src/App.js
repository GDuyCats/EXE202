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
import MainLayout from './layouts/MainLayout';
import Transaction from './pages/TransactionPage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Discount from './pages/Discount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path='/discount' element={<Discount/>}/>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/useragreement" element={<UserAgreementPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>

  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import NoPage from './pages/NoPage/NoPage';
import PolicyPage from './pages/Policy/PolicyPage';
import UserAgreementPage from './pages/UserAgreement/UserAgreement'
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import ForumPage from './pages/Forum/ForumPage';
import ShopPage from './pages/Shop/ShopPage';
import MainLayout from './MainLayout/MainLayout';
import Transaction from './pages/TransactionPage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Discount from './pages/Discount/Discount';
import AuthProvider from './context/AuthContext';
import DiscountOption from './pages/DiscountOption';
import ShippingOption from './pages/ShippingOption';
import PaymentSuccess from './pages/PaymentSuccessPage'; 
import PaymentFailed from './pages/PaymentFailPage';
import DashBoard from './pages/Admin/DashBoard';
import UserProfile from './components/UserProfile/UserProfile';
import Shipcompany from './pages/ShipCompany/Shipcompany';
import "react-image-gallery/styles/css/image-gallery.css";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='/discountoption' element={<DiscountOption />} />
            <Route path='/shippingoption' element={<ShippingOption />} />
            <Route path='/paymentsuccess' element={<PaymentSuccess />} />
            <Route path='/paymentfailed' element={<PaymentFailed />} />
            <Route path="/forum" element={<ForumPage />}/>
            <Route path='/discount' element={<Discount />}/>
            <Route path='/profile' element={<UserProfile/>}/>
          </Route>
          <Route path='/dashboard/Shipcompany' element={<Shipcompany/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/useragreement" element={<UserAgreementPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

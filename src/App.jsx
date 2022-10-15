import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Home from "./components/Layout/Home";
import Products from "./components/Layout/Products";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";
import CartProvider from "./store/CartProvider";
import Footer from "./components/UI/Footer";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Profile from "./components/Layout/Profile";
import AuthContext from "./store/auth-context";
import Gallery from "./components/Layout/Gallery";
import ScrollToTop from '../src/components/UI/ScrollToTop'

function App() {
  const authCtx = useContext(AuthContext);

  const [userName, setUserName]  = useState('')

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="cart/checkout" element={!authCtx.isLoggedIn ? <Navigate to="/login" /> : <Checkout />} />
          <Route path="/gallery" element={<Gallery />} />
          {!authCtx.isLoggedIn && <Route path="login" element={<Login setUserName={setUserName} />} />}
          {!authCtx.isLoggedIn && <Route path="signup" element={<SignUp />} />}
          {authCtx.isLoggedIn && <Route path="profile" element={<Profile userName={userName} />} />}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

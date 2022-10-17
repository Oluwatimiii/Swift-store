import React, { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { ToastContainer } from "react-toastify";
import Gallery from "./components/Layout/Gallery";
import ScrollToTop from "../src/components/UI/ScrollToTop";

function App() {
  const authCtx = useContext(AuthContext);

  const [userName, setUserName] = useState("");

  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="cart/checkout"
          element={
            !authCtx.isLoggedIn ? <Navigate to="/login" /> : <Checkout />
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        {!authCtx.isLoggedIn && (
          <Route path="login" element={<Login setUserName={setUserName} />} />
        )}
        {!authCtx.isLoggedIn && <Route path="signup" element={<SignUp />} />}
        {authCtx.isLoggedIn && (
          <Route path="profile" element={<Profile userName={userName} />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </CartProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct' ;
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndContions from './pages/TermAndContions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/checkout';

function App() {
  return (
   <>
    <BrowserRouter >
      <Routes>
        <Route path ='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element = {<About />} />
          <Route path='contact' element = {<Contact />} />
          <Route path='product' element = {<OurStore />} />
          <Route path='/:id' element = {<SingleProduct />} />
          <Route path='blogs' element = {<Blog />} />
          <Route path='cart' element = {<Cart />} />
          <Route path='checkout' element = {<Checkout />} />
          <Route path='blog/:id' element = {<SingleBlog />} />
          <Route path='compare-product' element = {<CompareProduct/>} />
          <Route path='wishlist' element = {<Wishlist />} />
          <Route path='login' element = {<Login />} />
          <Route path='forgot-password' element = {<ForgotPassword />} />
          <Route path='signup' element = {<Signup />} />
          <Route path='private-policy' element = {<PrivacyPolicy />} />
          <Route path='refund-policy' element = {<RefundPolicy />} />
          <Route path='term-and-contions' element = {<TermAndContions />} />
          <Route path='shipping-policy' element = {<ShippingPolicy />} />

        
          

        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
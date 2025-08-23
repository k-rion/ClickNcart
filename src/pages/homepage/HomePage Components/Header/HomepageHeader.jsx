import React, { useState } from "react";
import RefreshableLink from "../../../../components/Global Components/RefreshableLink/RefreshableLink";

import './HomepageHeader.css'

function HomepageHeader({ cartCount, updateCart}) {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      
        const toggleMobileMenu = () => {
          setMobileMenuOpen(prev => !prev);
        };
      
  return (
    <nav className="nav">
        <div className="nav-container">
          <h1 className="logo">ClickNcart</h1>
  
          <div className="desktop-menu">
            <RefreshableLink to="/" className="home">Home</RefreshableLink>
            <RefreshableLink to="/men">Men</RefreshableLink>
            <RefreshableLink to="/women">Women</RefreshableLink>
            <RefreshableLink to="/shoes">Shoes</RefreshableLink>
            <RefreshableLink to="/about">About</RefreshableLink>
            <RefreshableLink to="/contact">Contact</RefreshableLink>
            <RefreshableLink to="/sale">Sale</RefreshableLink>
          </div>
  
          <div className="cart-mobile">
            <button onClick={updateCart} className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart-count">{cartCount}</span>
            </button>
  
            <button onClick={toggleMobileMenu} className="mobile-btn">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
  
        <div className={`mobile-menu ${mobileMenuOpen ? "" : "hidden"}`}>
            <RefreshableLink to="/" className="home">Home</RefreshableLink>
            <RefreshableLink to="/men">Men</RefreshableLink>
            <RefreshableLink to="/women">Women</RefreshableLink>
            <RefreshableLink to="/shoes">Shoes</RefreshableLink>
            <RefreshableLink to="/about">About</RefreshableLink>
            <RefreshableLink to="/contact">Contact</RefreshableLink>
            <RefreshableLink to="/sale">Sale</RefreshableLink>
        </div>
      </nav>
  )
}

export default HomepageHeader

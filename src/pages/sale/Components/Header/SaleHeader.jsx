import React, { useState } from "react";
import './SaleHeader.css'

import RefreshableLink from "../../../../components/Global Components/RefreshableLink/RefreshableLink";

function SaleHeader() {

     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
      const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
      };

  return (
    <div>
      <header>
            <nav className="nav">
                <div className="nav-container">
                    <h1 className="logo">ClickNcart</h1>

                    <div className="desktop-menu">
                    <RefreshableLink to="/">Home</RefreshableLink>
                    <RefreshableLink to="/men">Men</RefreshableLink>
                    <RefreshableLink to="/women">Women</RefreshableLink>
                    <RefreshableLink to="/shoes">Shoes</RefreshableLink>
                    <RefreshableLink to="/about">About</RefreshableLink>
                    <RefreshableLink to="/contact">Contact</RefreshableLink>
                    <RefreshableLink to="/sale" className="sale">Sales</RefreshableLink>
                    </div>

                    <div className="cart-mobile">
                    <button className="cart-btn">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="cart-count">{}</span>
                    </button>

                    <button onClick={toggleMobileMenu} className="mobile-btn">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    </div>
                </div>

                <div className={`mobile-menu ${mobileMenuOpen ? "" : "hidden"}`}>
                    <RefreshableLink to="/">Home</RefreshableLink>
                    <RefreshableLink to="/men">Men</RefreshableLink>
                    <RefreshableLink to="/women">Women</RefreshableLink>
                    <RefreshableLink to="/shoes">Shoes</RefreshableLink>
                    <RefreshableLink to="/about">About</RefreshableLink>
                    <RefreshableLink to="/contact">Contact</RefreshableLink>
                    <RefreshableLink to="/sale" className="sale">Sales</RefreshableLink>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default SaleHeader

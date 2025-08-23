import React from 'react'
import RefreshableLink from '../../../../components/Global Components/RefreshableLink/RefreshableLink'
import './HomepageFooter.css'

function HomepageFooter() {
  return (

    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-brand">
          <h2>ClickNcart</h2>
          <p>
            Premium shoes and lifestyle products <br />
            for the modern individual. Crafted with <br />
            passion, designed for life.
          </p>
          <div className="footer-socials">
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>

        {/* Shop Section */}
        <div className="footer-links">
          <ul>
            <h4>Shop</h4>
            <li><RefreshableLink to="/men">Men</RefreshableLink></li>
            <li><RefreshableLink to="/women">Women</RefreshableLink></li>
            <li><RefreshableLink to="/shoes">Sneakers</RefreshableLink></li>
            <li><RefreshableLink to="/accessories">Accessories</RefreshableLink></li>
            <li><RefreshableLink to="/newArrival">New Arrivals</RefreshableLink></li>
            <li><RefreshableLink to="/sale">Sales</RefreshableLink></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-links">
          <ul>
            <h4>Support</h4>
            <li><RefreshableLink to="/size-guide">Size Guide</RefreshableLink></li>
            <li><RefreshableLink to="/shipping-info">Shipping Info</RefreshableLink></li>
            <li><RefreshableLink to="/returns">Returns</RefreshableLink></li>
            <li><RefreshableLink to="/faq">FAQ</RefreshableLink></li>
            <li><RefreshableLink to="/contact">Contact Us</RefreshableLink></li>
            <li><RefreshableLink to="/track-order">Track Order</RefreshableLink></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-links">
          <ul>
            <h4>Company</h4>
            <li><RefreshableLink to="/about">About Us</RefreshableLink></li>
            <li><RefreshableLink to="/our-story">Our Story</RefreshableLink></li>
            <li><RefreshableLink to="/career">Careers</RefreshableLink></li>
            <li><RefreshableLink to="/press">Press</RefreshableLink></li>
            <li><RefreshableLink to="/sustainability">Sustainability</RefreshableLink></li>
            <li><RefreshableLink to="/privacy-policy">Privacy Policy</RefreshableLink></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear() }. All rights reserved. | Crafted with passion for premium footwear.
        </p>
      </div>
    </footer>
  )
}

export default HomepageFooter

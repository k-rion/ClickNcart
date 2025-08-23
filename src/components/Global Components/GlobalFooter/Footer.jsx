import React from 'react'
import "./Footer.css"

import RefreshableLink from "../RefreshableLink/RefreshableLink";


function Footer() {
  return (
    <div>
        {/* Footer */}
      <footer className="global-footer">
        <h2>ClickNcart</h2>
        <p>Premium shoes and lifestyle products for the modern individual</p>
        <div className="global-footer-links">
          <RefreshableLink to="/">Home</RefreshableLink>
          <RefreshableLink to="/products">Products</RefreshableLink>
          <RefreshableLink to="/about">About</RefreshableLink>
          <RefreshableLink to="/contact">Contact</RefreshableLink>
        </div>

        <p className='global-copy-right'>&copy; {new Date().getFullYear()}. All rights reserved</p>
      </footer>
    </div>
  )
}

export default Footer

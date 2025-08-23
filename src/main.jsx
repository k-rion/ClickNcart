import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import Salepage from './pages/sale/salepage.jsx'
import ProductPage from './pages/ProductPage/ProductPage.jsx'
import AboutPage from './pages/about/AboutPage.jsx'
import ContactPage from './pages/contact/ContactPage.jsx'
import HomePage from './pages/homepage/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Homepage Page*/}
        <Route path='/' element={<HomePage/>} />
        
        {/* About Page*/}
        <Route path='/about' element={<AboutPage/>} />

        {/* Contact Page */}
        <Route path='/contact' element={<ContactPage/>} />

        {/* Product Page */}
        <Route path='/products' element={<ProductPage/>} />

        {/* Sale Page */}
        <Route path='/sale' element={<Salepage/>} />

      </Routes>
    </Router>
  </StrictMode>,
)

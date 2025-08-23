import React from 'react'
import HomepageHeader from './HomePage Components/Header/HomepageHeader'
import HomepageFooter from './HomePage Components/Footer/HomepageFooter'
import './Homepage.css'
import RevealScroll from '../../components/ActiveScroll/RevealScroll'
import CategoryCard from './HomePage Components/CategoryCards/CategoryCard'
import FeaturedProducts from './HomePage Components/FeaturedProducts/FeaturedProducts'
import Spotlights from './HomePage Components/Spotlights/Spotlights'
import AutoSwiper from './HomePage Components/AutoSwiper/AutoSwiper'

function HomePage() {
  return (
    <div>
      <HomepageHeader/>

        {/* Hero Section */}
        <section className="hero">
            <div className="hero-grid">
               
               <RevealScroll animation='slideRight'>
                 {/* Left Content */}
                <div className="hero-content">
                    <h1>
                        Step Into <span className="highlight">Excellence</span>
                    </h1>
                    <p>
                        Discover premium footwear crafted with passion, designed for the modern lifestyle,
                        and built to last a lifetime.
                    </p>
                    <div className="buttons">
                        <button className="btn-primary">Shop Collection</button>
                        <button className="btn-outline">Our Story</button>
                    </div>

                    {/* Stats Section */}
                    <div className="hero-stats">
                        <div>
                        <h3>10K+</h3>
                        <p>Happy Customers</p>
                        </div>
                        <div>
                        <h3>50+</h3>
                        <p>Countries</p>
                        </div>
                        <div>
                        <h3>5★</h3>
                        <p>Average Rating</p>
                        </div>
                    </div>
                </div>
               </RevealScroll>

                <RevealScroll animation='slideLeft'>
                  {/* Right Image */}
                    <div className="hero-image">
                        <div className="hero-image-placeholder">
                            <i className="fa-solid fa-image"></i>
                            <p>Premium Lifestyle Image</p>
                        </div>
                    </div>
                </RevealScroll>
            </div>
        </section>


      {/* Category Section */}
      <section className="categories">
        <RevealScroll animation='fadeUp'>
        <CategoryCard/>
        </RevealScroll>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <FeaturedProducts/>
      </section>

      {/* Spotlights Section */}
      <section className="spotlights">
        <Spotlights/>
      </section>

      {/* AutoSwiper Section */}
      <section className="autoswiper">
        <AutoSwiper/>
      </section>

      <section className='discount-signup'>
        <RevealScroll animation='fadeUp'>
          <div className="discount-wrapper">
              <h2 className="discount-title">Limited Time offer</h2>
              <p className="discount-subtitle">Get 20% off your first order when you sign up for our newsletter</p>

            <form className="discount-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="discount-input"
                required 
              />
              <button type="submit" className="discount-btn">
                Get 20% Off
              </button>
          </form>

          <p className='discount-terms'>*Valid for new customers only. Terms and conditions apply.</p>
          </div>
        </RevealScroll>
      </section>

      <section className='subscribe'>
        <RevealScroll animation='fadeUp'>
        <div className="subscribe-wrapper">
            <h2 className="subscribe-title">Stay in the Loop</h2>
            <p className="subscribe-subtitle">Be the first to know about new arrivals, exclusive offers, and behind-the-scenes content from ClickNcart</p>

          <form className="subscribe-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="subscribe-input"
              required 
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
        </form>

        <p className='subscribe-terms'>We respect your privacy. Unsubscribe at any time.</p>

        </div>
        </RevealScroll>
      </section>

      {/* Footer */}
      <HomepageFooter/>
    </div>
  )
}

export default HomePage

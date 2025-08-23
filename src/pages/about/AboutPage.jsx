import React from 'react'
import './AboutPage.css'
import AboutHeader from './Components/Header/AboutHeader'
import Footer from "../../components/Global Components/GlobalFooter/Footer";
import Testimonial from './Components/Testimonial/Testimonial'
import RevealScroll from '../../components/ActiveScroll/RevealScroll'

function AboutPage() {

  return (
    <div>

    <AboutHeader/>

    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <RevealScroll animation='fadeUp'>
        <div className="hero-grid">
          <div className="hero-portrait">
            <div className="portrait-box">
              <svg className="portrait-icon" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4
                  -4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 
                  0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
          <div className="hero-content">
            <h1>My Story</h1>
            <p>
              Hi, I'm Kurt Rion, the founder of STRIDE. My passion for exceptional
              footwear and timeless design drives everything we create.
            </p>
            <p>
              After years in the fashion industry, I realized there was a gap for
              premium, sustainable shoes that don't compromise on style or comfort.
              STRIDE was born from this vision – to craft footwear that tells a
              story and stands the test of time.
            </p>
          </div>
        </div>
        </RevealScroll>
      </section>

      {/* Journey Section */}
      <section className="journey">
        <RevealScroll animation='fadeUp'>
        <div className="text-center">
          <h2>My Journey</h2>
          <p>From a small workshop to a global brand, here's how STRIDE came to life</p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2018</div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>The Beginning</h3>
              <p>Started with a simple idea: create shoes that combine Italian craftsmanship with modern design sensibilities.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>First Collection</h3>
              <p>Launched our debut collection of handcrafted leather sneakers, focusing on quality over quantity.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2022</div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Global Expansion</h3>
              <p>Expanded internationally while maintaining our commitment to sustainable practices and ethical manufacturing.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Today</h3>
              <p>Continuing to innovate with new materials and designs while staying true to our core values of quality and sustainability.</p>
            </div>
          </div>
        </div>
        </RevealScroll>
      </section>

      {/* Values Section */}
      <section className="values">
          <RevealScroll animation='fadeUp'>
        <div className="text-center">
          <h2>Our Values</h2>
          <p>The principles that guide everything we do at STRIDE</p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-card-icon">
                <i className="fa-classic fa-regular fa-circle-check"></i>
            </div>
            <h3>Quality First</h3>
            <p>Every pair is meticulously crafted using premium materials and traditional techniques passed down through generations.</p>
          </div>
          <div className="value-card">
            <div className="value-card-icon">
                <i className="fa-classic fa-regular fa-heart"></i>
             </div>
            <h3>Sustainability</h3>
            <p>We're committed to responsible sourcing, eco-friendly materials, and reducing our environmental footprint.</p>
          </div>
          <div className="value-card">
             <div className="value-card-icon">
                <i className="fa-solid fa-users"></i>
             </div>
            <h3>Community</h3>
            <p>Building lasting relationships with our customers, artisans, and partners based on trust and mutual respect.</p>
          </div>
        </div>
        </RevealScroll>
      </section>

      {/* Fun Facts Section */}
      <section className="fun-facts">
        <RevealScroll animation='fadeUp'>        <div className="text-center">
          <h2>Fun Facts</h2>
          <p>A few things you might not know about me and STRIDE</p>
        </div>
        <div className="facts-grid">
          <div className="fact-card">☕ Coffee Enthusiast
            <div className="funfact-card-desc">
                <p>I start every day with a perfect espresso and some of my best design ideas come during my morning coffee ritual.</p>
            </div>
          </div>
          <div className="fact-card">👟 Shoe Collection
            <div className="funfact-card-desc">
                <p>I own over 200 pairs of shoes from around the world – each one teaches me something new about design and craftsmanship.</p>
            </div>
          </div>
          <div className="fact-card">🎨 Art Background
            <div className="funfact-card-desc">
                <p>Before shoes, I studied fine arts and still sketch every design by hand before bringing it to life.</p>
            </div>
          </div>
          <div className="fact-card">🌱 Plant Parent
            <div className="funfact-card-desc">
                 <p>My studio is filled with over 50 plants – they inspire my color palettes and remind me to stay grounded.</p>
            </div>  
          </div>
        </div>
        </RevealScroll>

      </section>

      {/* Mission Quote */}
      <section className="mission">
        <RevealScroll animation='fadeUp'>
        <blockquote>
          "Great shoes don't just complete an outfit – they tell a story, boost
          confidence, and carry you through life's adventures. That's what we
          create at ClickNcart."
        </blockquote>
        </RevealScroll>
        <cite>— Kurt Rion, Founder</cite>
      </section>

      {/* Testimonials Section (Static) */}
      <Testimonial/>


      {/* bottom */}
      <section className='bottom-section'>
        <RevealScroll animation='fadeUp'>
          <h2>Ready to Step Into Something Special?</h2>
        <p>Discover our carefully curated collection of premium shoes and lifestyle products, each piece crafted with passion and purpose.</p>
        </RevealScroll>
        
        <div className="buttons">
          <button className='btn-1'>Explore the Collection</button>
          <button className='btn-2'>Contact Me</button>
        </div>
      </section>

    </div>

    {/* Footer */}
    <Footer/>

    </div>
  )
}

export default AboutPage

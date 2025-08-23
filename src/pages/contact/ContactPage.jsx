import React from "react";
import "./ContactPage.css";

import ContactHeader from "./Contact Components/Header/ContactHeader";
import Footer from "../../components/Global Components/GlobalFooter/Footer";
import RevealScroll from '../../components/ActiveScroll/RevealScroll'

function ContactPage() {


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const fullName = data.get("fullName");
    const email = data.get("email");
    const message = data.get("message");

    if (!fullName || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    document.getElementById("success-message").classList.remove("hidden");
    form.reset();

    setTimeout(() => {
      document.getElementById("success-message").classList.add("hidden");
    }, 5000);
  };

  return (
    <div>

      <ContactHeader/>

      <div className="contact-page">
        {/* Hero Section */}
        <section className="hero-section">
          <RevealScroll animation="fadeUp">
            <h1>Get In Touch</h1>
            <p>
              Have a question about our products or need assistance? We're here to help and would love to hear from you.
            </p>
          </RevealScroll>
        </section>

        {/* Main Contact Section */}
        <section className="contact-main">
          <div className="contact-grid">
            {/* Contact Form */}
            <RevealScroll animation="fadeUp">
              <div className="contact-form-container">
                <h2>Send us a message</h2>
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="floating-label">
                    <input type="text" name="fullName" placeholder=" " required />
                    <label>Full Name</label>
                  </div>

                  <div className="floating-label">
                    <input type="email" name="email" placeholder=" " required />
                    <label>Email Address</label>
                  </div>

                  <div className="floating-label">
                    <input type="text" name="subject" placeholder=" " />
                    <label>Subject (Optional)</label>
                  </div>

                  <div className="floating-label">
                    <textarea name="message" rows="5" placeholder=" " required></textarea>
                    <label>Your Message</label>
                  </div>

                  <button type="submit" className="send-button">
                    Send Message
                  </button>
                </form>

                <div id="success-message" className="hidden success-message">
                  <p>✅ Thank you! Your message has been sent successfully.</p>
                </div>

                <div className="trust-badge">
                  <span><i className="fa-classic fa-regular fa-clock"></i> We typically reply within 24 hours</span>
                </div>
              </div>
            </RevealScroll>

            {/* Contact Information */}
            <div className="contact-info">
              <RevealScroll animation="fadeUp">
                <div className="contact-card">
                  <h3>Contact Information</h3>
                  <div className="contact-container">
                      <div className="contact-icon">
                          <i className="fa-classic fa-solid fa-envelope"></i>
                      </div>
                      <div className="contact-details">
                          <p className="email">Email</p>
                          <p className="email-acc">aquino.rionkurt@gmail.com</p>
                      </div>
                  </div>

                  <div className="contact-container">
                      <div className="contact-icon">
                          <i className="fa-classic fa-solid fa-phone"></i>
                      </div>
                      <div className="contact-details">
                          <p className="email">Phone</p>
                          <p className="email-acc">+63 981 799 3839</p>
                      </div>
                  </div>

                  <div className="contact-container">
                      <div className="contact-icon">
                          <i className="fa-classic fa-solid fa-location-dot"></i>
                      </div>
                      <div className="contact-details">
                          <p className="email">Address</p>
                          <p className="email-acc">123 Metro Manila <br />Philippines</p>
                      </div>
                  </div>
                  
                </div>

                <div className="contact-card">
                  <h3>Customer Service Hours</h3>
                  <div className="service-hour-column">
                      <p>Mon-Fri:</p>
                      <p className="time">9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="service-hour-column">
                      <p>Saturday:</p>
                      <p className="time">10:00 AM - 4:00 PM</p>
                  </div>
                  <div className="service-hour-column">
                      <p>Sunday:</p>
                      <p className="time">Closed</p>
                  </div>
                  
                  <div className="contact-highlights">
                      <p><span>Holiday Hours:</span> We may have modified hours during holidays. Check our social media for updates.</p>
                  </div>

                </div>

                <div className="contact-card">
                  <h3 className="social-title">Follow Me</h3>
                  <div className="social-icons">
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                  </div>
                  <p className="social-bot-desc">Follow us for the latest updates, behind-the-scenes content, and exclusive offers!</p>
                </div>
              </RevealScroll>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <RevealScroll animation="fadeUp">
            <h2>Visit Our Store</h2>
            <p>Come experience our products in person at our flagship location</p>
          </RevealScroll>

          <div className="map-placeholder">
            <div className="inside-placeholder">
                <i className="fa-classic fa-solid fa-location-dot"></i>
                <p>Interactive Map</p>
                <p>123 Metro Manila, Philippines</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer/>
      
    </div>
  );
}

export default ContactPage;

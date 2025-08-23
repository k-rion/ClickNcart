import React, { useState } from "react";
import "./salepage.css";

import Footer from "../../components/Global Components/GlobalFooter/Footer";
import SaleHeader from "./Components/Header/SaleHeader";

function Salepage() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { name: "Classic Leather Sneakers", price: 129.99 },
    { name: "Premium Running Shoes", price: 159.99 },
    { name: "Designer Boots", price: 199.99 },
    { name: "Casual Loafers", price: 89.99 },
  ];

  const addToCart = (productName) => {
    setCartCount(prev => prev + 1);
    showNotification(`${productName} added to cart!`);
  };

  const showNotification = (message) => {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add("show"), 100);
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
  };

  const customerReviews = [
    {
      name: "Sarah M.",
      text: "Amazing quality and comfort! These shoes have become my daily go-to. The customer service was exceptional too.",
      rating: 5,
    },
    {
      name: "John D.",
      text: "Fast shipping, perfect fit, and the style is exactly what I was looking for. Will definitely order again!",
      rating: 4,
    },
    {
      name: "Alice P.",
      text: "Average experience, not too bad but could improve.",
      rating: 3,
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starNumber = index + 1;
      if (rating >= starNumber) {
        // full star
        return <i key={index} className="fa-solid fa-star" style={{ color: "gold" }}></i>;
      } else if (rating >= starNumber - 0.5) {
        // half star
        return <i key={index} className="fa-solid fa-star-half-stroke" style={{ color: "gold" }}></i>;
      } else {
        // empty star
        return <i key={index} className="fa-regular fa-star" style={{ color: "gold" }}></i>;
      }
    });
  };

  return (
    <div className="salepage">
      <SaleHeader cartCount={cartCount} updateCart={() => showNotification(`You have ${cartCount} item(s) in your cart`)} />
      
      {/* Hero Section */}
      <section className="hero">
        <h2>New Arrivals</h2>
        <p>Discover our latest collection of premium shoes and lifestyle products crafted for the modern individual</p>
        <button className="btn-primary">Shop Now</button>
      </section>

      <section className="services">
        <div className="service-container">
            <div className="service-display">
                <div className="service-icon">
                    <i className="fas fa-truck"></i>
                </div>
                <div className="service-txts">
                   <h2>Free Shipping</h2>
                   <p>On all orders over $50</p>
                </div>

            </div>

            <div className="thiry-day-return">
                <div className="service-display">
                  <div className="service-icon">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <div className="service-txts">
                    <h2>30 Day Return</h2>
                    <p>Easy returns within 30 days of purchase</p>
                  </div>
                </div>
            </div>

            <div className="customer-ratings">
                <div className="service-display">
                  <div className="service-icon">
                    <i className="fas fa-star"></i>
                  </div>
              
                <div className="service-txts">
                      <h2>5.0 Customer Rating</h2>
                <p>Based on 100+ customer reviews</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Products */}
      <section className="products">
        {products.map((product, idx) => (
          <div key={idx} className="product-card">
            <div className="product-image">Image</div>
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product.name)}>Add to Cart</button>
          </div>
        ))}
      </section>

      <section className="customer-says">
        <h2>What Our Customers Say</h2>
        <div className="customer-container">
          {customerReviews.map((review, index) => (
            <div className="customer-card" key={index}>
              <div className="stars">{renderStars(review.rating)}</div>
              <p className="review-text">"{review.text}"</p>
              <h3 className="reviewer-name">{review.name}</h3>
            </div>
          ))}
        </div>
      </section>


      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Salepage;

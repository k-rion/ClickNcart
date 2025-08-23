import React, { useState } from "react";
import "./ProductPage.css"

import Header from "../../components/Global Components/GlobalHeader/Header";
import ProductRecommendation from "../../components/ProductRecommendation/ProductRecommendation";


function ProductPage() {

  const [cartCount, setCartCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const selectSize = (size) => setSelectedSize(size);
  const selectColor = (color) => setSelectedColor(color);

  const addToCart = () => {
    if (!selectedSize) return alert("Please select a size");
    if (!selectedColor) return alert("Please select a color");

    setCartCount(cartCount + 1);
    alert("Classic Leather Sneakers added to cart!");
  };

  const buyNow = () => {
    if (!selectedSize) return alert("Please select a size");
    if (!selectedColor) return alert("Please select a color");

    alert("Redirecting to checkout...");
  };

  const productRenderStars = (rating) => {
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

  const ProductCustomerReviews = [
    {
      customerName: "Sarah M.",
      customerRating: 5,
      customerComment: "Absolutely love these sneakers! The quality is outstanding and they're incredibly comfortable. Perfect for everyday wear.",
      customerPurchase: "Verified Purchase • 2 weeks ago",
    },
    {
      customerName: "Mike R.",
      customerRating: 5,
      customerComment: "Great fit and style. The leather feels premium and the craftsmanship is excellent. Highly recommended!",
      customerPurchase: "Verified Purchase • 1 month ago",
    },
    {
      customerName: "Anna L.",
      customerRating: 4.5,
      customerComment: "Beautiful sneakers with great attention to detail. Sizing runs slightly large, so consider ordering half a size down.",
      customerPurchase: "Verified Purchase • 3 weeks ago",
    },

  ];


  return (
    <div className="product-page">
      
        {/* Header */}
        <Header/>

        {/* Breadcrumb */}
        <div className="breadcrumb">
            Home / Men / Shoes / <span>Classic Leather Sneakers</span>
        </div>

        {/* Product Section */}
      <div className="product-section">
        {/* Image Section */}
        <div className="product-images">
          <div className="main-image zoom-container">
            <div className="zoom-image">[Main Image Placeholder]</div>
          </div>
          <div className="thumbnail-list">
            <div className="thumbnail">Thumb 1</div>
            <div className="thumbnail">Thumb 2</div>
            <div className="thumbnail">Thumb 3</div>
            <div className="thumbnail">Thumb 4</div>
          </div>
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1 className="product-title">Classic Leather Sneakers</h1>
          <div className="rating-stock">
            ★★★★★ <span>(127 reviews)</span>
            <span className="in-stock">In Stock</span>
          </div>
          <p className="price">₱6,499.00</p>

          {/* Colors */}
          <h3>Color</h3>
          <div className="color-options">
            {["black", "white", "navy", "brown"].map((color) => (
              <button
                key={color}
                className={`color-swatch ${color} ${
                  selectedColor === color ? "active" : ""
                }`}
                onClick={() => selectColor(color)}
              ></button>
            ))}
          </div>

          {/* Sizes */}
          <h3>Size</h3>
          <div className="size-options">
            {[7, 8, 9, 10, 11].map((size) => (
              <button
                key={size}
                className={`size-option ${
                  selectedSize === size ? "active" : ""
                }`}
                onClick={() => selectSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <button className="btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
          <button className="btn-secondary" onClick={buyNow}>
            Buy Now
          </button>

              <div className="other-details">
                <div className="details">
                  <i className="fa-solid fa-truck"></i>
                  <p>Free shipping on orders over ₱3,000</p>
                </div>
                <div className="details">
                  <i className="fas fa-retweet"></i>
                    <p>30-day easy returns</p>
                </div>
                <div className="details">
                  <i className="fa-solid fa-circle-check"></i>
                  <p>Verified authentic products</p>
                </div>
              </div>
        </div>
      </div>
      

        <div className="product-desc">
          <div className="product-desc-container">
              <div className="product-desc-title">
                <h2>Product Description</h2>
              </div>

              <div className="product-desc-subtitle">
              <p>Crafted from premium Italian leather, these classic sneakers combine timeless style with modern comfort. The minimalist design features clean lines and subtle branding, making them perfect for both casual and semi-formal occasions.</p>
              <br />
              <p>Each pair is handcrafted by skilled artisans using traditional techniques, ensuring exceptional quality and durability. The cushioned insole provides all-day comfort, while the rubber outsole offers excellent grip and flexibility.</p>
              </div>
          </div>

          <div className="features-details">
            <div className="features-title">
              <h2>Features:</h2>
            </div>
            <div className="features-lists">
              <ul>
                <li>Premium Italian leather upper</li>
                <li>Cushioned memory foam insole</li>
                <li>Breathable cotton lining</li>
                <li>Durable rubber outsole</li>
                <li>Handcrafted construction</li>
                <li>Available in multiple colors</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="prdct-rev-section">
            <div className="prdct-review-title">
                <h2>Customer Reviews</h2>
            </div>

            <div className="prdct-container">
              <div className="review-rating">
                {ProductCustomerReviews.map((review, index) => (
                  <div className="customer-profile-container" key={index}>
                    <div className="customer-profile">
                        <div className="profile-icon">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div className="profile-info">
                          <p>{review.customerName}</p>
                          <div className="stars">{productRenderStars(review.customerRating)}</div>
                          <p className="cstmr-comment">{review.customerComment}</p>
                          <p className="cstmr-purchase">{review.customerPurchase}</p>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>

        <ProductRecommendation/>

    </div>
  )
}

export default ProductPage

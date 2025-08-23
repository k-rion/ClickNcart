import React from 'react';
import "./ProductRecommendation.css";

function ProductRecommendation() {
    
    const prdctRecoStars = (rating) => {
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

  const prdctReco = [
    {
        prdctName: "Premium Running Shoes",
        prdctImg: <i className="fa-solid fa-circle-check"></i>,
        prdctRate: 4.1,
        prdctPrice: "₱7,999.00"
    },
    {
        prdctName: "Designer Boots",
        prdctImg: <i className="fa-classic fa-solid fa-star"></i>,
        prdctRate: 5,
        prdctPrice: "₱9,999.00"
    },
    {
        prdctName: "Casual Loafers",
        prdctImg: <i className="fa-classic fa-solid fa-user"></i>,
        prdctRate: 4.5,
        prdctPrice: "₱4,499.00"
    },
    {
        prdctName: "Leather Bag",
        prdctImg: <i className="fa-classic fa-solid fa-bag-shopping"></i>,
        prdctRate: 5,
        prdctPrice: "₱5,999.00"
    },
  ];

  return (
    <div className="prdct-reco-section">
      <h2>You May Also Like</h2>

      <div className="prdct-reco-items">
        {prdctReco.map((reco, index) => (
            <div className="prdct-reco-container" key={index}>
                <div className="prdct-reco-img">
                    {reco.prdctImg}
                </div>
                <div className="prdct-reco-info">
                    <h3>{reco.prdctName}</h3>
                    <div className="prdct-reco-rating">{prdctRecoStars(reco.prdctRate)}</div>
                    <p className="prdct-reco-price">{reco.prdctPrice}</p>
                </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default ProductRecommendation;

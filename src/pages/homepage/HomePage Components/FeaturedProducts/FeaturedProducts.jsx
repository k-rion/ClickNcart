import React from 'react'
import './FeaturedProducts.css'
import RevealScroll from '../../../../components/ActiveScroll/RevealScroll';

function FeaturedProducts() {
    const featuredPrdct = [
        {
            img: <i className="fa-solid fa-image"></i>,
            prdctName: "Urban Sneaker",
            prdctDesc: "Modern comfort for everyday wear",
            prdctPrice: "₱6,499",
            prdctRating: 4.5,
        },
        {
            img: <i className="fa-solid fa-image"></i>,
            prdctName: "Classic Oxford",
            prdctDesc: "Timeless elegance for formal occasions",
            prdctPrice: "₱8,999",
            prdctRating: 5,
        },
        {
            img: <i className="fa-solid fa-image"></i>,
            prdctName: "Casual Loafer",
            prdctDesc: "Relaxed luxury for weekend style",
            prdctPrice: "₱5, 997",
            prdctRating: 4.2,
        },
        {
            img: <i className="fa-solid fa-image"></i>,
            prdctName: "Elegant Heel",
            prdctDesc: "Sophisticated style with comfort",
            prdctPrice: "₱7, 299",
            prdctRating: 4.5,
        },
    ];

    const featuredRatings = (rating) => {
        return Array.from({ length: 5 }, (_, index) => {
            const starNumber = index + 1;
            if (rating >= starNumber) {
                return <i key={index} className="fa-solid fa-star" style={{ color: "#f5a623" }}></i>;
            } else if (rating >= starNumber - 0.5) {
                return <i key={index} className="fa-solid fa-star-half-stroke" style={{ color: "#f5a623" }}></i>;
            } else {
                return <i key={index} className="fa-regular fa-star" style={{ color: "#f5a623" }}></i>;
            }
        });
    };

    return (
        <div className="featured-wrapper">
            <RevealScroll animation='fadeUp'>
            <h2 className="featured-title">Featured Products</h2>
            <p className="featured-subtitle">
                Handpicked favorites that showcase our commitment to quality and style
            </p>
            </RevealScroll>

            <div className="featured-container">
                {featuredPrdct.map((featuredPrdct, index) => (
                    <div className="featured-card" key={index}>
                        <div className="featured-img">{featuredPrdct.img}</div>
                        <div className="featured-info">
                            <div className="featured-name">{featuredPrdct.prdctName}</div>
                            <div className="featured-desc">{featuredPrdct.prdctDesc}</div>
                            <div className="priceAndRating">
                                <div className="featured-price">{featuredPrdct.prdctPrice}</div>
                                <div className="featured-rating">{featuredRatings(featuredPrdct.prdctRating)}</div>
                            </div>
                            <div className="quickview-btn">
                                <button>Quick View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts

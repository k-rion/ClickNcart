import React from 'react'
import './CategoryCard.css'

function CategoryCard() {

    const categories = [
        {
            icon: <i className="fa-solid fa-user"></i>,
            title: "Men's Collection",
            desc: "Premium shoes for the modern gentleman",
            link: "Shop Now →"
        },
        {
            icon: <i className="fa-solid fa-bag-shopping"></i>,
            title: "Women's Collection",
            desc: "Elegant designs for every occasion",
            link: "Shop Now →"
        },
        {
            icon: <i className="fa-solid fa-bolt"></i>,
            title: "Sneakers",
            desc: "Comfort meets style in every step",
            link: "Shop Now →"
        },
        {   
            icon: <i className="fa-solid fa-star"></i>,
            title: "Accessories",
            desc: "Complete your look with premium accessories",
            link: "Shop Now →"
        },
    ];

  return (
    <div className="categories-wrapper">
        <h2 className="categories-title">Shop by Category</h2>
        <p className="categories-subtitle">
            Explore our carefully curated collections designed for every occasion and lifestyle
        </p>
        
        <div className="categories-container">
            <div className="category-grid">
                {categories.map((cat, index) => (
                    <div className="category-card" key={index}>
                        <div className="cat-icon">{cat.icon}</div>
                        <div className="cat-title">{cat.title}</div>
                        <div className="cat-desc">{cat.desc}</div>
                        <div className="cat-link">{cat.link}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CategoryCard

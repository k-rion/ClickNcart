import React from 'react'
import './Spotlights.css'
import RevealScroll from '../../../../components/ActiveScroll/RevealScroll';

function Spotlights() {

    const newArrival = [
        {
            pdrctImg: <i className="fa-solid fa-image"></i>,
            prdctName: "Premium Boot",
            prdctDesc: "Handcrafted leather boot",
            prdctPrice: "₱9,999",
            prdctTag: "New"
        },
        {
            pdrctImg: <i className="fa-solid fa-image"></i>,
            prdctName: "Sport Runner",
            prdctDesc: "High-performance athletic shoe",
            prdctPrice: "₱7,499",
            prdctTag: "New"
        },
        {
            pdrctImg: <i className="fa-solid fa-image"></i>,
            prdctName: "Designer Flat",
            prdctDesc: "Minimalist everyday comfort",
            prdctPrice: "₱4,999",
            prdctTag: "New"
        }
    ];

    const bestSellers = [
        {
            pdrctImg: <i className="fa-solid fa-image"></i>,
            prdctName: "Classic Oxford",
            prdctDesc: "Timeless formal shoe",
            prdctPrice: "₱8,999",
            prdctTag: "Sale"
        },
        {
            pdrctImg: <i className="fa-solid fa-image"></i>,
            prdctName: "Urban Sneaker",
            prdctDesc: "Modern street style",
            prdctPrice: "₱6,499",
            prdctTag: "Sale"
        },
        {
            pdrctImg: <i className="fa-solid fa-image"></i>,
            prdctName: "Elegant Heel",
            prdctDesc: "Sophisticated evening wear",
            prdctPrice: "₱7,299",
            prdctTag: "Sale"
        }
    ];


  return (
    <div className='spotlight-wrapper'>
        <div className="spotlight-main-divisions">
        <div className="spotlight-grid">
            <RevealScroll animation='fadeUp'>
            <h2 className="spotlight-title">New Arrivals</h2>
            {newArrival.map((prdct, index) => (
                <div className="spotlight-container" key={index}>
                    <div className="spotlight-card">
                        <div className="spot-division">
                            <div className="spot-img-background">
                                <div className="spotlightImg">{prdct.pdrctImg}</div>
                            </div>

                            <div className="text-flex">
                                <div className="spot-texts">
                                  <div className="spot-prdct-name">{prdct.prdctName}</div>
                                  <div className="spot-prdct-desc">{prdct.prdctDesc}</div>
                                  <div className="spot-prdct-price">{prdct.prdctPrice}</div>
                                </div>

                                <div className={`spot-prdct-tag ${prdct.prdctTag.toLowerCase()}`}>
                                    {prdct.prdctTag}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </RevealScroll>
        </div>

        <div className="spotlight-grid">
            <RevealScroll animation='fadeUp'>
            <h2 className="spotlight-title">Best Sellers</h2>
            {bestSellers.map((prdct, index) => (
                <div className="spotlight-container" key={index}>
                    <div className="spotlight-card">
                        <div className="spot-division">
                            <div className="spot-img-background">
                                <div className="spotlightImg">{prdct.pdrctImg}</div>
                            </div>

                            <div className="text-flex">
                                <div className="spot-texts">
                                  <div className="spot-prdct-name">{prdct.prdctName}</div>
                                  <div className="spot-prdct-desc">{prdct.prdctDesc}</div>
                                  <div className="spot-prdct-price">{prdct.prdctPrice}</div>
                                </div>

                                <div className={`spot-prdct-tag ${prdct.prdctTag.toLowerCase()}`}>
                                    {prdct.prdctTag}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </RevealScroll>
        </div>
        </div>
    </div>
  )
}

export default Spotlights

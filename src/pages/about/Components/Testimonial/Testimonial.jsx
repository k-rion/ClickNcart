import React from 'react'
import "./Testimonial.css"

function Testimonial() {

    const testTimonial = [
        {
            testName: "Sarah Martinez",
            testDescription: "Alex's attention to detail is incredible. Every pair of STRIDE shoes I own feels like it was made just for me.",
            testIcon: "SM",
            testRating: 4.5,
            testJob: "Architech",
        },
        {
            testName: "Micheal Chen",
            testDescription: "The quality and craftsmanship are unmatched. These aren't just shoes – they're works of art.",
            testIcon: "MC",
            testRating: 5,
            testJob: "Entrepreneur",
        },
        {
            testName: "Emma Thompson",
            testDescription: "ClickNcart has completely changed how I think about footwear. Comfort, style, and sustainability all in one.",
            testIcon: "EM",
            testRating: 4.5,
            testJob: "Artist",
        },
    ];

    const testStars = (rating) => {
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
    <div>
      <section className="testimonials">
        <div className="text-center">
          <h2>What People Say</h2>
          <p>Hear from our amazing community</p>
        </div>
         
         <div className="testimonials-container">
         {testTimonial.map((test, index) => (
        <div className="testimonial-grid" key={index}>
          <div className="testimonial-card">
            <div className="testimonial-stars">{testStars(test.testRating)}</div>
            <p className='test-description'>"{test.testDescription}"</p>
            <div className="test-profile">
                <p className='C-profile'>{test.testIcon}</p>
                <p className='test-name'>{test.testName} <span>{test.testJob}</span></p>
            </div>
          </div>
        </div>
         ))}
        </div>
      </section>
    </div>
  )
}

export default Testimonial

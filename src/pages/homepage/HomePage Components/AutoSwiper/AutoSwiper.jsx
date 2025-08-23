import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./AutoSwiper.css"; 
import RevealScroll from "../../../../components/ActiveScroll/RevealScroll";

export default function AutoSwiper() {
const sliderReview = [
 {
   tesRating: 5,
   testDesc: "The quality is absolutely incredible. These shoes have become my go-to for every important meeting and event.",
   testAuthor: "Sarah Martinez",
   testRole: "Business Executive"
 },
 {
   tesRating: 4.5,
   testDesc: "I've never experienced comfort like this. Perfect for long days on my feet, and they still look amazing after months of wear.",
   testAuthor: "Michael Chen",
   testRole: "Healthcare Professional"
 },
 {
   tesRating: 4.6,
   testDesc: "STRIDE has completely changed my perspective on footwear. The attention to detail and craftsmanship is unmatched.",
   testAuthor: "Emma Thompson",
   testRole: "Fashion Designer"
 },
];

const testRatings = (rating) => {
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

const getAvatarColor = (index) => {
  return avatarColors[index % avatarColors.length];
};

const avatarColors = [
  "#F44336", // red
  "#E91E63", // pink
  "#9C27B0", // purple
  "#3F51B5", // indigo
  "#2196F3", // blue
  "#009688", // teal
  "#4CAF50", // green
  "#FF9800", // orange
  "#795548", // brown
];

return (
 <div className="swiper-container">
  <RevealScroll animation="fadeUp">
   <h2 className="swiper-title">What Our Customers Say</h2>
   <p className="swiper-subtitle">Real stories from people who love STRIDE</p>
   </RevealScroll>

   <Swiper
     modules={[Autoplay, Pagination]}
     spaceBetween={30}
     slidesPerView={1}
     loop={true}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
     }}
     pagination={{ clickable: true }}
   >
     {sliderReview.map((tes, index) => (
         <SwiperSlide key={index}>
    <div className="testimonial-card">
      <p className="testimonial-rating">{testRatings(tes.tesRating)}</p>
      <p className="testimonial-desc">"{tes.testDesc}"</p>

        <div className="tes-profile">
            <div className="testimonial-avatar" style={{ backgroundColor: getAvatarColor(index) }}>
                {tes.testAuthor.charAt(0)}
            </div>

            <div className="test-profile-info">
                <h4 className="testimonial-author">{tes.testAuthor}</h4>
                <p className="testimonial-role">{tes.testRole}</p>
            </div>

        </div>
    </div>
  </SwiperSlide>
     ))}
   </Swiper>
 </div>
);
}
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const FifthSection = () => {
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get("http://localhost:4000/reviews/getReview");
        const data = response.data.data;
        setReviews(data || []); // Ensure reviews is always an array
      } catch (error) {
        console.log("Something went wrong while getting reviews", error);
      }
    };
    getReviews();
  }, []);

  const prevReview = () => {
    setCurrentReview((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const nextReview = () => {
    setCurrentReview((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-[#F5F5F5] p-6 sm:p-12 flex items-center justify-center">
      <button 
        className="text-xl sm:text-2xl mx-2 sm:mx-4 text-gray-600 hover:text-gray-800"
        onClick={prevReview}
      >
        <FaChevronLeft />
      </button>

      {reviews.length > 0 ? (
        <div className="w-[90%] sm:w-[400px] p-6 sm:p-8 rounded-xl bg-white shadow-2xl flex flex-col items-center justify-center text-center gap-6">
          <p className="font-semibold text-xl sm:text-2xl capitalize">{reviews[currentReview]?.name}</p>
          <p className="font-normal text-sm sm:text-base leading-relaxed">
            {reviews[currentReview]?.comment}
          </p>
          <div className="flex text-sm sm:text-base font-semibold">{reviews[currentReview]?.rating} ★</div>
        </div>
      ) : (
        <p className="text-lg sm:text-xl font-semibold text-gray-600">Loading reviews...</p>
      )}

      <button 
        className="text-xl sm:text-2xl mx-2 sm:mx-4 text-gray-600 hover:text-gray-800"
        onClick={nextReview}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default FifthSection;

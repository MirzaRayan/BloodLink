import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ReviewForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:4000/reviews/sendReview',data)
      console.log(response);
      
     } catch (error) {
      console.log('something went wrong while posting review',error);
     }
  
  };
   



  return (
    <div className="flex justify-center items-center py-[7%] bg-gray-100 border">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-[80%]">
        <h2 className="text-xl font-bold text-[#FF0000] mb-6">
          Please tell us about your experience
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className={`w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              placeholder="Your comment"
              {...register("comment", { required: "Message is required" })}
              className={`w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.message ? 'border-red-500' : ''}`}
              rows="3"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Rating Field */}
          <div>
            <input
              type="number"
              placeholder="Rate out of 5 (poor-good)"
              {...register("rating", {
                required: "Rating is required",
                min: { value: 1, message: "Minimum rating is 1" },
                max: { value: 5, message: "Maximum rating is 5" },
              })}
              className={`w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.rating ? 'border-red-500' : ''}`}
            />
            {errors.rating && (
              <p className="text-[#FF0000] text-sm mt-1">{errors.rating.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[12vw] bg-red-500 border text-white p-3 rounded-lg font-bold hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;

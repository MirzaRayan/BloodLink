import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ContactDonor = () => {
const location = useLocation();
const donorEmail = location.state?.donorEmail
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const onSubmit = async (data) => {
    try {
        
      console.log(donorEmail);
        
      const response = await axios.post('http://localhost:4000/contact/sendmailtodonor', {
        data,
        donorEmail
      })
      console.log(response);
    } catch (error) {
      console.log('Something went wrong while sending mail!!!', error)
    }
  };

  return (
    <div className="bg-white  text-black py-10 px-5 sm:px-10 md:px-20 lg:px-40">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#FF0000]">
        Contact Donor
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 bg-[#F5F5F5] p-8 rounded-lg shadow-lg "
      >
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 text-zinc-900 rounded-lg border border-zinc-700 focus:ring-2 focus:ring-zinc-500 focus:outline-none"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2 text-zinc-900 rounded-lg border border-zinc-700 focus:ring-2 focus:ring-zinc-500 focus:outline-none"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            rows="4"
            className="w-full px-4 py-2 text-zinc-900 rounded-lg border border-zinc-700 focus:ring-2 focus:ring-zinc-500 focus:outline-none"
            placeholder="Write your message"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactDonor;

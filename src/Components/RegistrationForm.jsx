import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:4000/donors/register',data)
      console.log(response.data)

      navigate('/registeredsuccesslly')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-[8vw]">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-[#FF0000] mb-6">Join BloodLink</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className={`w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.fullname ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
              className={`w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              className={`w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">City</label>
            <input
              type="text"
              {...register("city", { required: "City is required" })}
              className={`w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your city"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Blood Group</label>
            <select
              {...register("bloodgroup", { required: "Blood group is required" })}
              className={`w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.bloodgroup ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select your blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            {errors.bloodgroup && <p className="text-red-500 text-sm mt-1">{errors.bloodgroup.message}</p>}
          </div>

          {/* Availability */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Availability</label>
            <select
              {...register("availability", { required: "Availability is required" })}
              className={`w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.availability ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Are you available to donate?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability.message}</p>}
          </div>

          {/* Last Donation Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Last Donation Date</label>
            <input
              type="date"
              {...register("lastdonationdate", { required: "Last donation date is required" })}
              className={`w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.lastdonationdate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastdonationdate && <p className="text-red-500 text-sm mt-1">{errors.lastdonationdate.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

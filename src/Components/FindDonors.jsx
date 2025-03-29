import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const FindDonors = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm();

  
  const onSubmit = async  (data) => {
    console.log(data);
    
    try {
      const response = await axios.post('http://localhost:4000/donors/getDonors',data)
      console.log(response.data.data);
      const donors = response.data.data
      navigate('/donorsProfile', {state: {donors}})
    } catch (error) {
      console.log('Something went wrong while finding donors',error);
    }
    reset(); // Clear the form after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Find Donor
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Find Input */}
          <div>
            <label
              htmlFor="city"
              className="block text-gray-700 font-medium mb-2"
            >
              Search
            </label>
            <input
              id="city"
              type="text"
              placeholder="Enter name, city, etc."
              {...register('city', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Blood Group Select */}
          <div>
            <label
              htmlFor="bloodgroup"
              className="block text-gray-700 font-medium mb-2"
            >
              Select Blood Group
            </label>
            <select
              id="bloodgroup"
              {...register('bloodgroup', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Choose a blood group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindDonors;

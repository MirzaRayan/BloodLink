import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DonorProfile = () => {
  const location = useLocation();
  const donors = location.state?.donors || [];
  const navigate = useNavigate();

  const handleClick = (e) => {
    const key = e.target.dataset.key;
    console.log(key);  // This should now correctly log the index of the clicked donor
    navigate('/contactdonor', { state: { donorEmail: donors[key].email } });  // Navigate with the donor's email
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {donors.map((donor, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Header Section */}
            <div className="bg-red-500 text-white text-center py-8">
              <h2 className="text-3xl font-bold">{donor.fullName}</h2>
              <p className="text-lg mt-2">{donor.email}</p>
            </div>

            {/* Main Content */}
            <div className="p-6 grid grid-cols-1 gap-4">
              {/* City */}
              <div className="flex flex-col border-b pb-2">
                <span className="text-gray-600 font-semibold">City:</span>
                <span className="text-gray-800">{donor.city}</span>
              </div>

              {/* Blood Group */}
              <div className="flex flex-col border-b pb-2">
                <span className="text-gray-600 font-semibold">Blood Group:</span>
                <span className="text-gray-800">{donor.bloodgroup}</span>
              </div>

              {/* Availability */}
              <div className="flex flex-col border-b pb-2">
                <span className="text-gray-600 font-semibold">Availability:</span>
                <span
                  className={`text-gray-800 ${
                    donor.availability ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {donor.availability ? "Available" : "Not Available"}
                </span>
              </div>

              {/* Last Donation Date */}
              <div className="flex flex-col border-b pb-2">
                <span className="text-gray-600 font-semibold">
                  Last Donation Date:
                </span>
                <span className="text-gray-800">
                  {donor.lastdonationdate || "N/A"}
                </span>
              </div>
            </div>

            {/* Footer Section */}
            <div className="bg-gray-50 text-center py-4">
              <button
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
                data-key={index} // Attach the index as a data attribute on the button
                onClick={handleClick}  // Handle the click event
              >
                Contact Donor
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorProfile;

import React, { useState } from "react";
import { FaExclamationCircle, FaHandHoldingHeart } from "react-icons/fa";

const EmergencySection = () => {
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Mock function to simulate email sending
  const handleSOSClick = () => {
    const confirmAction = window.confirm(
      "Are you sure you want to send an emergency alert to all nearby donors?"
    );

    if (confirmAction) {
      setSending(true);
      setStatusMessage(""); // Reset the status

      // Simulate API/mail logic with setTimeout
      setTimeout(() => {
        setSending(false);
        setStatusMessage(
          "Emergency mail has been sent successfully to nearby donors!"
        );
      }, 2000);
    }
  };

  return (
    <div className="py-[8vw] flex items-center justify-center bg-[#F5F5F5] px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl text-center">
        {/* Header */}
        <h2 className="text-2xl font-bold text-red-600 flex items-center justify-center gap-2 mb-6">
          <FaExclamationCircle className="text-3xl" />
          Emergency SOS Alert
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 text-lg">
          In case of an emergency, click the <strong>SOS Button</strong> to send
          an urgent alert to all available blood donors in your area.
        </p>

        {/* SOS Button */}
        <button
          onClick={handleSOSClick}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          disabled={sending}
        >
          {sending ? "Sending..." : "🚨 Send SOS"}
        </button>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-6 text-green-600 font-medium">{statusMessage}</p>
        )}

        {/* Decorative Icon */}
        <div className="flex justify-center mt-8">
          <FaHandHoldingHeart className="text-red-500 text-6xl" />
        </div>
      </div>
    </div>
  );
};

export default EmergencySection;

import React from 'react';
import img10 from '../images/img10.jpg';

const ImageSection = () => {
  return (
    <div className="flex items-center justify-center p-10 sm:p-16 relative">
      <img src={img10} alt="" className="w-[90%] sm:w-[80%] rounded-2xl" />
      <div className="w-[90%] sm:w-[60%] md:w-[50%] bg-blue-200 px-6 sm:px-10 py-6 sm:py-8 absolute bottom-4 sm:bottom-[8%] shadow-lg rounded-lg">
        <p className="text-sm sm:text-lg font-sans font-semibold text-center text-gray-500 tracking-wide">
          "Blood donation is a life-saving act that helps patients during emergencies, surgeries, and illnesses. 
          It fosters compassion, supports healthcare systems, and ensures a steady blood supply for those in need."
        </p>
      </div>
    </div>
  );
};

export default ImageSection;

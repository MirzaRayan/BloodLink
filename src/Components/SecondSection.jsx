import React from 'react';
import img4 from '../images/img4.jpg';

const SecondSection = () => {
  return (
    <div className="bg-[#F5F5F5] py-[7vw] px-6 md:px-12">
      <h1 className="text-center font-semibold text-3xl md:text-5xl">Why Donate Blood?</h1>

      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10">

        {/* Text Section */}
        <div className="w-full lg:w-3/5 font-sans font-light tracking-wide text-center lg:text-left">
          <h2 className="text-[#FF0000] text-2xl md:text-3xl font-bold leading-[1.5] mb-4">
            A single blood donation can help save up to three lives
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Blood donation is a vital act of kindness that saves lives. Every two seconds, someone needs blood, yet only 3% of eligible donors give annually. A single donation can save up to three lives by providing red cells, platelets, and plasma. Blood is essential for surgeries, cancer treatments, and trauma care. Regular donation improves cardiovascular health, reduces harmful iron levels, and fosters a sense of community. By donating blood, you contribute to global health and ensure critical supplies for emergencies, creating a healthier, more connected society.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <img src={img4} alt="Blood Donation" className="w-[80%] md:w-[60%] lg:w-[70%] rounded-t-2xl rounded-br-2xl shadow-lg" />
        </div>
        
      </div>
    </div>
  );
};

export default SecondSection;

import React from 'react';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import ReviewForm from './ReviewForm';
import EmergencySection from './EmergencySection';
import ImageSection from './ImageSection';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signin');
  };

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white px-6 lg:px-0">
        {/* Text Section */}
        <div className="w-full lg:w-2/5 flex flex-col items-center justify-center text-center lg:text-left space-y-6 lg:px-12">
          <h1 className="text-xl sm:text-2xl font-bold text-[#FF0000]">Welcome to BloodLink</h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Be someone’s hope. Donate blood.
          </h2>
          <h3 className="text-gray-700 text-sm sm:text-base">
            BloodLink connects heroes with those in need, bridging lives through the simple, life-saving act of blood donation. A few minutes of your time can mean a lifetime for someone else.
          </h3>
          <button
            className="text-white px-4 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600"
            onClick={handleClick}
          >
            Donate Blood
          </button>
        </div>

        {/* Images Section */}
        <div className="w-full lg:w-3/5 flex flex-wrap items-center justify-center gap-4 mt-8 lg:mt-0">
          <div className="w-1/3 sm:w-[30%]">
            <img src={img6} alt="Blood donation" className="rounded-b-2xl rounded-tl-2xl w-full h-auto" />
          </div>
          <div className="w-1/3 sm:w-[30%]">
            <img src={img5} alt="Blood donation" className="rounded-t-2xl w-full h-auto" />
          </div>
          <div className="w-1/3 sm:w-[30%]">
            <img src={img7} alt="Blood donation" className="rounded-b-2xl rounded-tr-2xl w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <ImageSection />
      <EmergencySection />
      <ReviewForm />
      <FifthSection />
    </>
  );
};

export default HeroSection;

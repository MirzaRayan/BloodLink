import React from "react";
import img2 from '../images/img2.jpg'
import AboutCards from "./AboutCards";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16" id="about">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-[#FF0000]">BloodLink</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connecting donors with recipients to ensure that every drop of blood saves a life. Together, we make a difference!
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src={img2}
                alt="About BloodLink"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-red-500 text-white p-3 rounded-lg shadow-md">
                <span className="text-xl font-semibold">Save Lives Together!</span>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              BloodLink is an innovative platform committed to saving lives by bridging the gap between blood donors and those in need. Our mission is to ensure timely availability of blood, especially during emergencies. 
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We aim to empower communities by creating awareness and making the blood donation process seamless, reliable, and efficient.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-lg">
                  <i className="fas fa-hand-holding-heart text-2xl"></i>
                </div>
                <p className="text-gray-700 font-medium">Life-Saving Network</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg">
                  <i className="fas fa-user-friends text-2xl"></i>
                </div>
                <p className="text-gray-700 font-medium">Community Support</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-lg">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <p className="text-gray-700 font-medium">100% Reliable System</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 text-white flex items-center justify-center rounded-lg">
                  <i className="fas fa-clock text-2xl"></i>
                </div>
                <p className="text-gray-700 font-medium">Quick Response</p>
              </div>
            </div>

            {/* Call-to-Action */}
            <div className="mt-8">
              <a
                href="#donate"
                className="inline-block bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
              >
                Join as a Donor
              </a>
            </div>
          </div>
        </div>
      </div>
      <AboutCards/>
    </section>
  );
};

export default AboutSection;

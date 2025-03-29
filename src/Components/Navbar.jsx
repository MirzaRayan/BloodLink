import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        const key = e.target.dataset.key;
        if (key === '0') navigate('/');
        if (key === '1') navigate('/about');
        if (key === '2') navigate('/signin');
        if (key === '3') navigate('/findDonors');
        setIsOpen(false); // Close menu on item click
    };

    return (
        <div className='bg-[#F5F5F5] py-4 px-6 md:px-12 flex items-center justify-between relative'>
            <h1 className='text-[#FF0000] text-3xl md:text-4xl font-semibold'>BloodLink</h1>
            
            {/* Mobile menu button */}
            <button className='md:hidden z-50' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
            
            {/* Navigation Links */}
            <ul className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex bg-[#F5F5F5] md:bg-transparent flex-col md:flex-row gap-4 md:gap-12 p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}`}>
                {["Home", "About Us", "Donate Blood", "Find Donors", "Contact Us"].map((item, index) => (
                    <Link key={index} data-key={index} className={`block md:inline ${index === 4 ? 'bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold' : ''} text-lg md:text-base`} onClick={handleClick}>{item}</Link>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;

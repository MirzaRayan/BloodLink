import React from 'react';
import { AiOutlineLink } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import { MdGroups } from "react-icons/md";

const ThirdSectionCards = () => {
    const data = [
        {
            id: 1,
            heading: 'Direct Connection',
            para: 'Traditional blood banks often involve waiting and complex processes. With BloodLink, accepters can instantly find donors in their area by entering their blood group and location.',
            icon: <AiOutlineLink size={50} />,
        },
        {
            id: 2,
            heading: 'Emergency SOS',
            para: 'In emergencies, the SOS button is a lifesaver. One click sends an email to all nearby donors, ensuring a rapid response. No waiting, no delays – just help when it matters the most.',
            icon: <FaAmbulance size={50} />,
        },
        {
            id: 3,
            heading: 'Efficiency & Transparency',
            para: 'BloodLink simplifies the process by removing intermediaries. Our direct and transparent system ensures that you quickly find compatible donors without any unnecessary complications or delays.',
            icon: <BsSpeedometer size={50} />,
        },
        {
            id: 4,
            heading: 'Empowering Communities',
            para: 'BloodLink is more than a platform; it’s a community of life-savers. By connecting donors and accepters, we empower people to make a difference and save lives in their communities.',
            icon: <MdGroups size={50} />,
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6 text-white font-sans py-10 px-6">
            {data.map((item) => (
                <div key={item.id} className="flex flex-col items-center w-full sm:w-[45%] lg:w-[22%] h-auto bg-gradient-to-b from-[#FF0000] to-[#FF5252] p-6 rounded-lg text-center shadow-lg">
                    <h1 className="text-lg md:text-xl font-bold p-2">{item.heading}</h1>
                    <p className="tracking-wide leading-relaxed text-sm md:text-base p-3">{item.para}</p>
                    <div className="mt-4">{item.icon}</div>
                </div>
            ))}
        </div>
    );
};

export default ThirdSectionCards;

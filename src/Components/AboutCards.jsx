import React from 'react'
import img11 from '../images/img11.jpg'
import img from '../images/img.jpg'
import img13 from '../images/img13.jpg'

const AboutCards = () => {
    const data = [
        {
            heading: 'Our Mission',
            content: 'At BloodLink, we are passionately dedicated to bridging the gap between individuals who selflessly donate blood and those who urgently need it to save their lives. We understand the critical importance of timely access to blood and aim to create a platform that is not only reliable but also incredibly accessible and user-friendly. By harnessing the power of technology, we provide an efficient system that ensures donors and recipients can connect effortlessly, no matter where they are. Our ultimate goal is to build a network that minimizes the challenges of locating blood during emergencies. We strive to save lives by fostering a sense of community, hope, and collective responsibility, ensuring that no one faces life-threatening delays due to a lack of available donors.',
            img: img11,
        },
        {
            heading: 'What We Do',
            content: 'At BloodLink, we take pride in utilizing cutting-edge technology to revolutionize the way people locate and connect with verified blood donors. Our innovative platform employs real-time location tracking to identify donors within specific areas, ensuring that help is always just a few clicks away. With advanced features like emergency SOS alerts, automated notifications, and an easy-to-navigate interface, we simplify the often stressful process of finding blood during critical situations. Beyond technology, we work to cultivate a compassionate network of volunteers who understand the profound impact of their contributions. BloodLink is more than a tool; it is a lifeline designed to empower communities, streamline emergency responses, and create an ecosystem where saving lives becomes a shared and meaningful mission.',
            img: img13,
        },
        {
            heading: 'Why It Matters',
            content: 'Every single day, countless lives hang in the balance due to the persistent shortage of blood. From unexpected accidents to complex surgeries and chronic medical conditions, the need for timely and adequate blood donations is constant and critical. BloodLink addresses this urgent need by creating a platform that ensures no family or patient has to endure the trauma of searching for donors during emergencies. The availability of blood can mean the difference between life and death, and that’s why BloodLink goes beyond being a digital platform—it is a call to action for humanity. By connecting donors and recipients, we instill hope, build trust, and unite communities in the shared goal of saving lives. Together, we can ensure that no one is left without help when they need it most.',
            img: img,
        },
    ];

    return (
        <div className="p-6 md:p-12">
            {data.map((item, index) => (
                <div 
                    key={index} 
                    className={`flex flex-col md:flex-row items-center justify-between w-full p-8 md:p-12 gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-2xl sm:text-3xl font-bold p-2">{item.heading}</h1>
                        <p className="tracking-widest p-2 text-sm sm:text-base font-sans text-gray-600">
                            {item.content}
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src={item.img} alt={item.heading} className="w-full sm:w-[80%] md:w-[35vw] h-[40vh] rounded-lg shadow-lg object-cover" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutCards;

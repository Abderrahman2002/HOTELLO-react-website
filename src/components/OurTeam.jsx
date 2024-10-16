import  { useState } from 'react';

const OurTeam = () => {
    // Team member data
    const teamMembers = [
        {
            name: "John Doe",
            role: "General Manager",
            description: "John oversees all hotel operations and ensures that everything runs smoothly.",
            imgSrc: "/img/hean-Doe.jpeg"
        },
        {
            name: "Jane Smith",
            role: "Front Desk Supervisor",
            description: "Jane manages the front desk team and ensures that guests receive exceptional service.",
            imgSrc: "/img/jane-smith.jpeg"
        },
        {
            name: "Michael Brown",
            role: "Executive Chef",
            description: "Michael is responsible for creating gourmet dishes and overseeing the kitchen team.",
            imgSrc: "/img/michell brown.jpeg"
        },
        {
            name: "Lisa White",
            role: "Housekeeping Manager",
            description: "Lisa ensures that all rooms are clean and meet the highest standards.",
            imgSrc: "/img/lissa-white.jpeg"
        },
    ];

    // State to track current member being displayed
    const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

    // Function to go to the next member
    const handleNext = () => {
        setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    };

    // Function to go to the previous member
    const handlePrevious = () => {
        setCurrentMemberIndex((prevIndex) =>
            prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
        );
    };

    // Current member to be displayed
    const currentMember = teamMembers[currentMemberIndex];

    return (
        <section className="bg-gray-100 py-16 md:py-24" id="our-team">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
                    <p className="text-lg text-gray-600">Meet the amazing team behind our hotels success.</p>
                </div>

                <div className="flex justify-center items-center space-x-6">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevious}
                        className="text-gray-800 hover:text-gray-600 transition duration-300"
                    >
                        <i className="fas fa-chevron-left fa-2x"></i>
                    </button>

                    {/* Employee Card */}
                    <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md transform transition duration-500 hover:scale-105">
                        <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-6 transition-transform duration-500 group-hover:scale-105">
                            <img
                                src={currentMember.imgSrc}
                                alt={currentMember.name}
                                className="w-full h-full object-cover rounded-full transition duration-500"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-800">{currentMember.name}</h3>
                            <p className="text-md text-gray-500 italic">{currentMember.role}</p>
                            <p className="mt-4 text-gray-600">{currentMember.description}</p>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="text-gray-800 hover:text-gray-600 transition duration-300"
                    >
                        <i className="fas fa-chevron-right fa-2x"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-gray-800 p-4 shadow-lg fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold flex items-center">
                        <a href="#"><img src="./img/logo.png" alt="logo" className="w-16 h-16" /></a>
                        <span className="text-xl">HOTELLO</span>
                    </div>
                    <div className="hidden md:flex space-x-2">
                        <a href="#" className="text-gray-300 hover:text-white py-2 px-3 transition duration-300">Home</a>
                        <a href="#" className="text-gray-300 hover:text-white py-2 px-3 transition duration-300">About</a>
                        <a href="#" className="text-gray-300 hover:text-white py-2 px-3 transition duration-300">Company</a>
                        <a href="#" className="text-gray-300 hover:text-white py-2 px-3 transition duration-300">Our Team</a>
                        <a href="#" className="text-gray-300 hover:text-white py-2 px-3 transition duration-300">Contacts</a>
                        <a href="#" className="text-gray-300 hover:text-white py-2 px-3 transition duration-300">Gallery</a>
                        <a href="#" className="text-gray-300 hover:text-white py-2 px-3 transition duration-300">Explore</a>
                        <a href="#" className="text-gray-300 hover:text-white py-2 px-3 transition duration-300">Offers</a>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
                            Book Now
                        </button>
                        {/* Icônes pour changer la langue */}
                        <div className="flex space-x-2 ml-4">
                            <button className="text-gray-300 hover:text-white">
                                <i className="fas fa-flag-usa w-6 h-6" title="English"></i>
                            </button>
                            <button className="text-gray-300 hover:text-white">
                                <i className="fas fa-flag-fr w-6 h-6" title="Français"></i>
                            </button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile navigation */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-700`}>
                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 transition duration-300 ml-6">Stay</a>
                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 transition duration-300 ml-6">Conference Center</a>
                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 transition duration-300 ml-6">Weddings</a>
                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 transition duration-300 ml-6">Dining</a>
                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 transition duration-300 ml-6">Amenities</a>
                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 transition duration-300 ml-6">Gallery</a>
                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 transition duration-300 ml-6">Explore</a>
                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 transition duration-300 ml-6">Offers</a>
                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 transition duration-300 ml-6"><button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
                            Book Now
                        </button></a>
                    

                </div>
            </nav>
        </>
    );
};

export default Header;

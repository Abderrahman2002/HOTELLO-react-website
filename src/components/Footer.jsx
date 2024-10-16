// src/components/Footer.jsx

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Logo and About */}
                    <div>
                        <img src='./img/logo.png' alt="Hotello Logo" className="w-24 h-auto mb-4" />
                        <p className="text-sm">
                            Hotello is a luxury hotel offering world-class services to all our guests. Experience comfort, elegance, and top-notch hospitality with us.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">Home</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">About</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">Rooms</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">Offers</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Support & Privacy Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">Help Center</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">FAQ</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">Support</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition duration-300">
                                <i className="fab fa-facebook-f text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-blue-400 transition duration-300">
                                <i className="fab fa-twitter text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-blue-400 transition duration-300">
                                <i className="fab fa-instagram text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-blue-400 transition duration-300">
                                <i className="fab fa-linkedin-in text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8"></div>

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm">
                    <p>&copy; {new Date().getFullYear()} Hotello. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-400 transition duration-300 ml-4">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-400 transition duration-300 ml-4">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

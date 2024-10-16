// src/components/Contact.jsx

const Contact = () => {
    return (
        <section className="bg-gray-100 py-16 md:py-24" id="contact">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-600">We’d love to hear from you. Please fill out the form below and we’ll get in touch as soon as possible.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="5"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                            <p className="text-gray-300 mb-4">
                                You can also reach us directly at the details below. Feel free to contact us for any inquiries or questions.
                            </p>
                            <ul className="text-gray-300 space-y-4">
                                <li>
                                    <i className="fas fa-map-marker-alt mr-2 text-blue-400"></i>
                                    123 Luxury Street, Hotello City, CA 90210
                                </li>
                                <li>
                                    <i className="fas fa-phone-alt mr-2 text-blue-400"></i>
                                    +1 234 567 890
                                </li>
                                <li>
                                    <i className="fas fa-envelope mr-2 text-blue-400"></i>
                                    contact@hotello.com
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-6">
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
                </div>
            </div>
        </section>
    );
};

export default Contact;

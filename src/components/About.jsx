const About = () => {
    return (
<section className="bg-gray-100 py-8 md:py-12"> {/* Reduced py-16 to py-8 and md:py-24 to md:py-12 */}
<div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About Hotello</h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        We are dedicated to providing the best hospitality service possible. Our team is committed to excellence and innovation, ensuring that our guests receive a top-notch experience tailored to their needs.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800">Our Commitment</h3>
                        <p className="text-gray-700">
                            At Hotello, we strive to create a home away from home for our guests. With our attention to detail and personalized service, we aim to exceed expectations and make every stay memorable.
                        </p>
                        <a href="#" className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
                            Learn More
                        </a>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                        <img
                            src='./img/image.webp'
                            alt="Hotello interior"
                            className="object-cover w-full h-full"
                        />     
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

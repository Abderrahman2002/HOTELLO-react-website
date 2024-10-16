
const Offers = () => {
  // Sample hotel offers
  const offers = [
    {
      title: "Standard Room",
      price: 100,
      description: "A cozy room with basic amenities for a comfortable stay.",
      features: ["Free Wi-Fi", "Breakfast included", "Flat-screen TV"],
    },
    {
      title: "Deluxe Room",
      price: 150,
      description: "Spacious room with premium amenities and a city view.",
      features: ["Free Wi-Fi", "Breakfast included", "City view", "Minibar"],
    },
    {
      title: "Suite",
      price: 250,
      description: "Luxury suite with a separate living area and breathtaking views.",
      features: ["Free Wi-Fi", "Breakfast included", "Ocean view", "Private balcony"],
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Exclusive Offers</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {offers.map((offer, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{offer.title}</h3>
            <p className="text-gray-600 mb-4">{offer.description}</p>
            <ul className="text-gray-600 mb-6">
              {offer.features.map((feature, i) => (
                <li key={i} className="mb-2">- {feature}</li>
              ))}
            </ul>
            <div className="text-4xl font-bold text-blue-600 mb-4">${offer.price}/night</div>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 shadow-md">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;

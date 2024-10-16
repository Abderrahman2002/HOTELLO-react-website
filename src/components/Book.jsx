
const Book = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      image: "../img/Deluxe Room.jpeg",
      description: "A spacious room with king-sized bed and a stunning view.",
    },
    {
      id: 2,
      name: "Standard Room",
      image: "../img/Standard Room.jpeg",
      description: "A cozy room with modern amenities and a comfortable bed.",
    },
    {
      id: 3,
      name: "Suite Room",
      image: "../img/Suite Room.jpeg",
      description: "A luxurious suite with separate living area and premium features.",
    },
    {
      id: 4,
      name: "Family Room",
      image: "../img/Family Room.jpeg",
      description: "Perfect for families, with extra space and comfort.",
    },
    {
      id: 5,
      name: "Single Room",
      image: "../img/Single Room.jpeg",
      description: "Ideal for solo travelers, offering comfort and privacy.",
    },
    {
      id: 6,
      name: "Presidential Suite",
      image: "../img/Presidential Suite.jpeg",
      description: "The most luxurious suite, offering top-tier amenities.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Book Your Stay</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Choose from our variety of rooms and make your reservation today.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
              <img src={room.image} alt={room.name} className="w-full h-48 object-cover transition-transform transform hover:scale-110" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="inline-block bg-gray-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-600 transition duration-300"
                  >
                    Preview
                  </a>
                  <a
                    href="#"
                    className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Book;

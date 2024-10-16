

const RandomGallery = () => {
  const images = [
    { src: "/img/Suite Room.jpeg", alt: "Hotel Lobby", size: 'row-span-1 col-span-1' }, // small
    { src: "/img/Standard Room.jpeg", alt: "Deluxe Room", size: 'row-span-1 col-span-2' }, // wide
    { src: "/img/Standard Room.jpeg", alt: "Deluxe Room", size: 'row-span-1 col-span-1' }, // small
    { src: "/img/Single Room.jpeg", alt: "Luxury Suite", size: 'row-span-1 col-span-2' }, // wide
    { src: "/img/Family Room.jpeg", alt: "Swimming Pool", size: 'row-span-1 col-span-2' }, // wide
    { src: "/img/Presidential Suite.jpeg", alt: "Restaurant", size: 'row-span-3 col-span-4 mt-8' }, // very large, full width
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Hotel Gallery</h2>
          <p className="text-lg text-gray-600">Discover the beauty and luxury of our hotel through this gallery.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg shadow-md group transform transition duration-500 hover:scale-105 ${image.size}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:brightness-75 transition duration-500 max-h-48 md:max-h-64"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                <span className="text-white text-sm md:text-lg font-semibold">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomGallery;

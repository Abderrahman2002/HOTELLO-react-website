import  { useEffect, useState } from 'react';

export default function Hero() {
    const [text, setText] = useState('');
    const fullText = "Experience Luxury at Its Finest"; // Hotel-themed title
    const paragraphText = "Indulge in unparalleled comfort and world-class amenities. Our hotel offers breathtaking views, exquisite dining, and personalized service to make your stay unforgettable."; // Hotel-themed paragraph
    useEffect(() => {
        let index = 0;
        const typingEffect = setInterval(() => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100); // Ajustez la vitesse de frappe ici

        return () => clearInterval(typingEffect);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video 
                className="absolute inset-0 w-full h-full object-cover"
                src="./img/hero-video.mp4" 
                autoPlay 
                muted 
                loop
            >
                Votre navigateur ne prend pas en charge la balise vidéo.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <h1 
                    className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
                    aria-label={fullText}
                >
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        {text}
                    </span>
                    <span className="animate-blink ml-1 inline-block h-12 w-1 bg-white" aria-hidden="true"></span>
                </h1>
                <p className="max-w-2xl text-lg sm:text-xl md:text-2xl">
                    {paragraphText}
                </p>
                <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <a
                        href="#"
                        className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Book now
                    </a>
                    <a
                        href="#"
                        className="rounded-full border border-white bg-transparent px-8 py-3 text-lg font-semibold transition-colors hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
}
import React from "react";

const Clientele = () => {
  const clients = [
    { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLTfHpyOzovAFp8opAFd2nRKRaTt09HcpOQ&s", alt: "Disney+ Hotstar" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCLCNFVWMuVjFQzMDLKlY3xXVMO9cFT3FFQ&s", alt: "Star Plus" },
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oaIYY2mGsHSAJpF6ODoF-lXeTNK4m9t6wA&s", alt: "Zee TV" },
    { id: 4, src: "https://upload.wikimedia.org/wikipedia/commons/4/48/SETindialogo_new.png", alt: "Sony Entertainment" },
    { id: 5, src: "https://play-lh.googleusercontent.com/_FGpN1UYjPgfL1t3TSybSllUdlzoLTUlLx36UUUpPm8W3-w37SNd1ZNfJbwKzwPyJ3w", alt: "Sony Liv" },
    { id: 6, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBserZUlPWk20gmdG5nwvyXHsEP7mqFsDLA&s", alt: "Dangal" },
    { id: 7, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/LifeOK_logo_2011.png/220px-LifeOK_logo_2011.png", alt: "Life OK" },
    { id: 8, src: "https://upload.wikimedia.org/wikipedia/en/b/b9/Shemaroo_Entertainment_Logo.png", alt: "Shemaroo" },
    { id: 9, src: "https://img.freepik.com/free-vector/red-logo-play_1034-412.jpg", alt: "Play" },
    { id: 10, src: "https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg", alt: "Movie" },
    { id: 11, src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Voot_website_logo.png", alt: "Voot" },
    { id: 12, src: "https://static.vecteezy.com/system/resources/thumbnails/008/573/556/small_2x/vibrant-pink-and-blue-v-letter-logo-concept-creative-minimal-monochrome-monogram-with-lines-and-finger-print-pattern-vector.jpg", alt: "V" },
  ];

  return (
    <section id="clientele">
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">OUR CLIENTELE</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <img
              src={client.src}
              alt={client.alt}
              className="max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Clientele;

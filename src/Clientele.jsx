import React from "react";

const Clientele = () => {
  const clients = [
    { id: 1, src: "https://play-lh.googleusercontent.com/fTp32YyE-fi7cdG4V6dDR5OCLsx5bRhgMuCQLXroevnHiZWRY72Cxcseb6vlznTEDQ", alt: "MX Player" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6ppYvn4kCipfwvI3NG3v4eXyH3EGxtRJnA&s", alt: "Amazon" },
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXAundgZyly-yBDY6hOfwfLUesNp64je08NA&s", alt: "Amazon Mini" },
    { id: 4, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Aha_OTT_Logo.svg/800px-Aha_OTT_Logo.svg.png", alt: "Aha" },
    { id: 5, src: "https://play-lh.googleusercontent.com/vcqCewpMTNhNhV2IrGWO-N0DZ-NmQ3RaeAMYoZz65_J8ivwIzsR71HBQ63oQqP9PPNE", alt: "Disney+Hotstar" },
    { id: 6, src: "https://www.wtevent.com/wpsystem/wp-content/uploads/Hungama-logo-blue.jpg", alt: "Hungama" },
    { id: 7, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-kk6Gw5FoOGGdlfzcQW_-Y2Vc9zVFqWzSw&s", alt: "Dangal" },
    { id: 8, src: "https://upload.wikimedia.org/wikipedia/en/b/b9/Shemaroo_Entertainment_Logo.png", alt: "Shemaroo" },
    { id: 9, src: "/Zoomaax Tv Logo.jpeg", alt: "Zoomaax" },
    { id: 10, src: "https://seekvectorlogo.com/wp-content/uploads/2018/01/sony-vector-logo.png", alt: "Movie" },
    { id: 11, src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Voot_website_logo.png", alt: "Voot" },
    { id: 12, src: "https://static.vecteezy.com/system/resources/thumbnails/008/573/556/small_2x/vibrant-pink-and-blue-v-letter-logo-concept-creative-minimal-monochrome-monogram-with-lines-and-finger-print-pattern-vector.jpg", alt: "V" },
  ];

  return (
    <section id="clientele" className="pt-20 mt-20">
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Who We Work With</h2>
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

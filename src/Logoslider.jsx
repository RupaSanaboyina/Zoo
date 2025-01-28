import React from "react";

const LogoSlider = () => {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/brand_logo.png",
    "/logo4.png",
  ];

  return (
    <div className="bg-[#0C1A2A] py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Market Leaders Choose Us
      </h2>

      {/* Logo Slider */}
      <div className="relative overflow-hidden w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div
          className="flex animate-loop-scroll"
          style={{ width: "200%" }} // Ensure enough space for looping logos
        >
          {[...logos, ...logos].map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Logo ${index + 1}`}
              className="h-20 w-auto mx-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;

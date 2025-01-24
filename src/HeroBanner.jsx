import React from "react";
// import ModelCanvas from "./ModelCanvas";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-screen bg-[#0B1A2A]">
      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-8 py-16 md:px-16 md:py-24">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-[#00B6B6]">Expert</span> For Your <br /> Growing Business!
          </h1>
        </div>
        {/* Buttons */}
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition">
            About Us →
          </button>
          <button className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition">
            Our History →
          </button>
        </div>
      </div>

      {/* 3D Model Section
      <div className="absolute right-0 w-1/2 h-full">
        <ModelCanvas />
      </div> */}
    </section>
  );
};

export default HeroBanner;

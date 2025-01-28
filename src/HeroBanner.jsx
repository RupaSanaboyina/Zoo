import React from "react";
// import ModelCanvas from "./ModelCanvas";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-screen bg-[#0B1A2A]" id="home">
      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-8 py-16 md:px-16 md:py-24">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-[#00B6B6]">Expert</span> For Your <br /> Growing Business!
          </h1>
        </div>
        {/* Buttons */}
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition" >
            Contact Us →
          </button>
          <button className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition">
            Our Services →
          </button>
        </div>
      </div>

    
    </section>
  );
};

export default HeroBanner;
